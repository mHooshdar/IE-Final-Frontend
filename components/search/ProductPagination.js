import global from '../../static/global';
import Product from '../category/Product';

class ProductPagination extends React.Component{
  // colors send to server
  constructor(props){
    super(props);

    // we have to get this from server
    this.products = [
      {
        id: 1,
        percent:80,
        src:"/static/images/category/t1.jpg",
        src2:"/static/images/category/t2.jpg",
        brandName:"Defacto",
        productName:"سویشرت یقه گرد دخترانه",
        price:98000
      },
      {
        id: 2,
        percent:80,
        src:"/static/images/category/t1.jpg",
        src2:"/static/images/category/t2.jpg",
        brandName:"Defacto",
        productName:"سویشرت یقه گرد دخترانه",
        price:98000
      },
      {
        id: 3,
        percent:49,
        src:"/static/images/category/t2.jpg",
        src2:"/static/images/category/t3.jpg",
        brandName:"Zooburg",
        productName:"عینک آفتابی کمربندی بچه گانه",
        price:225000
      },
      {
        id: 4,
        percent:0,
        src:"/static/images/category/t3.jpg",
        src2:"/static/images/category/t4.jpg",
        brandName:"LC Waikiki",
        productName:"تی شرت نخی یقه گرد پسرانه" ,
        price:98000
      },
      {
        id: 5,
        percent:0,
        src:"/static/images/category/t3.jpg",
        src2:"/static/images/category/t4.jpg",
        brandName:"LC Waikiki",
        productName:"تی شرت نخی یقه گرد پسرانه" ,
        price:98000
      },
      {
        id: 6,
        percent:17,
        src:"/static/images/category/t4.jpg",
        src2:"/static/images/category/t1.jpg",
        brandName:"آر ان اس",
        productName:"تی شرت نخی یقه گرد دخترانه",
        price:98000
      },
      {
        id: 7,
        percent:17,
        src:"/static/images/category/t4.jpg",
        src2:"/static/images/category/t1.jpg",
        brandName:"آر ان اس",
        productName:"تی شرت نخی یقه گرد دخترانه",
        price:98000
      },
      {
        id: 8,
        percent:17,
        src:"/static/images/category/t4.jpg",
        src2:"/static/images/category/t1.jpg",
        brandName:"آر ان اس",
        productName:"تی شرت نخی یقه گرد دخترانه",
        price:98000
      },
      {
        id: 9,
        percent:17,
        src:"/static/images/category/t4.jpg",
        src2:"/static/images/category/t1.jpg",
        brandName:"آر ان اس",
        productName:"تی شرت نخی یقه گرد دخترانه",
        price:98000
      },
    ];
  }

  componentDidMount(){
    $(document).ready(function() {
      $('select').niceSelect();
    });
  }

  render () {
    return (
      <div className="productPagination">
        <style jsx>{`
          .categoryName{
            font-size: 28px;
            font-weight: bold;
          }
          .sortHead{
            font-size: 20px;
            font-weight: bold;
            color: ${global.gray};
            display: inline-block;
            line-height: 40px;
            vertical-align: top;
          }
          .selectContainer{
            display: inline-block;
            margin-right: 20px;
            padding: 0 15px 0 50px;
          }
          .customSelect{
            right: 0;
            z-index: 1000;
            border-radius: 0;
            background: ${global.lighterGray};
            border: 1px solid ${global.gray};
            color: black;
          }
          .customSelect:focus{
            border-radius: 0;
            background: rgb(255, 255, 255);
          }
          .pageCounter{
            float: left;
            display: inline-block;
            font-size: 14px;
            padding-left: 14px;
            padding-right: 15px;
            line-height: 40px;
            vertical-align: top;
          }
          .pageIconPrev{
            padding-left: 5px;
          }
          .pageIconNext{
            padding-right: 5px;
          }
          .pageProduct{
            float: left;
            border: 1px solid ${global.gray};
            display: inline-block;
            font-size: 14px;
            padding-left: 14px;
            padding-right: 15px;
            color: ${global.gray};
            line-height: 40px;
            vertical-align: top;
          }
          .pageProduct:hover{
            border: 1px solid rgb(0, 0, 0);
            color: rgb(0, 0, 0);
          }
          .disablePage{
            float: left;
            display: inline-block;
            font-size: 14px;
            padding-left: 14px;
            padding-right: 15px;
            line-height: 40px;
            vertical-align: top;
            border: 1px solid rgb(200, 200, 200);
            color: rgb(200, 200, 200);
          }
        `}</style>
        {/* must get from url */}
        <div className="categoryName">
          نام دسته
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="sortHead">
              مرتب سازی براساس
            </div>
            <div className="selectContainer">
              <select className="customSelect">
                <option data-display="محبوب ترین">محبوب ترین</option>
                <option value="1">جدید ترین</option>
                <option value="2">پربازدید ترین</option>
                <option value="3">پر فروش ترین</option>
                <option value="4">قیمت زیاد به کم</option>
                <option value="5">قیمت کم به زیاد</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <a href="#" className="pageProduct">
              صفحه بعد
              <span className="glyphicon glyphicon-chevron-left pageIconNext"></span>
            </a>
            {/* pagination not work, must get fro mserver and work correctly */}
            <div className="pageCounter">
              صفحه 1 از 100
            </div>
            {/* disable page must debuged */}
            <a href="#" className="pageProduct disablePage">
              <span className="glyphicon glyphicon-chevron-right pageIconPrev"></span>
              صفحه قبل
            </a>
          </div>
        </div>
        {this.products.map((product, i) => 
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <Product id={product.id} percent={product.percent} src={product.src} src2={product.src2} brandName={product.brandName} productName={product.productName} price={product.price}/>
          </div>
        )}
      </div>
    );
  }
}

export default ProductPagination
