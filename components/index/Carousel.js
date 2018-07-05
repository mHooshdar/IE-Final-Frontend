import global from '../../static/global';

const Carousel = () => (
  <div className="carousel">
    <style jsx global>{`
      .myCarouselIndicators { 
        padding-right: 0 !important;
        bottom: 0px !important;
      }
      .images {
        width: 100%;
      }
      .myCarouselIndicators li{
        background: ${global.gray} !important;
      }
      .myItem{
        max-height: 400px;
      }
      .carousel{
        margin-bottom: 15px;
      }
    `}</style>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* Indicators  */}
      <ol className="carousel-indicators myCarouselIndicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div className="item active myItem">
          <img src='/static/images/index/carousel1.jpg' className="images" alt="Chicago"/>
        </div>
        <div className="item myItem">
          <img src='/static/images/index/carousel2.jpg' className="images" alt="Chicago"/>
        </div>
        <div className="item myItem">
          <img src='/static/images/index/carousel3.jpg' className="images" alt="Chicago"/>
        </div>
      </div>

      {/* Left and right controls */}
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>  
  </div>
);

export default Carousel;
