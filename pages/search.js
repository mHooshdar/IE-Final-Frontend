import Layout from '../components/MyLayout';
import CategoryBase from '../components/search/CategoryBase';
import BrandBase from '../components/search/BrandBase';
import ColorBase from '../components/search/ColorBase';
import ProductPagination from '../components/search/ProductPagination';

class Search extends React.Component{
  render () {
    return (
      <Layout>
        <style jsx>{`
          .searchPanel{
            margin-bottom: 15px;
            margin-left: 0;
            margin-right: 0; 
          }
          @media (min-width: 1100px) {
            .searchPanel{
              margin-right: 3%;
            }
            .prodcutsPanel{
              padding-right: 4%;
            }
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            .searchPanel{
              margin-left: 1%;
              margin-right: 1%;
            }
          }
        `}</style>
        <div className="row searchPanel">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <CategoryBase/>
            <BrandBase/>
            <ColorBase/>
          </div>
          <div className="prodcutsPanel col-lg-9 col-md-9 col-sm-8 col-xs-12">
            <ProductPagination/>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Search
