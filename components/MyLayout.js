import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout