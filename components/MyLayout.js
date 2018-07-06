import Header from './header/Header'
import Footer from './footer/Footer'

class Layout extends React.Component{
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout