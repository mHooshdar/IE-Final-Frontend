import global from '../../static/global';

class Product extends React.Component{
  /*
    dont fill percent when u have no off-percent or set it to 0
    images ration: 3 * 4
  */

  constructor (props) {
    super(props);

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(){
    $("#productImg" + this.props.id).fadeToggle({
      duration : "fast",
    });
  }
  mouseLeave(){
    $("#productImg" + this.props.id).fadeToggle({
      duration : "fast",
    });
  }
  
  render () {
    return (
      // href must come from parent
      <a href="#" className="product" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <style jsx>{`
          .product{
            position: relative;
            display: inline-block;
            text-align: center;
            color: rgb(0, 0, 0);
          }
          .myBadge {
            position: absolute;
            border-radius: 50%;
            width: 50px;
            right: 10px;
            top: 10px;
            height: 50px;
            padding: 13px;
            font-size: 17px;
            background: ${global.badgeColor};
            color: rgb(255, 255, 255);
            text-align: center;
            z-index: 100;
          }
          .productImage, .productImage2{
            width: 180px;
            height: 235px;
          }
          .productImage2{
            position: absolute;
            top: 0; 
            left: 0;
          }
          .fader{
            width: 180px;
            height: 235px;
          }
          .brandName{
            font-size: 18px;
            font-weight: bold;
          }
          .productName{
            font-size: 18px;
            color: ${global.gray};
          }
          .realPriceOff{
            text-decoration: line-through;
            font-size: 12px;
          }
          .offPrice{
            margin-right: 10px;
            font-size: 15px;
            color: ${global.badgeColor};
          }
          .price{
            margin-right: 10px;
            font-size: 15px;
          }
        `}</style>
        {this.props.percent ?
          <div className="myBadge">%{this.props.percent}</div>
          :
          ''
        }
        <div class="fader">
          <img className="productImage" src={this.props.src} alt={this.props.productName}/>
          <img id={"productImg" + this.props.id} className="productImage2" src={this.props.src2} alt={this.props.productName} style={{display: "none"}}/>
        </div>​
        
        <p className="brandName">{this.props.brandName}</p>
        <p className="productName">{this.props.productName}</p>
        {this.props.percent ?
          <div>
            <span className="realPriceOff">{this.props.price} تومان</span>
            <span className="offPrice">{this.props.price * (100 - this.props.percent) / 100} تومان</span>
          </div>
          :
          <div>
            <span className="price">{this.props.price} تومان</span>
          </div>
        }
      </a>
    );
  }
}

Product.defaultProps = {
  id: 1,
  percent: 0,
  src: '',
  src2: '',
  brandName: '',
  productName: '',
  price: 0
}

export default Product
