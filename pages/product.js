import Layout from '../components/MyLayout';
import FavoritesAndNewsCarousel from '../components/category/FavoritesAndNewsCarousel';
import Information from '../components/product/Information';

class Product extends React.Component{
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
        <Information/>
        <div className="favoritesAndNewsContainer">
          <FavoritesAndNewsCarousel mode={2}/>
        </div>
      </Layout>
    );
  }
}
export default Product
