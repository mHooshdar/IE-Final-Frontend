import Link from 'next/link'
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
    `}</style>

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
)

export default Index
