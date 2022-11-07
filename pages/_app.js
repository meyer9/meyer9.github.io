import '../styles/globals.scss'

import localFont from '@next/font/local'

const plexSans = localFont({
  src: [
    {
      path: '../public/font/iAWriterQuattroS-Bold.woff2',
      weight: '700'
    },
    {
      path: '../public/font/iAWriterQuattroS-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../public/font/iAWriterQuattroS-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/font/iAWriterQuattroS-Italic.woff2',
      weight: '400',
      style: 'italic'
    }
  ]
})

function MyApp({ Component, pageProps }) {
  return <div className={plexSans.className}><Component {...pageProps} /></div>
}

export default MyApp
