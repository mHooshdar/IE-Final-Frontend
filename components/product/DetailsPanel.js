import global from '../../static/global';

class DetailsPanel extends React.Component{
  /* props: at bottom
  */
  constructor (props) {
    super(props);

    this.selectedColor= {
      title: "قرمز",
      color: "ea0001"
    };
    this.selectedSize= {
    };
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .brandName{
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 0;
          }
          .productName{
            font-size: 22px;
            color: ${global.gray};
          }
          .productColor{
            font-size: 15px;
            margin-top: 5px;
            font-weight: bold;
          }
          .realPriceOff{
            text-decoration: line-through;
            color: ${global.gray};
            font-size: 14px;
          }
          .offPrice{
            margin-right: 15px;
            font-size: 18px;
            color: ${global.badgeColor};
          }
          .price{
            margin-right: 10px;
            font-size: 17px;
          }
          .customSelect{
            float: right;
            width: 250px;
          }
          .sizeHelp{
            padding-right: 10px;
            line-height: 42px;
            vertical-align: top;
          }
          .colorContainer{
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 5px;
            margin-left: 10px;
            margin-bottom: 15px;
          }
          .colorContainer:hover{
            cursor: pointer;
          }
          .addToBag{
            width: 250px;
            color: #fff;
            background-color: ${global.badgeColor};
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: normal;
            line-height: 40px;
            padding: 0 25px;
            outline: none;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            -ms-border-radius: 0;
            -o-border-radius: 0;
            border-radius: 0;
            -webkit-transition: all .2s ease-out;
            -moz-transition: all .2s ease-out;
            -o-transition: all .2s ease-out;
            transition: all .2s ease-out;
          }
          .addToBag:hover{
            background: ${global.darkBadgeColor};
          }
          .likeImg{
            height: 29px;
            width: 32px;
            display: inline-block;
            line-height: 0;
            fill: rgb(255, 255, 255);
            vertical-align: middle;
            margin-right: 10px;
            -webkit-transition: all .2s ease-out;
            -moz-transition: all .2s ease-out;
            transition: all .2s ease-out;
            cursor: pointer;
            stroke: ${global.gray};
            stroke-width: 3px;
          }
          .likeImg:hover{
            fill: ${global.badgeColor};
            stroke: ${global.badgeColor};
          }
          .addToBagContainer{
            padding-bottom: 15px;
            padding-top: 30px;
          }
          .shopIcon{
            padding-left: 10px;
          }
          .returnImg{
            width: 28px;
            height: 30px;
            position: relative;
            top: -7px;
            vertical-align: middle;
            fill: ${global.gray};
          }
          .deliveryImg{
            height: 50px;
            width: 40px;
            position: relative;
            top: 2px;
            vertical-align: middle;
            fill: ${global.gray};
          }
          .guaranteeImg{
            width: 30px;
            height: 38px;
            vertical-align: middle;
            fill: ${global.gray};
          }
          .warantyContainer{
            position: relative;
          }
          .warantyContainer span{
            color: fill: ${global.gray};
            line-height: 16px;
            font-size: 10px;
            padding-top: 14px;
            margin-left: 12px;
            margin-right: 4px;
          }
          .featuresHeader{
            font-size: 20px;
            font-weight: bold;
          }
          @media (max-width: 767px) {
            .productDetail{
              padding-top: 15px;
            }
            .brandName{
              font-size: 26px;
              font-weight: bold;
              margin-bottom: 0;
            }
            .productName{
              font-size: 20px;
              color: ${global.gray};
            }
            .realPriceOff{
              font-size: 11px;
            }
            .offPrice{
              font-size: 15px;
            }
            .price{
              font-size: 14px;
            }
          }
        `}</style>
        <p className="brandName">
          {this.props.brandName}
        </p>
        <p className="productName">
          {this.props.productName}
        </p>
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
        <p className="productColor">
          رنگ : <span style={{"color": "#" + this.selectedColor.color}}>{this.selectedColor.title}</span>
        </p>
        <div>
          {this.props.colors.map((color) => 
            <div className="colorContainer" title={color.title} style={{"backgroundColor": "#" + color.color}}></div>
          )}
        </div>
        <div className="selectContainer">
          <select className="customSelect">
            <option data-display="انتخاب کنید" value="">انتخاب کنید</option>
            {this.props.sizes.map((size) => 
              <option value={size}>{size}</option>
            )}
          </select>
          <span className="sizeHelp">راهنمای سایز</span>
        </div>
        <div className="addToBagContainer">
          <button className="addToBag">
            <span className="glyphicon glyphicon-shopping-cart shopIcon"></span>
            <span>افزودن به سبد خرید</span>
          </button>
          <svg className="likeImg" viewBox="0 0 57.947 57.947">
            <path d="M28.947 56.486c15.685-11.277 23.532-21.592 27.222-29.46 4.311-9.193.561-20.589-8.845-24.413C36.268-1.88 28.947 8.486 28.947 8.486S21.678-1.907 10.623 2.588C1.217 6.412-2.533 17.808 1.778 27.001c3.69 7.867 11.484 18.209 27.169 29.485z"></path>
          </svg>
        </div>
        <div className="warantyContainer">
          <svg viewBox="0 0 48 53" className="returnImg">
            <path d="M24.002 52.955C10.86 52.955.167 42.155.167 28.877c0-12.887 9.978-23.453 22.712-24.05.596-.093 1.141.453 1.166 1.075.03.62-.45 1.15-1.068 1.175-11.542.541-20.584 10.113-20.584 21.8 0 12.034 9.692 21.823 21.603 21.823 11.91 0 21.602-9.789 21.602-21.823a21.93 21.93 0 0 0-7.352-16.396 1.137 1.137 0 0 1-.103-1.592 1.11 1.11 0 0 1 1.576-.104c5.16 4.574 8.111 11.17 8.111 18.088.007 13.281-10.685 24.082-23.828 24.082z"></path>
            <path d="M17.27 22.022a1.123 1.123 0 0 0-.855.037 1.145 1.145 0 0 0-.546 1.499l7.3 15.857a1.11 1.11 0 0 0 1.484.54 1.14 1.14 0 0 0 .545-1.498l-7.3-15.858c-.13-.277-.36-.479-.629-.577z"></path>
            <path d="M31.589 22.02c.268-.097.574-.09.854.038.555.266.801.942.545 1.498l-7.3 15.858a1.11 1.11 0 0 1-1.483.54 1.14 1.14 0 0 1-.545-1.499l7.3-15.857c.13-.278.36-.48.629-.577zM19.54 13.525c-.217 0-.43-.06-.621-.192a1.134 1.134 0 0 1-.306-1.562l3.842-5.78-5.764-3.885a1.134 1.134 0 0 1-.313-1.56A1.113 1.113 0 0 1 17.923.23l6.698 4.51c.243.168.42.425.475.716.056.295-.004.602-.167.848l-4.463 6.718c-.219.327-.57.503-.927.503z"></path>
          </svg>
          <span>
            ضمانت هفت روز بازگشت کالا
          </span>
          <svg viewBox="0 0 100 125" className="deliveryImg">
            <path d="M25.43 64.91c-2.03 0-3.682 1.652-3.682 3.684s1.652 3.683 3.682 3.683 3.682-1.651 3.682-3.683-1.653-3.684-3.682-3.684zm0 4.71c-.565 0-1.026-.461-1.026-1.026s.46-1.027 1.026-1.027 1.026.462 1.026 1.027-.461 1.026-1.026 1.026z"></path>
            <path d="M92.5 63.948c0-.861-.045-1.712-.118-2.556.003-.036.021-.067.021-.104 0-.083-.032-.155-.046-.233-1.327-13.441-11.799-24.228-25.091-26.05v-.03h-.236a29.382 29.382 0 0 0-3.752-.249h-2.652v-5.309c0-4.396-3.577-7.972-7.973-7.972h-37.18c-4.396 0-7.973 3.577-7.973 7.972v33.197c0 4.395 3.577 7.972 7.973 7.972h.197c.925 4.542 4.949 7.969 9.76 7.969s8.835-3.427 9.76-7.969h32.277c.925 4.542 4.949 7.969 9.76 7.969s8.835-3.427 9.76-7.969H92.5v-6.638zm-5.531-11.956H73.91a6.652 6.652 0 0 1-6.645-6.644v-7.633c8.629 1.308 15.894 6.762 19.704 14.277zM25.43 75.898c-4.027 0-7.305-3.276-7.305-7.305s3.277-7.305 7.305-7.305 7.305 3.276 7.305 7.305-3.278 7.305-7.305 7.305zm9.927-7.968c-.344-5.183-4.659-9.297-9.927-9.297s-9.583 4.114-9.927 9.297h-.03a5.322 5.322 0 0 1-5.316-5.313h3.047a1.329 1.329 0 0 0 0-2.656h-3.047V29.417a5.322 5.322 0 0 1 5.316-5.316h37.18a5.322 5.322 0 0 1 5.316 5.316V59.96h-20.86a1.327 1.327 0 1 0 0 2.656h20.859v5.313H35.357zm41.87 7.968c-4.027 0-7.305-3.276-7.305-7.305s3.277-7.305 7.305-7.305 7.305 3.276 7.305 7.305-3.278 7.305-7.305 7.305zm12.617-7.968h-2.69c-.343-5.183-4.658-9.297-9.927-9.297s-9.584 4.114-9.927 9.297h-6.675v-5.313h4.373a1.329 1.329 0 0 0 0-2.656h-4.373V37.383h2.652c.45 0 .889.045 1.332.067v7.898c0 5.129 4.173 9.3 9.301 9.3h14.221a26.367 26.367 0 0 1 1.381 5.313h-2.324a1.327 1.327 0 1 0 0 2.656h2.589c.022.443.067.882.067 1.331v3.982z"></path>
            <path d="M77.227 64.91c-2.03 0-3.683 1.652-3.683 3.684s1.652 3.683 3.683 3.683 3.683-1.651 3.683-3.683-1.653-3.684-3.683-3.684zm0 4.71c-.565 0-1.026-.461-1.026-1.026s.461-1.027 1.026-1.027 1.026.462 1.026 1.027-.461 1.026-1.026 1.026z"></path>
          </svg>
          <span>
            تحویل رایگان
          </span>
          <svg className="guaranteeImg" viewBox="0 0 61.6100006 95.325002625">
            <path d="M60.55 8.9L31.24.06a1.5 1.5 0 0 0-.87 0L1.07 8.9A1.5 1.5 0 0 0 0 10.34V39.8c0 23.76 16.26 31.8 28.48 35.78l1.86.61a1.5 1.5 0 0 0 .93 0l1.86-.61c12.23-4 28.48-12 28.48-35.78V10.34a1.5 1.5 0 0 0-1.06-1.44zm-1.94 30.9c0 10.45-2.74 25.22-26.41 32.93l-1.4.45-1.4-.45C18.07 69 3 61.61 3 39.8V11.45l27.81-8.38 27.81 8.38-.01 28.35z"></path>
            <path d="M18.35 59.82c-6.22-4.68-9.12-11-9.12-20V15.65a1.5 1.5 0 1 0-3 0V39.8c0 10 3.28 17.13 10.31 22.42a1.5 1.5 0 0 0 1.8-2.4h.01zM29.37 7.46a1.5 1.5 0 0 0 1 1.87l22.7 6.84V39.8c0 9.15-2.54 20.48-22.29 27a1.5 1.5 0 0 0-.75 2.9l.31.1a1.5 1.5 0 0 0 .93 0l.31-.1c11.42-3.76 24.5-10.51 24.5-29.9V15.06A1.5 1.5 0 0 0 55 13.63L31.24 6.46a1.5 1.5 0 0 0-1.87 1z"></path>
            <path d="M44.87 29.62a1.5 1.5 0 0 0-2.12 0L26.23 46.14l-7.36-7.36a1.5 1.5 0 0 0-2.12 2.12l8.42 8.42a1.5 1.5 0 0 0 2.12 0l17.58-17.57a1.5 1.5 0 0 0 0-2.13z"></path>
          </svg>
          <span>
            ضمانت اصل بودن کالا
          </span>
        </div>
        <div className="features">
          <p className="featuresHeader">
            ویژگی ها
          </p>
          <ul>
            {this.props.features.map((feature) => 
              <li>{feature}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

DetailsPanel.defaultProps = {
  percent: 0,
  price: 0,
  colors: [
    {
      title: "",
      color: ""
    },
  ],
  sizes:[],
  brandName: "",
  productName: "",
  features: [],
}

export default DetailsPanel
