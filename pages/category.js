import Layout from '../components/MyLayout';
import Carousel from '../components/index/Carousel';
import FavoritesAndNewsCarousel from '../components/category/FavoritesAndNewsCarousel';
import BrandsCarousel from '../components/category/BrandsCarousel';

class Category extends React.Component{
  render () {
    return (
      <Layout>
        <style jsx>{`
        .carouselContainer{
          padding-right: 3%;
          padding-left: 3%;
          border-bottom: 1px solid rgb(240, 240, 240);
        }
        .favoritesAndNewsContainer{
          padding-right: 3%;
          padding-left: 3%;
        }
        .ad{
          margin-bottom: 15px;
        }
        `}</style>
        <div className="">
          <div className="carouselContainer">
            <Carousel/>
          </div>
          <div className="favoritesAndNewsContainer">
            <FavoritesAndNewsCarousel mode={0}/>
          </div>
          <img className="img-responsive ad" src="/static/images/category/ad1.jpg"/>
          <div className="favoritesAndNewsContainer">
            <FavoritesAndNewsCarousel mode={1}/>
          </div>
          <img className="img-responsive ad" src="/static/images/category/ad2.jpg"/>
          <BrandsCarousel/>
        </div>
      </Layout>
    );
  }
}
export default Category
