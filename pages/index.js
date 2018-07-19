// import Link from 'next/link';
import global from '../static/global';
import Layout from '../components/MyLayout';
import Carousel from '../components/index/Carousel';
import CategoryBanner from '../components/index/CategoryBanner';
import JoinUs from '../components/index/JoinUs';

import axios from 'axios';

// const PostLink = (props) => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

class Index extends React.Component{
  constructor (props) {
    super(props);

    this.categoryBanner="";
    this.joinUs="";
  }
  componentDidMount(){
    let self = this;
    axios.get(global.host + "/index")
    .then(function (response) {
      self.categoryBanner.getComplete(response.data.banners);
      self.joinUs.getComplete(response.data.aboutUsText);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  render () {
    return (
      <Layout>
        <style jsx>{`
          .home{
            padding-right: 3%;
            padding-left: 3%;
          }
        `}</style>
        <div className="container-fluid home">
          <Carousel/>
          <CategoryBanner ref={(categoryBanner) => { this.categoryBanner = categoryBanner; }}/>
          <JoinUs ref={(joinUs) => { this.joinUs = joinUs; }}/>
        </div>
        {/* <ul>
          <PostLink title="Hello Next.js"/>
          <PostLink title="Learn Next.js is awesome"/>
          <PostLink title="Deploy apps with Zeit"/>
        </ul>
        <Link href="/about">
          <a className="link">
            About Page
          </a>
        </Link> */}
      </Layout>
    );
  }
}
export default Index
