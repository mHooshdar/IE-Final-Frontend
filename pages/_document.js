import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html dir="rtl">
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="//cdn.rawgit.com/morteza/bootstrap-rtl/v3.3.4/dist/css/bootstrap-rtl.css"/>
        </Head>
        <body>
          <style jsx global>{`
            @font-face {
              font-family: Shabnam;
              src: url('/static/fonts/Shabnam-FD.eot');
              src: url('/static/fonts/Shabnam-FD.eot?#iefix') format('embedded-opentype'),
                  url('/static/fonts/Shabnam-FD.woff') format('woff'),
                  url('/static/fonts/Shabnam-FD.ttf') format('truetype');
              font-weight: normal;
            }
                  
            @font-face {
              font-family: Shabnam;
              src: url('/static/fonts/Shabnam-Bold-FD.eot');
              src: url('/static/fonts/Shabnam-Bold-FD.eot?#iefix') format('embedded-opentype'),
                  url('/static/fonts/Shabnam-Bold-FD.woff') format('woff'),
                  url('/static/fonts/Shabnam-Bold-FD.ttf') format('truetype');
              font-weight: bold;
            }
              
            @font-face {
              font-family: Shabnam;
              src: url('/static/fonts/Shabnam-Light-FD.eot');
              src: url('/static/fonts/Shabnam-Light-FD.eot?#iefix') format('embedded-opentype'),
                  url('/static/fonts/Shabnam-Light-FD.woff') format('woff'),
                  url('/static/fonts/Shabnam-Light-FD.ttf') format('truetype');
              font-weight: 300;
            }
            *{
              font-family: 'Shabnam';
            }
            body {
              margin: 0;
              padding: 0;
            }
            a{
              text-decoration: none !important;
            }
            a:hover{
              text-decoration: none !important;
            }
            a:focus{
              outline: 0px auto -webkit-focus-ring-color !important;
              outline-offset: 0px !important;
            }
          `}</style>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </body>
      </html>
    );
  }
}