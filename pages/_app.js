import '../styles/globals.scss'

import localFont from '@next/font/local'
import Head from 'next/head'

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
  return <div className={plexSans.className}>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
