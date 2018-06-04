import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'


const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <style jsx>{`
      .link {
        color: green;
      }
    `}</style>

    <p>Hello Next.js</p>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
    <Link href="/about">
      <a className="link">
        About Page
      </a>
    </Link>
    <Link href="/about">
      <button>About Page</button>
    </Link>
    <div className='col-lg-3'>
      a
    </div>
    <div className='col-sm-3'>
      a
    </div>
  </Layout>
)

export default Index
