import global from '../../static/global';

class Brand extends React.Component{
  /*
    images ration: 3 * 4
  */

  constructor (props) {
   super(props);
  }
  
  render () {
    return (
      // href must come from parent
      <a href="#" className="row brand">
        <style jsx>{`
          .brand{
            border: 2px solid ${global.gray};
            color: rgb(0, 0, 0);
            display: block;
            margin: 0;
            padding: 0;
          }
          .brandName{
            margin-top: 30%;
            font-size: 25px;
            font-weight: bold;
            color: ${global.gray};
          }
          .brandImage{
            width: 100%;
            height: 100%;
          }
          .rightSide{
            display: inline-block;
            text-align: center;
            padding: 0;
          }
          .leftSide{
            padding: 0;
          }
          .signInBtn{
            display: inline-block;
            border-radius: 25px;
            padding-top: 5px;
            padding-bottom: 5px;
            text-align: center;
            width: 130px;
            font-size: 20px;
            border: 1px solid ${global.gray};
            background: ${global.gray};
            color: rgb(255, 255, 255);
            -webkit-transition: background 0.3s;
            transition: background 0.3s;
          }
          .brand:hover .signInBtn{
            border: 1px solid ${global.blue};
            background: ${global.blue};
            color: rgb(255, 255, 255);
            -webkit-transition: background 0.3s;
            transition: background 0.3s;
          }
          @media (max-width: 767px) {
          }
          @media (min-width: 768px) and (max-width: 991px) {
          }
          @media (min-width: 992px) and (max-width: 1191px) {
          }
          @media (min-width: 1200px) {
          }
        `}</style>
        <div className="col-xs-6 rightSide">
          <p className="brandName">{this.props.brandName}</p>
          <a href="#" className="blockButton signInBtn">خرید</a>
        </div>
        <div className="col-xs-6 leftSide">
          <img className="brandImage" src={this.props.src} alt={this.props.brandName}/>
        </div>
      </a>
    );
  }
}

Brand.defaultProps = {
  src: '',
  brandName: ''
}

export default Brand
