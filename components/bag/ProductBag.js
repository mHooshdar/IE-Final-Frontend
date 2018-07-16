import global from '../../static/global';

class ProductBag extends React.Component{
  // remove onclick button not done
  // number of items not work

  constructor (props) {
    super(props);

    this.state = {
      productBags: [
        {
          id: 1,
          src: "/static/images/product/p1.jpg",
          brandName: "Defacto",
          productName: "شلوار جین",
          color: "قرمز",
          size: "42",
          price: 4000,
          percent: 10,
          numberOfProduct: 1 // not from server
        },
        {
          id: 2,
          src: "/static/images/product/p2.jpg",
          brandName: "Mango",
          productName: "عینک دودی",
          color: "آبی",
          size: "40",
          price: 2000,
          percent: 20,
          numberOfProduct: 9 // not from server
        }
      ]
    }

    this.incNumber = this.incNumber.bind(this);
    this.decNumber = this.decNumber.bind(this);
  }

  incNumber(product){
    product.numberOfProduct++;
    this.setState({productBags: this.state.productBags});
  }
  decNumber(product){
    if(product.numberOfProduct != 1){
      product.numberOfProduct--;
      this.setState({productBags: this.state.productBags});
    }
  }

  render () {
    return (
      <div className="productBag">
        <style jsx>{`
          .productBag{
            margin-bottom: 40px;
          }
          .productBagHeader{
            background: ${global.lighterGray};
            height: 60px;
          }
          .colHeader{
            border-right: 1px solid ${global.gray};
            height: 60px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            padding-top: 16px;
          }
          .emptyLeftHeader{
            border-right: 1px solid ${global.gray};
            border-left: 1px solid ${global.gray};
            width: 50px;
            height: 60px;
            display: inline-block;
          }
          .productPart{
            padding: 20px;
            border-right: 1px solid ${global.gray};
            border-bottom: 1px solid ${global.gray};
            height: 201px;
          }
          .productImage{
            width: 120px;
            height: 160px;
            display: inline-block;
            vertical-align: top;
          }
          .productDetail{
            display: inline-block;
            vertical-align: top;
            margin-right: 20px;
          }
          .brandName{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 2px;
          }
          .productName{
            font-size: 16px;
            color: ${global.gray};
            margin-bottom: 6px;
          }
          .productColor{
            font-size: 12px;
            margin-bottom: 4px;
          }
          .productSize{
            font-size: 12px;
            margin-bottom: 4px;
          }
          .productId{
            font-size: 12px;
            margin-bottom: 4px;
          }
          .incDecContainer{
            height: 201px;
            border-right: 1px solid ${global.gray};
            border-bottom: 1px solid ${global.gray};
          }
          .incDecRow{
            text-align: center;
            position: relative;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
          }
          .incImg{
            font-size: 30px;
            margin-left: 20px;
            color: ${global.gray};
          }
          .incImg:hover{
            cursor: pointer;
          }
          .decImg{
            font-size: 30px;
            margin-right: 20px;
            color: ${global.gray};
          }
          .decImg:hover{
            cursor: pointer;
          }
          .numberOfProduct{
            font-size: 28px;
            position: relative;
            top: -4px;
          }
          .priceContainer{
            padding-top: 20px;
            padding-right: 30px;
            padding-left: 30px;
            height: 201px;
            border-right: 1px solid ${global.gray};
            border-bottom: 1px solid ${global.gray};
          }
          .realPriceRow{
            font-size: 16px;
            font-weight: bold;
          }
          .realPrice{
            float: left;
          }
          .offRow{
            font-size: 16px;
            margin-bottom: 30px;
            font-weight: bold;
            color: ${global.badgeColor};
          }
          .off{
            float: left;
          }
          .finalPriceRow{
            border-top: 1px solid ${global.lighterGray};
            font-size: 16px;
            font-weight: bold;
          }
          .finalPrice{
            float: left;
          }
          .removePanel{
            display: inline-block;
            background: ${global.lighterGray};
            width: 50px;
            height: 201px;
            text-align: center;
            border-right: 1px solid ${global.gray};
            border-left: 1px solid ${global.gray};
            border-bottom: 1px solid ${global.gray};
          }
          .removePanel:hover{
            cursor: pointer;
          }
          .removeProduct{
            font-size: 30px;
            color: ${global.gray};
            position: relative;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
          }
        `}</style>
        <div className="container-fluid">
          <div className="productBagHeader">
            <div className="row test">
              <div className="colHeader col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0 col-xs-12">
                مشخصات محصول
              </div>
              <div className="colHeader col-lg-2 col-md-2 col-sm-3 col-xs-12">
                تعداد
              </div>
              <div className="colHeader col-lg-4 col-md-4 col-sm-4 col-xs-12">
                قیمت
              </div>
              <div className="emptyLeftHeader"></div>
            </div>
          </div>
          <div className="body">
            {this.state.productBags.map((productBag) => 
              <div className="row">
                <div className="productPart col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0">
                  <img src={productBag.src} className="productImage"/>
                  <div className="productDetail">
                    <p className="brandName">
                      {productBag.brandName}
                    </p>
                    <p className="productName">
                      {productBag.productName}
                    </p>
                    <p className="productColor">
                      رنگ : <span>{productBag.color}</span>
                    </p>
                    <p className="productSize">
                      سایز : <span>{productBag.size}</span>
                    </p>
                    <p className="productId">
                      کد کالا : <span>{productBag.id}</span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-3 incDecContainer">
                  <div className="incDecRow">
                    <span onClick={() => this.incNumber(productBag)} className="glyphicon glyphicon-plus-sign incImg"></span>
                    <span className="numberOfProduct">{productBag.numberOfProduct}</span>
                    <span onClick={() => this.decNumber(productBag)}  className="glyphicon glyphicon-minus-sign decImg"></span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 priceContainer">
                  <div className="realPriceRow">
                    <span className="realPriceTitle">قیمت واحد</span>
                    <span className="realPrice">{productBag.price} تومان</span>
                  </div>
                  <div className="offRow">
                    <span className="offTitle">تخفیف</span>
                    <span className="off">{productBag.price * productBag.percent / 100} تومان</span>
                  </div>
                  <div className="finalPriceRow">
                    <span className="finalPriceTitle">قیمت نهایی</span>
                    <span className="finalPrice">{productBag.price * (100 - productBag.percent) / 100 * productBag.numberOfProduct} تومان</span>
                  </div>
                </div>
                <div className="removePanel">
                  <span className="glyphicon glyphicon-remove removeProduct"></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBag
