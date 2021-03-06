import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html dir="rtl">
        <Head>
          <link rel="stylesheet" href="/static/libs/owlcarousel/assets/owl.carousel.min.css"/>
          <link rel="stylesheet" href="/static/libs/owlcarousel/assets/owl.theme.default.min.css"/>
          <link rel="stylesheet" href="/static/libs/jquery-nice-select-1.1.0/css/nice-select.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.min.css"/>
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
			        text-decoration: none;
              outline: 0px auto -webkit-focus-ring-color !important;
              outline-offset: 0px !important;
            }
          `}</style>
          <Main />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="/static/libs/jquery-nice-select-1.1.0/js/jquery.nice-select.js"></script>
          <script src="/static/libs/owlcarousel/owl.carousel.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <NextScript />
        </body>
      </html>
    );
  }
}