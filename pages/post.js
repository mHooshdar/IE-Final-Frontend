import Layout from '../components/MyLayout'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

class Post extends React.Component{
  render () {
    return (
      <Layout>
        <Content url={this.props.url}/>
      </Layout>
    );
  }
}

export default Post