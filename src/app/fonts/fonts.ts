import localFont from 'next/font/local'

const iFoodFontRegular = localFont({
  src: '../fonts/iFoodRCTextos-Regular.woff2',
  display: 'swap',
  variable: '--font-ifood-regular',
})
const iFoodFontBold = localFont({
  src: '../fonts/iFoodRCTextos-Bold.woff2',
  display: 'swap',
  variable: '--font-ifood-bold',
})
const iFoodFontThin = localFont({
  src: '../fonts/iFoodRCTextos-Thin.woff2',
  display: 'swap',
  variable: '--font-ifood-thin',
})
const iFoodFontLight = localFont({
  src: '../fonts/iFoodRCTextos-Light.woff2',
  display: 'swap',
  variable: '--font-ifood-light',
})
const iFoodFontMedium = localFont({
  src: '../fonts/iFoodRCTextos-Medium.woff2',
  display: 'swap',
  variable: '--font-ifood-medium',
})
const iFoodFontExtraBold = localFont({
  src: '../fonts/iFoodRCTextos-ExtraBold.woff2',
  display: 'swap',
  variable: '--font-ifood-extra-bold',
})
const iFoodFontTitulosRegular = localFont({
  src: '../fonts/iFoodRCTitulos-Regular.woff2',
  display: 'swap',
  variable: '--font-ifood-titulos-regular',
})
const iFoodFontTitulosBold = localFont({
  src: '../fonts/iFoodRCTitulos-Bold.woff2',
  display: 'swap',
  variable: '--font-ifood-titulos-bold',
})
const iFoodFontTitulosThin = localFont({
  src: '../fonts/iFoodRCTitulos-Thin.woff2',
  display: 'swap',
  variable: '--font-ifood-titulos-thin',
})
const iFoodFontTitulosLight = localFont({
  src: '../fonts/iFoodRCTitulos-Light.woff2',
  display: 'swap',
  variable: '--font-ifood-titulos-light',
})
const iFoodFontTitulosMedium = localFont({
  src: '../fonts/iFoodRCTitulos-Medium.woff2',
  display: 'swap',
  variable: '--font-ifood-titulos-medium',
})
const iFoodFontTitulosExtraBold = localFont({
  src: '../fonts/iFoodRCTitulos-ExtraBold.woff2',
  display: 'swap',
  variable: '--font-ifood-titulos-extra-bold',
})

export const iFoodFonts = `
        ${iFoodFontRegular.variable} 
        ${iFoodFontBold.variable} 
        ${iFoodFontThin.variable} 
        ${iFoodFontLight.variable}
        ${iFoodFontMedium.variable}
        ${iFoodFontExtraBold.variable}
        ${iFoodFontTitulosRegular.variable} 
        ${iFoodFontTitulosBold.variable} 
        ${iFoodFontTitulosThin.variable} 
        ${iFoodFontTitulosLight.variable}
        ${iFoodFontTitulosMedium.variable}
        ${iFoodFontTitulosExtraBold.variable}
      `
