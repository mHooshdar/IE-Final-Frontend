import global from '../../static/global';

class ImagesPanel extends React.Component{
  /* props: srcs => array, get srcs of images from productDetail
  */
  constructor (props) {
    super(props);

    this.mouseEnter = this.mouseEnter.bind(this);
  }
  mouseEnter(data){
    $("#productBigImg").attr("src", data);
  }
  getComplete(){
    $('select').niceSelect();
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  render () {
    return (
      <div className="row">
        <style jsx>{`
          .myCustomSwiper{
            height: 100%;
          }
          .myCustomSwiperWrapper{
          }
          .swiperContainer {
            height: 590px;
          }
          .productBigImg{
            width: 100%;
          }
          .myNext{
            transform: rotate(-90deg);
            right: calc(50% - 12px) !important;
            top: calc(100% - 20px);
          }
          .myPrev{
            top: 20px;
            transform: rotate(-90deg);
            right: calc(50% - 12px) !important;
          }
          .productSwiperImage{
            width: 90px;
            height: 120px;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid ${global.gray};
          }
          .productSwiperImage:first-child{
            margin-top: 40px;
          }
        `}</style>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-5 swiperContainer">
          <div className="swiper-container myCustomSwiper">
            <div className="swiper-wrapper myCustomSwiperWrapper">
              {this.props.srcs.map((src) => 
                <img className="swiper-slide productSwiperImage" src={src} onMouseEnter={() => this.mouseEnter(src)}/>
              )}
            </div>
            <div className="swiper-button-prev swiper-button-black myPrev"></div>
            <div className="swiper-button-next swiper-button-black myNext"></div>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-7">
          <img id="productBigImg" className="productBigImg" src={this.props.srcs[0]}/>
        </div>
      </div>
    );
  }
}

ImagesPanel.defaultProps = {
  srcs: [],
}

export default ImagesPanel
