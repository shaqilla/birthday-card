// Everything personal lives here. Edit this file to make the gift your own.

const NAME = 'Alita'

export const siteConfig = {
  name: NAME,
  hero: {
    eyebrow: 'A little celebration, just for you',
    titleTop: 'Happy Birthday,',
    subtitle: 'Today is all about celebrating you.',
    extra:
      'So I made you a little world to wander through — one full of photos, words, and small surprises.',
    button: "Let's Explore!",
    cardNote: 'wish big, always',
  },
  opening: {
    eyebrow: 'A little world, made just for you',
    title: `Hey, ${NAME}!`,
    subtitle: 'Someone made a little something just for you...',
    button: 'Open Your Surprise',
    seal: NAME.charAt(0),
    envelopeNote: 'a little surprise inside',
    hint: 'Best enjoyed slowly, with the music on.',
  },
  gallery: {
    eyebrow: 'Chapter one · The scrapbook',
    titleLead: 'Little moments',
    titleAccent: `with ${NAME}`,
    subtitle:
      'A handful of favourite frames, kept safe on paper. Tap one to hold onto it a little longer.',
    hint: 'tap a photo to look closer',
  },
  messages: {
    eyebrow: 'Chapter two · Little notes',
    titleLead: 'Little Things',
    titleAccent: 'I Want You To Know',
    subtitle: 'Five tiny cards, five things that deserve to be said out loud.',
  },
  surprise: {
    eyebrow: 'Chapter three · A tiny detour',
    titleLead: 'Feeling',
    titleAccent: 'Curious?',
    subtitle:
      'There is a little box of fortune-cookie thoughts waiting. Open it as many times as you like.',
    hint: 'tap the box for a little something',
    button: 'Open the little box',
    againButton: 'One more, please',
  },
  cake: {
    eyebrow: 'Chapter four · Make a wish',
    titleLead: 'Close Your Eyes,',
    titleAccent: 'Make a Wish',
    subtitle:
      'No microphones and no pressure — just a quiet wish and a little birthday magic.',
    button: 'Make a Wish',
    relightButton: 'Light the candles again',
    prompt: 'Whenever you are ready. The candles are listening.',
    wish: `May this year bring you gentle days, loud laughter, and every little thing you have been quietly wishing for. Happy birthday, ${NAME}.`,
  },
  letter: {
    eyebrow: 'Chapter five · From me to you',
    titleLead: 'A Letter',
    titleAccent: 'For You',
    subtitle: 'Some things are better said on paper.',
    coverKicker: `For ${NAME}`,
    coverNote: 'sealed with a little love',
    button: 'Break the seal',
    body: `Dear Alita,

Happy birthday!

I hope this new chapter of your life brings you countless reasons to smile, wonderful experiences, and opportunities to grow.

May you always find happiness in the little things, courage in difficult moments, and people who appreciate you for who you are.

Thank you for being you.`,
    closing: 'With lots of love and best wishes,',
    signature: 'Your Friend',
    ps: 'P.S. This little world will always be here whenever you want to come back to it.',
  },
  finale: {
    eyebrow: 'One last thing',
    title: "That's Not All...",
    subtitle: "Here's to another year of beautiful memories!",
    note: 'Thank you for being part of my memories. I hope this year is kind to you.',
    button: 'Replay My Birthday Surprise',
    footer: `Made with love, just for ${NAME}`,
  },
  // Optional: drop an mp3/ogg into public/music and set the path here to use
  // your own track. Leave empty to use the built-in music-box melody.
  music: {
    src: '/music/birthday.mp3',
    volume: 0.6,
  },
}

// Photos: replace the files in public/images/ with the same names, then tweak
// the captions, alt text and tape colours below.
export const photos = [
  {
    src: '/images/alita-1.jpg',
    alt: 'A favourite photo of Alita',
    caption: 'that laugh of yours',
    tape: 'pink',
    tilt: -3.2,
  },
  {
    src: '/images/alita-2.jpg',
    alt: 'Alita smiling in a golden moment',
    caption: 'golden hour, always',
    tape: 'lavender',
    tilt: 2.4,
  },
  {
    src: '/images/alita-3.jpg',
    alt: 'A candid photo of Alita',
    caption: 'one of my favourites',
    tape: 'blue',
    tilt: -1.8,
  },
  {
    src: '/images/alita-4.jpg',
    alt: 'Alita on a little adventure',
    caption: 'little adventures together',
    tape: 'peach',
    tilt: 3,
  },
  {
    src: '/images/alita-5.jpg',
    alt: 'A portrait of Alita being herself',
    caption: 'simply you, being you',
    tape: 'pink',
    tilt: -2.6,
  },
]

export const messageCards = [
  {
    message: 'You deserve all the happiness in the world.',
    icon: 'heart',
    tint: 'pink',
  },
  {
    message: 'Never stop being the wonderful person you are.',
    icon: 'sparkles',
    tint: 'lavender',
  },
  {
    message: 'May this year bring you beautiful surprises.',
    icon: 'gift',
    tint: 'blue',
  },
  {
    message: 'Keep chasing all the things that make you happy.',
    icon: 'star',
    tint: 'peach',
  },
  {
    message: 'Thank you for being part of my memories.',
    icon: 'sun',
    tint: 'blush',
  },
]

export const surpriseMessages = [
  'You are the kind of person who makes ordinary days feel a little special.',
  'Somewhere out there, a version of you is already proud of how far you have come.',
  'A tiny reminder: you do not have to earn rest, kindness, or love.',
  'Your curiosity is one of my favourite things about you. Keep asking questions.',
  'The world is softer and funnier with you in it.',
  'You are allowed to take up space, dream loudly, and change your mind.',
  'Here is a small wish: may something lovely happen to you today, for no reason at all.',
  'You make memories better simply by being in them.',
  'May you always find a little magic in the most ordinary afternoons.',
  'Nobody else does “you” quite like you. That is a very good thing.',
]
