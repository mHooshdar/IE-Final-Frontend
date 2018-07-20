import Layout from '../components/MyLayout';
import FavoritesAndNewsCarousel from '../components/category/FavoritesAndNewsCarousel';
import Information from '../components/product/Information';
import ProductDetail from '../components/product/ProductDetail';

class Product extends React.Component{
  static async getInitialProps({ query }) {
    return { query }
  }
  render () {
    return (
      <Layout>
        <style jsx>{`
          .favoritesAndNewsContainer{
            padding-right: 3%;
            padding-left: 3%;
            padding-top: 20px;
            padding-bottom: 15px;
            background: rgb(245, 245, 245);
          }
        `}</style>
        <ProductDetail id={this.props.query.id}/>
        <Information id={this.props.query.id}/>
        <div className="favoritesAndNewsContainer">
          <FavoritesAndNewsCarousel mode={2}/>
        </div>

      </Layout>
    );
  }
}
export default Product
