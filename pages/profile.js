import global from '../static/global';
import Layout from '../components/MyLayout';

import UserPart from '../components/profile/UserPart';
import Addresses from '../components/profile/Addresses';
import Orders from '../components/profile/Orders';
import ProductBag from '../components/bag/ProductBag';

class Profile extends React.Component{
  static async getInitialProps({ query }) {
    return { query }
  }
  render () {
    return (
      <Layout>
        <style jsx>{`
        `}</style>
        <div className="container">
          <UserPart id={this.props.query.id}/>
          <Addresses id={this.props.query.id}/>
          <Orders id={this.props.query.id}/>
          <ProductBag remove="true" id={this.props.query.id}/>
        </div>
      </Layout>
    );
  }
}
export default Profile
