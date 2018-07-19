import global from '../../static/global';
import ImagesPanel from './ImagesPanel';
import DetailsPanel from './DetailsPanel';
import axios from "axios";

class ProductDetail extends React.Component{
  constructor (props) {
    // props : id
    super(props);
    this.state = {}
    this.imagesPanel = "";
  }
  componentDidMount(){
    const self = this;
    axios.get(global.host + "/product/" + self.props.id)
    .then(function (response) {
      self.setState(response.data);
      self.imagesPanel.getComplete();
    })
    .catch(function (error) {
      console.log(error);
    })
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
              <ImagesPanel srcs={this.state.srcs} ref={(imagesPanel) => { this.imagesPanel = imagesPanel; }}/>
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
