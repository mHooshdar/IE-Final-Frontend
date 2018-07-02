import Carousel1 from './assets/carousel1.jpg';
import Carousel2 from './assets/carousel2.jpg';
import Carousel3 from './assets/carousel3.jpg';

class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators  */}
          <ol className={"carousel-indicators " + styles.myCarouselIndicators}>
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className={"item active " + styles.myItem}>
              <img src={Carousel1} className={styles.images} alt="Chicago"/>
            </div>
            <div className={"item " + styles.myItem}>
              <img src={Carousel2} className={styles.images} alt="Chicago"/>
            </div>
            <div className={"item " + styles.myItem}>
              <img src={Carousel3} className={styles.images} alt="Chicago"/>
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
  }
}

export default Carousel;
