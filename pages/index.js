// import Link from 'next/link';
import Layout from '../components/MyLayout';
import Carousel from '../components/index/Carousel';
import CategoryBanner from '../components/index/CategoryBanner';
import JoinUs from '../components/index/JoinUs';

// const PostLink = (props) => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

class Index extends React.Component{
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
          <CategoryBanner/>
          <JoinUs/>
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
