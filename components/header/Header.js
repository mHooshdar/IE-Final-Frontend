import global from '../../static/global';
import NavigationTop from './NavigationTop';
import NavigationBottom from './NavigationBottom';

class Header extends React.Component{
  render () {
    return (
      <header className="container-fluid header">
        <style jsx>{`
          .headerName{
            color: ${global.gray};
            display: inline;
            position: absolute;
            top: 30px; 
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: lighter;
            z-index: 1;
          }
          .header{
            margin-bottom: 20px;
            border-bottom: 1px solid rgb(240, 240, 240);
          }
          @media (max-width: 767px) {
            .headerName{
              top: 8px; 
            }
          }
          @media (min-width: 1100px) {
            .header{
              margin-left: 7%;
              margin-right: 7%;
            }
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            .header{
              margin-left: 3%;
              margin-right: 3%;
            }
            .headerName{
              top: 8px; 
            }
          }
        `}</style>

        <a href="#"><h1 className="headerName">Clothster</h1></a>
        <nav className="myNavbar navbar">
          <NavigationTop/>
          <NavigationBottom/>
        </nav>
      </header>
    );
  }
}

export default Header