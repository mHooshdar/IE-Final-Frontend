import global from '../../static/global';
import ImagesPanel from './ImagesPanel';
import DetailsPanel from './DetailsPanel';

class ProductDetail extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      id: 1,
      percent: 10,
      price: 4000,
      colors: [
        {
          title: "سبز",
          color: "25b53a"
        },
        {
          title: "قهوه ای",
          color: "6f3e18"
        },
        {
          title: "قرمز",
          color: "ea0001"
        },
      ],
      sizes:[
        "41",
        "42",
        "43",
        "42",
        "42",
        "42",
      ],
      brandName: "CELIO",
      productName: "هودی نخی مردانه",
      features: [
        "این سویشرت مردانه جلو بسته است و آستین هایی بلند دارد",
        "یقه اسکی",
        "یقه دارای بند است",
        "قسمت جلو سویشرت طرح چاپی دارد",
        "قد سویشرت تا روی باسن است",
        "مناسب استفاده روزمره",
        "تهیه شده از 100% الیاف نخی",
      ],
      srcs: [
        "/static/images/product/p1.jpg", // ration 3 * 4
        "/static/images/product/p2.jpg",
        "/static/images/product/p3.jpg",
        "/static/images/product/p4.jpg"
      ]
    }
  }

  render () {
    return (
      <div className="productDetail">
        <style jsx>{`
          .productImagesContainer{
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .productDetailContainer{
            margin-top: 20px;
            margin-bottom: 20px;
            padding-right: 30px;
          }
        `}</style>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12 productImagesContainer">
              <ImagesPanel srcs={this.state.srcs}/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12 productDetailContainer">
              <DetailsPanel percent={this.state.percent} price={this.state.price} colors={this.state.colors} sizes={this.state.sizes} brandName={this.state.brandName} productName={this.state.productName} features={this.state.features}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail
