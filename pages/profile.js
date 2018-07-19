import global from '../static/global';
import Layout from '../components/MyLayout';

import UserPart from '../components/profile/UserPart';
import Addresses from '../components/profile/Addresses';
import Orders from '../components/profile/Orders';
import ProductBag from '../components/bag/ProductBag';

class Profile extends React.Component{

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Layout>
        <style jsx>{`
        `}</style>
        <div className="container">
          <UserPart/>
          <Addresses/>
          <Orders/>
          <ProductBag remove="true"/>
        </div>
      </Layout>
    );
  }
}
export default Profile
