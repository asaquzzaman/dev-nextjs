import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
	  	<meta charSet="utf-8" />
      <meta content="Free Blog Template" name="keywords" />
      <meta content="Free Website Template" name="description" />
	  </Head>
      <body className='bg-[#f1f3ff]'>
			<Main />
			<NextScript />
      </body>
    </Html>
  )
}
