import global from '../../static/global';
import axios from "axios";

class ProductBag extends React.Component{
  // remove onclick button not done
  // number of items not work

  constructor (props) {
    super(props);

    this.state = {
      productBags: []
    }

    this.incNumber = this.incNumber.bind(this);
    this.decNumber = this.decNumber.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }
  componentDidMount(){
    const self = this;
    axios.get(global.host + "/orderProducts/" + self.props.id)
    .then(function (response) {
      self.setState({
        ["productBags"]: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })
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
  removeOrder(orderId, productId){
    const self = this;
    axios.delete(global.host + "/orderProducts/" + orderId + "/" + productId)
    .then(function (response) {
      if(response.data.success){
        let orderIndex = 0;
        self.state.productBags.forEach(element => {
          if(element.id == productId){
            self.state.productBags.splice(orderIndex, 1);
          }
          orderIndex++;
        })
        let removedOrders = self.state.productBags;
        self.setState({
          ["productBags"]: removedOrders
        });
        window.alert(response.data.desc);
      }
      else{
        window.alert(response.data.desc);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
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
            // width: 50px;
            // height: 60px;
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
            background: ${global.lighterGray};
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
          .bottomPart{
            background: ${global.lighterGray};
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: center;
          }
          .myTable{
            border: 1px solid ${global.gray};
            margin-bottom: 0 !important;
          }
        `}</style>
        <table className="table myTable">
          <thead>
            <tr className="productBagHeader">
              <td className="colHeader">مشخصات محصول</td>
              <td className="colHeader">تعداد</td>
              <td className="colHeader">قیمت</td>
              {this.props.remove ?
                ""
                :  
                <td className=""></td>
              }
            </tr>
          </thead>
          <tbody>
            {this.state.productBags.map((productBag) => 
              <tr>
                <td className="productPart">
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
                </td>
                <td className="incDecContainer">
                  <div className="incDecRow">
                    {this.props.remove ?
                      ""
                      :  
                      <span onClick={() => this.incNumber(productBag)} className="glyphicon glyphicon-plus-sign incImg"></span>
                    }
                    <span className="numberOfProduct">{productBag.numberOfProduct}</span>
                    {this.props.remove ?
                      ""
                      :  
                      <span onClick={() => this.decNumber(productBag)}  className="glyphicon glyphicon-minus-sign decImg"></span>
                    }
                  </div>
                </td>
                <td className="priceContainer">
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
                </td>
                {this.props.remove ?
                  ""
                  :  
                  <td className="removePanel" onClick={() => {this.removeOrder(productBag.orderId, productBag.id)}}>
                    <span className="glyphicon glyphicon-remove removeProduct"></span>
                  </td>
                }
              </tr>
            )}
          </tbody>
        </table>
        <div className="bottomPart">
          ارسال به آدرس شماره یک، شهر شماره یک، خیابان شماره یک، در تاریخ 97/2/23، ساعت 00:00
        </div>
      </div>
    );
  }
}

ProductBag.defaultProps = {
  remove: "",
}

export default ProductBag
