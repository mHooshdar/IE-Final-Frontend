import global from '../../static/global';
import Brand from './Brand';

import axios from "axios";

class BrandsCarousel extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      brands: []
    }
  }

  componentDidMount(){
    const self = this;
    axios.get(global.host + "/brandsList")
    .then(function (response) {
      self.setState({
        brands: response.data
      })
      var carouselEl = $('#brandsOwl').owlCarousel({
        rtl: true,
        margin: 30,
        dots: false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed:200,
        responsive:{
          0:{
            items: 1
          },
          768: {
            items: 1
          },
          992:{
            items: 2
          }
        }
      });
      $("#nextBrands").click(function() {
        carouselEl.trigger('next.owl.carousel');
      });
  
      $("#prevBrands").click(function() {
        carouselEl.trigger('prev.owl.carousel');
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  render () {
    return (
      <div className="brands">
        <style jsx>{`
          .brands{
            position: relative;
            margin-bottom: 15px;
          }
          .brandsText{
            font-size: 25px;
            font-weight: bold;
            margin-top: 20px;
            margin-right: 60px;
            color: ${global.gray};
          }
          .nextBrands{
            position: absolute;
            top: 45%;
            z-index: 100;
          }
          .nextBrands:hover{
            cursor: pointer;
          }
          .prevBrands{
            position: absolute;
            top: 45%;
            left: 0;
            z-index: 100;
          }
          .prevBrands:hover{
            cursor: pointer;
          }
          .nextPrevArrows{
            width: 80px;
            height: 80px;
          }
          .brandsOwl{
            padding-right: 120px;
            padding-left: 120px;
          }
          @media (max-width: 767px) {
            .nextBrands, .prevBrands{
              top: 50%;
            }
            .brands{
              margin-right: 40px;
            }
            .nextPrevArrows{
              width: 50px;
              height: 50px;
            }
            .brandsOwl{
              padding-right: 70px;
              padding-left: 70px;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .brands{
              margin-right: 40px;
            }
            .nextPrevArrows{
              width: 50px;
              height: 50px;
            }
            .brandsOwl{
              padding-right: 70px;
              padding-left: 70px;
            }
          }
        `}</style>
        <p className="brandsText">جدیدترین برندها</p>
        <div className="owl-carousel owl-theme brandsOwl" id="brandsOwl">
          {this.state.brands.map((brand) => 
            <Brand brandName={brand.brandName} src={brand.src}/>
          )}
        </div>
        <span id="nextBrands" className="nextBrands">
          <svg viewBox="0 0 47 90" id="arrow-slider" className="nextPrevArrows" style={{transform: "rotate(180deg)"}}>
            <path d="M3.743 44.044L47.063.73l-.346-.345c-.521-.514-1.207-.514-1.726 0L1.325 44.044a1.363 1.363 0 0 0 0 1.904L44.99 89.612c.518.517 1.205.517 1.726 0l.346-.353-43.32-43.311a1.363 1.363 0 0 1 .001-1.904z" fillRule="nonzero" fill="#000"></path>
          </svg>
        </span>
        <span id="prevBrands" className="prevBrands">
          <svg viewBox="0 0 47 90" id="arrow-slider" className="nextPrevArrows">
            <path d="M3.743 44.044L47.063.73l-.346-.345c-.521-.514-1.207-.514-1.726 0L1.325 44.044a1.363 1.363 0 0 0 0 1.904L44.99 89.612c.518.517 1.205.517 1.726 0l.346-.353-43.32-43.311a1.363 1.363 0 0 1 .001-1.904z" fillRule="nonzero" fill="#000"></path>
          </svg>
        </span>
      </div>
    );
  }
}

export default BrandsCarousel
