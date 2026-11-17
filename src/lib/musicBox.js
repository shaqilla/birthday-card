// A tiny synthesized music-box. No audio files, no autoplay — only starts on
// a user gesture.
const STEP_DURATION = 0.44
const LOOKAHEAD = 0.9

// C major, two gentle phrases. 0 means a rest.
const MELODY = [
  72, 76, 79, 76, 81, 79, 76, 74, 77, 81, 84, 81, 79, 76, 74, 72, 72, 76, 79,
  84, 83, 79, 76, 74, 77, 81, 84, 81, 79, 76, 72, 0,
]
const BASS = { 0: 48, 8: 45, 16: 41, 24: 43 }

const midiToFreq = (midi) => 440 * 2 ** ((midi - 69) / 12)

export function createMusicBox(volume = 0.6) {
  let audio = null
  let master = null
  let timer = null
  let step = 0
  let nextTime = 0
  let playing = false

  function note(freq, time, level, duration, type = 'sine') {
    if (!audio) return
    const osc = audio.createOscillator()
    const gain = audio.createGain()
    osc.type = type
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.0001, time)
    gain.gain.exponentialRampToValueAtTime(level, time + 0.015)
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration)
    osc.connect(gain)
    gain.connect(master)
    osc.start(time)
    osc.stop(time + duration + 0.05)
  }

  function scheduleStep(index, time) {
    const midi = MELODY[index]
    if (midi) {
      const freq = midiToFreq(midi)
      note(freq, time, 0.1, 2.6)
      note(freq * 2, time, 0.018, 1.4, 'triangle')
    }
    if (BASS[index] !== undefined) {
      const bass = midiToFreq(BASS[index])
      note(bass, time, 0.05, 3.4)
      note(bass * 1.5, time, 0.018, 2.8)
    }
  }

  function scheduler() {
    if (!audio) return
    while (nextTime < audio.currentTime + LOOKAHEAD) {
      scheduleStep(step, nextTime)
      nextTime += STEP_DURATION
      step = (step + 1) % MELODY.length
    }
  }

  async function start() {
    const AudioCtor = window.AudioContext || window.webkitAudioContext
    if (!AudioCtor || playing) return playing
    audio = new AudioCtor()
    await audio.resume()

    master = audio.createGain()
    master.gain.value = 0.0001

    const filter = audio.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 3200
    filter.Q.value = 0.4
    master.connect(filter)
    filter.connect(audio.destination)

    // A whisper of echo, for that music-box-in-a-hall feeling.
    const delay = audio.createDelay(1)
    delay.delayTime.value = 0.36
    const feedback = audio.createGain()
    feedback.gain.value = 0.26
    const wet = audio.createGain()
    wet.gain.value = 0.2
    filter.connect(delay)
    delay.connect(feedback)
    feedback.connect(delay)
    delay.connect(wet)
    wet.connect(audio.destination)

    const now = audio.currentTime
    master.gain.linearRampToValueAtTime(Math.max(0.05, volume * 0.45), now + 1.4)
    nextTime = now + 0.2
    step = 0
    playing = true
    scheduler()
    timer = window.setInterval(scheduler, 180)
    return true
  }

  function stop() {
    if (!audio) return
    const closing = audio
    const closingMaster = master
    playing = false
    window.clearInterval(timer)
    timer = null
    audio = null
    master = null
    const now = closing.currentTime
    try {
      closingMaster.gain.cancelScheduledValues(now)
      closingMaster.gain.setValueAtTime(closingMaster.gain.value, now)
      closingMaster.gain.linearRampToValueAtTime(0.0001, now + 0.5)
    } catch {
      /* the context may already be closing */
    }
    window.setTimeout(() => {
      closing.close().catch(() => {})
    }, 700)
  }

  return {
    start,
    stop,
    get playing() {
      return playing
    },
  }
}
