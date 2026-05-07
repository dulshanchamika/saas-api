import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node';

const aj = arcjet({
<<<<<<< Updated upstream
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({
      mode: process.env.NODE_ENV === 'production' ? 'LIVE' : 'DRY_RUN',
      allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
    }),
    slidingWindow({
      mode: 'LIVE',
      interval: '2s',
      max: 5,
    }),
  ],
=======
    key: process.env.ARCJET_KEY,
    rules: [
        shield({ mode: 'LIVE' }),
        detectBot({
            mode: 'LIVE',
            allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
        }),
        slidingWindow({
            mode: 'LIVE',
            interval: '2s',
            max: 5,
        }),
    ],
>>>>>>> Stashed changes
});

export default aj;