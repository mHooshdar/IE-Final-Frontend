import global from '../../static/global';
import Product from './Product';

class FavoritesAndNewsCarousel extends React.Component{
  /* props: {
    mode: number // 0 => favorites, 1 => news, 2 => LinkedProducts
  }
  */
  constructor (props) {
    super(props);
    this.state = {
      showText: ''
    }
    // we have to get this from server
    this.products = [
      {
        id: 1,
        src:"/static/images/category/t1.jpg",
        src2: "/static/images/category/t2.jpg",
        brandName:"Defacto",
        productName:"سویشرت یقه گرد دخترانه",
        price:98000
      },
      {
        id: 2,
        percent:80,
        src:"/static/images/category/t1.jpg",
        src2: "/static/images/category/t2.jpg",
        brandName:"Defacto",
        productName:"سویشرت یقه گرد دخترانه",
        price:98000
      },
      {
        id: 3,
        percent:49,
        src:"/static/images/category/t2.jpg",
        src2: "/static/images/category/t3.jpg",
        brandName:"Zooburg",
        productName:"عینک آفتابی کمربندی بچه گانه",
        price:225000
      },
      {
        id: 4,
        percent:0,
        src:"/static/images/category/t3.jpg",
        src2: "/static/images/category/t4.jpg",
        brandName:"LC Waikiki",
        productName:"تی شرت نخی یقه گرد پسرانه" ,
        price:98000
      },
      {
        id: 5,
        percent:17,
        src:"/static/images/category/t4.jpg",
        src2: "/static/images/category/t1.jpg",
        brandName:"آر ان اس",
        productName:"تی شرت نخی یقه گرد دخترانه",
        price:98000
      },
    ];
  }

  componentDidMount(){
    var carouselEl = $('#favoritesAndNewsOwl' + this.props.mode).owlCarousel({
      rtl: true,
      margin: 30,
      dots: false,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      smartSpeed:750,
      autoWidth:true,
    });

    $("#nextFavoritesAndNews" + this.props.mode).click(function() {
      carouselEl.trigger('next.owl.carousel');
    });

    $("#prevFavoritesAndNews" + this.props.mode).click(function() {
      carouselEl.trigger('prev.owl.carousel');
    });
    
    if(this.props.mode == 0){
      this.setState({showText: 'محبوب ترین ها'});
    }
    else if(this.props.mode == 1){
      this.setState({showText: 'جدیدترین ها'});
    }
    else if(this.props.mode == 2){
      this.setState({showText: 'محصولات مرتبط'});
    }
  }
  render () {
    return (
      <div className="favoritesAndNews">
        <style jsx>{`
          .favoritesAndNews{
            position: relative;
            margin-bottom: 15px;
          }
          .favoritesAndNewsText{
            font-size: 25px;
            font-weight: bold;
            margin-top: 20px;
            margin-right: 60px;
            color: ${global.gray};
          }
          .nextFavoritesAndNews{
            position: absolute;
            top: 45%;
            z-index: 100;
          }
          .nextFavoritesAndNews:hover{
            cursor: pointer;
          }
          .prevFavoritesAndNews{
            position: absolute;
            top: 45%;
            left: 0;
            z-index: 100;
          }
          .prevFavoritesAndNews:hover{
            cursor: pointer;
          }
          .nextPrevArrows{
            width: 80px;
            height: 80px;
          }
          .favoritesAndNewsOwl{
            padding-right: 120px;
            padding-left: 120px;
          }
          @media (max-width: 767px) {
            .favoritesAndNewsText{
              margin-right: 40px;
            }
            .nextFavoritesAndNews, .prevFavoritesAndNews{
              top: 50%;
            }
            .nextPrevArrows{
              width: 50px;
              height: 50px;
            }
            .favoritesAndNewsOwl{
              padding-right: 70px;
              padding-left: 70px;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .favoritesAndNewsText{
              margin-right: 40px;
            }
            .nextPrevArrows{
              width: 50px;
              height: 50px;
            }
            .favoritesAndNewsOwl{
              padding-right: 70px;
              padding-left: 70px;
            }
          }
        `}</style>
        <p className="favoritesAndNewsText">{this.state.showText}</p>
        <div className="owl-carousel owl-theme favoritesAndNewsOwl" id={"favoritesAndNewsOwl" + this.props.mode}>
          {this.products.map((product) => 
            <Product id={product.id} percent={product.percent} src={product.src} src2={product.src2} brandName={product.brandName} productName={product.productName} price={product.price}/>
          )}
        </div>
        <span id={"nextFavoritesAndNews" + this.props.mode} className="nextFavoritesAndNews">
          <svg viewBox="0 0 47 90" id="arrow-slider" className="nextPrevArrows" style={{transform: "rotate(180deg)"}}>
            <path d="M3.743 44.044L47.063.73l-.346-.345c-.521-.514-1.207-.514-1.726 0L1.325 44.044a1.363 1.363 0 0 0 0 1.904L44.99 89.612c.518.517 1.205.517 1.726 0l.346-.353-43.32-43.311a1.363 1.363 0 0 1 .001-1.904z" fillRule="nonzero" fill="#000"></path>
          </svg>
        </span>
        <span id={"prevFavoritesAndNews" + this.props.mode} className="prevFavoritesAndNews">
          <svg viewBox="0 0 47 90" id="arrow-slider" className="nextPrevArrows">
            <path d="M3.743 44.044L47.063.73l-.346-.345c-.521-.514-1.207-.514-1.726 0L1.325 44.044a1.363 1.363 0 0 0 0 1.904L44.99 89.612c.518.517 1.205.517 1.726 0l.346-.353-43.32-43.311a1.363 1.363 0 0 1 .001-1.904z" fillRule="nonzero" fill="#000"></path>
          </svg>
        </span>
      </div>
    );
  }
}

FavoritesAndNewsCarousel.defaultProps = {
  mode: 0,
}

export default FavoritesAndNewsCarousel
