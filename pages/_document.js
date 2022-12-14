import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;500;900&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/icons.ico/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/icons.ico/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/icons.ico/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/icons.ico/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/icons.ico/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/icons.ico/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/icons.ico/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/icons.ico/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons.ico/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/icons.ico/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons.ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/icons.ico/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons.ico/favicon-16x16.png" />
        <meta name="msapplication-TileImage" content="/images/icons.ico/ms-icon-144x144.png" />
        <link rel="manifest" href="/images/icons.ico/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
