import global from '../../static/global';
import Link from 'next/link';

class Category extends React.Component{
  render () {
    return (
      <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <style jsx>{`
          .itemImages{
            width: 100%;
            height: 250px;
            margin-top: 0;
            object-fit: cover;
            -webkit-transition: opacity 0.3s;
            transition: opacity 0.3s;
          }
          .item{
            padding: 0;
          }
          .item:first-child{
            padding-right: 15px;
          }
          .item:last-child{
            padding-left: 15px;
          }
          .itemText{
            background-color: ${global.gray};
            text-align: center;
            margin-bottom: 15px;
            padding: 15px;
            color: rgb(255, 255, 255);
            font-size: 20px;
            -webkit-transition: background-color 0.3s;
            transition: background-color 0.3s;
          }
          
          .itemText:first-child{
            border-left: 1px solid ${global.darkGray};
          }
          
          .itemText:last-child{
            border-right: 1px solid ${global.darkGray};
          }
          
          .itemText:hover {
            background-color: ${global.darkGray};
            -webkit-transition: background-color 0.3s;
            transition: background-color 0.3s;
          }
          .item:hover .itemImages{
            opacity: 0.7;
            -webkit-transition: opacity 0.3s;
            transition: opacity 0.3s;
          }
          @media (min-width: 1200px) { 
            .itemImages{
              height: 300px;
            }
          }
          @media (max-width: 767px) {
            .item{
              padding-right: 15px !important;
              padding-left: 15px !important;
              padding-bottom: 0px;
            }
            .itemImages{
              height: 300px;
            }
          }
        `}</style>
        <Link href={`/category?filter=${this.props.href}`}>
          <a>
            <img src={this.props.src} alt="male" className="itemImages"/>
            <div className="itemText">{this.props.text}</div>
          </a>
        </Link>
      </div>
    );
  }
}
export default Category;
