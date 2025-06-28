import localFont from 'next/font/local';

export const barber = localFont({
  src: './fonts/barber.woff',
  variable: '--font-barber',
  display: 'swap', // 👈 ye line important hai
});

export const major = localFont({
  src: './fonts/major.ttf',
  variable: '--font-major',
});

export const nighty = localFont({
  src: './fonts/nighty.otf',
  variable: '--font-nighty',
});

export const patriot = localFont({
  src: './fonts/patriot.woff',
  variable: '--font-patriot',
});

export const silkserif = localFont({
  src: [
    {
      path: './fonts/silkserif-lightitalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/silkserif-regularitalic.woff',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-silkserif',
  display: 'swap',
})

export const kajiro = localFont({
    src: './fonts/kajiro.ttf',
    variable: '--font-kajiro',
});

// export const plain = localFont({
//   src: [
//     {
//       path: './fonts/plain-light.woff',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: './fonts/plain-regular.woff',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-plain',
//   display: 'swap',
// });

// export const against = localFont({
//     src: './fonts/against.ttf',
//     variable: '--font-against',
// });

// export const cfour = localFont({
//   src: './fonts/cfour.otf',
//   variable: '--font-cfour',
// });

// export const firlest = localFont({
//   src: './fonts/firlest.otf',
//   variable: '--font-firlest',
// });

// export const gyahegi = localFont({
//   src: './fonts/gyahegi.otf',
//   variable: '--font-gyahegi',
// });

// export const heroeau = localFont({
//   src: './fonts/heroeau.ttf',
//   variable: '--font-heroeau',
// });

// export const oswald = localFont({
//   src: './fonts/oswald.ttf',
//   variable: '--font-oswald',
// });

// export const outward = localFont({
//   src: './fonts/outward.ttf',
//   variable: '--font-outward',
// });

// export const pilowlava = localFont({
//   src: './fonts/pilowlava.woff',
//   variable: '--font-pilowlava',
// });

// export const playfair = localFont({
//   src: './fonts/playfair.ttf',
//   variable: '--font-playfair',
// });

// export const relieve = localFont({
//   src: './fonts/relieve.ttf',
//   variable: '--font-relieve',
// });

// export const shadow = localFont({
//   src: './fonts/shadow.ttf',
//   variable: '--font-shadow',
// });

// export const skyscapers = localFont({
//   src: './fonts/skyscapers.ttf',
//   variable: '--font-skyscapers',
// });

// export const soria = localFont({
//   src: './fonts/soria.ttf',
//   variable: '--font-soria',
// });

// export const slagless = localFont({
//   src: './fonts/slagless.ttf',
//   variable: '--font-slagless',
// });

// export const typefesse = localFont({
//   src: './fonts/typefesse.woff',
//   variable: '--font-typefesse',
// });

// export const winsideuz = localFont({
//   src: './fonts/winsideuz.ttf',
//   variable: '--font-winsideuz',
// });

// export const wren = localFont({
//   src: './fonts/wren.ttf',
//   variable: '--font-wren',
// });


