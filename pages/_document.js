import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta
            name='description'
            content='A site for my programming portofolio'
          />
          <meta charSet='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='viewport' content='width=device-width' />
          <link rel='shortcut icon' href='/public/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://unpkg.com/nprogress@0.2.0/nprogress.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <style global jsx>
          {`
            body {
              background: #f0f0f0;
              margin: 0;
            }
          `}
        </style>
      </html>
    );
  }
}
