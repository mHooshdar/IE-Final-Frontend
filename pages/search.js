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
          }
          @media (min-width: 1100px) {
            .searchPanel{
              margin-left: 3%;
              margin-right: 3%;
            }
            .prodcutsPanel{
              padding-left: 4%;
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
          <div className="col-lg-3">
            <CategoryBase/>
            <BrandBase/>
            <ColorBase/>
          </div>
          <div className="col-lg-9">
            <div className="row prodcutsPanel">
              <ProductPagination/>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Search
