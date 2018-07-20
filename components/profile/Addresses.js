import global from '../../static/global';
import Delivery from '../bag/Delivery';

class Addresses extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      addressOpen: false,
    }
    this.toggleAddress = this.toggleAddress.bind(this);
  }
  toggleAddress(){
    $("#addressContainer").slideToggle();
    this.setState(prevState => {
      return {addressOpen: !prevState.addressOpen}
    });
  }

  render () {
    return (
      <div className="addresses">
        <style jsx>{`
          .addresses{
            margin-top: 40px;
          }
          .addressTitle{
            color: ${global.gray};
            font-size: 18px;
            margin-right: 15px;
            margin-bottom: 10px;
          }
          .addressTitle:hover{
            cursor: pointer;
          }
        `}</style>
        <p className="addressTitle" onClick={this.toggleAddress}>
          آدرس ها <span className={this.state.addressOpen ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>
        </p>
        <div id="addressContainer">
          <Delivery id={this.props.id} remove="true"/>
        </div>
      </div>
    );
  }
}

export default Addresses
