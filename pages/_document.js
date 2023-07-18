import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
	  	<meta charset="utf-8" />
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<meta content="Free Blog Template" name="keywords" />
		<meta content="Free Website Template" name="description" />
	  </Head>
      <body>
			<Main />
			<NextScript />
      </body>
    </Html>
  )
}
