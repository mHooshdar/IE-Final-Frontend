import global from '../../static/global';
import axios from "axios";

class Delivery extends React.Component{
  // remove onclick button not done
  // number of items not work

  constructor (props) {
    super(props);

    this.state = {
      addresses: [],
      sendCost: 2000,
      times: [
        "شنبه: 8 - 10",
        "شنبه: 10 - 12",
        "شنبه: 12 - 14",
        "شنبه: 14 - 16",
      ]
    }

    this.newAddress = "";

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.removeAddress = this.removeAddress.bind(this);
    this.editAddress = this.editAddress.bind(this);
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.addAddress = this.addAddress.bind(this);
    this.handleChangeAddAddressInput = this.handleChangeAddAddressInput.bind(this);
  }
  componentDidMount(){
    const self = this;
    axios.get(global.host + "/addresses/" + self.props.id)
    .then(function (response) {
      self.setState({
        ["addresses"]: response.data
      })

      $(document).ready(function() {
        $('select').niceSelect();
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleOnChangeInput(event, addressId) {
    const target = event.target;
    const value = target.value;

    this.state.addresses.forEach(element => {
      if(element.id == addressId){
        element.address = value;
      }
    });
    let newAddresses = this.state.addresses;
    this.setState({
      ["addresses"]: newAddresses
    });
  }
  handleOptionChange(id){
    this.state.addresses.forEach(function(address) {
      $("#table" + address.id).removeClass("addressCheckedTable");
    });
    $("#table" + id).addClass("addressCheckedTable");
  }
  handleChangeAddAddressInput(event){
    const target = event.target;
    const value = target.value;
    this.newAddress = value;
  }
  removeAddress(addressId){
    const self = this;
    axios.delete(global.host + "/addresses/" + addressId)
    .then(function (response) {
      if(response.data.success){
        let addressIndex = 0;
        self.state.addresses.forEach(element => {
          if(element.id == addressId){
            self.state.addresses.splice(addressIndex, 1);
          }
          addressIndex++;
        })
        let removedAddress = self.state.addresses;
        self.setState({
          ["addresses"]: removedAddress
        });
        window.alert(response.data.desc);
      }
      else{
        window.alert(response.data.desc);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  editAddress(addressId, address){
    var formBody = [];
    var encodedKey = encodeURIComponent("address");
    var encodedValue = encodeURIComponent(address);
    formBody.push(encodedKey + "=" + encodedValue);

    formBody = formBody.join("&");
    console.log(formBody);

    axios({
      method: 'PUT',
      url: global.host + "/addresses/" + addressId,
      data: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(function (response) {
      if(response.data.success){
        window.alert(response.data.desc);
      }
      else{
        window.alert(response.data.desc);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  addAddress(addressId){
    const self = this;
    var formBody = [];
    var encodedKey = encodeURIComponent("address");
    var encodedValue = encodeURIComponent(this.newAddress);
    formBody.push(encodedKey + "=" + encodedValue);

    formBody = formBody.join("&");

    axios({
      method: 'POST',
      url: global.host + "/addresses/" + self.props.id,
      data: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(function (response) {
      let newAddress = {
        id: response.data.id,
        name: "",
        phoneNumber: "",
        zipCode: "",
        phoneNumber: "",
        address: self.newAddress,
      }
      self.state.addresses.push(newAddress);
      let newAddresses = self.state.addresses;
      self.setState({
        ["addresses"]: newAddresses
      });
      window.alert(response.data.desc);
      self.newAddress = "";
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render () {
    return (
      <div className="delivery">
        <style jsx>{`
          .delivery{
            margin-bottom: 40px;
          }
          .sendCostText{
            font-weight: bold;
            font-size: 15px;
          }
          .sendCost{
            color: ${global.progressFill};
            font-size: 24px;
          }
          .addressTable{
            border: 1px solid ${global.lightGray} !important;
          }
          .addressCheckedTable{
            border: 1px solid ${global.progressFill} !important;
          }
          .sendCostContainer{
            text-align: center;
          }
          .title{
            color: rgb(0, 0, 0);
            font-weight: bold;
            font-size: 15px;
          }
          .value{
            color: ${global.gray};
            padding-right: 10px;
          }
          .firstRowCol{
            border-top: none !important;
          }
          .addressTableCol{
            vertical-align: middle !important;
            text-align: right;
            padding-right: 10px;
          }
          .editImage{
            width: 15px;
            height: 15px;
            margin-top: 4px;
          }
          .editRemoveContainer{
            background: ${global.lighterGray};
            width: 35px;
          }
          .editRemoveContainer:hover{
            cursor: pointer;
          }
          .radioContainer{
            background: ${global.lighterGray};
            vertical-align: middle !important;
          }
          .borderRight{
            border-right: 1px solid ${global.lightGray};
          }
          .myRadioLabel {
            display: block;
            position: relative;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .myRadioLabel input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
          .checkmark {
            margin: auto;
            position: absolute;
            left: calc(50% - 7px);
            height: 15px;
            width: 15px;
            background-color: rgb(255, 255, 255);
            border-radius: 50%;
            border: 1px solid ${global.gray}
          }
          .myRadioLabel:hover input ~ .checkmark {
            background-color: ${global.progressFill};
          }
          .myRadioLabel input:checked ~ .checkmark {
            background-color: ${global.progressFill};
          }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }
          .myRadioLabel input:checked ~ .checkmark:after {
            display: block;
          }
          .myRadioLabel .checkmark:after {
            top: 4px;
            left: 4px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: white;
          }
          .namePart{
            width: 25%;
          }
          .phonePart{
            width: 25%;
          }
          .addAddress{
            border: 1px solid ${global.gray};
            text-align: center;
            width: 200px;
            margin-right: auto;
            color: rgb(255, 255, 255);
            background: ${global.blue};
            font-size: 12px;
            border-radius: 50px;
            padding: 5px;
            margin-top: 30px;
            margin-right: auto;
          }
          .addAddress:hover{
            cursor: pointer;
          }
          .customSelect{
            float: right;
            width: 250px;
          }
          .timeText{
            float: right;
            font-size: 17px;
          }
          .addressTextfield{
            width: calc(100% - 50px);
            border: 1px solid ${global.lighterGray};
          }
          .addAddressTextfield{
            width: 100%;
            display: block;
            border: 1px solid ${global.lighterGray};
          }
        `}</style>
        <div className="sendCostContainer">
          {this.props.remove ?
            ''
            :
            <div>
              <p className="sendCostText">
                هزینه ارسال
              </p>
              <p className="sendCost">
                {this.state.sendCost} تومان
              </p>
            </div>
          }
          {this.state.addresses.map((address) =>
            <table id={"table" + address.id} className="table addressTable">
              <tbody>
                <tr>
                  <td rowSpan="2" className="firstRowCol radioContainer">
                    <label className="myRadioLabel">
                      <input id={"radioButton" + address.id} type="radio" name="selectAddress" onChange={() => this.handleOptionChange(address.id)} />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td className="namePart firstRowCol addressTableCol borderRight">
                    <span className="title">تحویل گیرنده: </span>
                    <span className="value">{address.name}</span>
                  </td>
                  <td className="firstRowCol addressTableCol borderRight">
                    <span className="title">شماره تلفن ثابت: </span>
                    <span className="value">{address.homePhone}</span>
                  </td>
                  <td className="phonePart firstRowCol addressTableCol borderRight">
                    <span className="title">شماره تلفن همراه: </span>
                    <span className="value">{address.phoneNumber}</span>
                  </td>
                  <td className="firstRowCol editRemoveContainer borderRight" onClick={() => {this.editAddress(address.id, address.address)}}>
                    <svg viewBox="0 0 18 18" id="edit_icon" className="editImage">
                      <path d="M.826 17.847a.675.675 0 0 0 .225-.036l4.957-1.654a.45.45 0 0 0 .063-.029l.024-.014a.45.45 0 0 0 .077-.06l10.8-10.793a2.993 2.993 0 0 0-4.233-4.233L1.951 11.817a.45.45 0 0 0-.061.076l-.013.025a.45.45 0 0 0-.03.063l-1.66 4.977a.675.675 0 0 0 .639.9v-.011zm11.099-14.74l2.968 2.968-9.027 9.018-2.959-2.959 9.018-9.027zm1.442-1.442a2.095 2.095 0 0 1 2.968 2.959l-.81.805-2.954-2.954.796-.81zM2.475 12.967l2.558 2.558-3.85 1.283 1.292-3.841z" fillRule="nonzero" fill="#B4B6B6"></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="borderRight addressTableCol">
                    <span className="title">آدرس: </span>
                    <input onChange={(event) => {this.handleOnChangeInput(event, address.id)}} className="value addressTextfield" value={address.address}/>
                  </td>
                  <td className="borderRight addressTableCol">
                    <span className="title">کد پستی: </span>
                    <span className="value">{address.zipCode}</span>
                  </td>
                  <td className="editRemoveContainer borderRight" onClick={() => {this.removeAddress(address.id)}}>
                    <svg viewBox="0 0 16 16" id="close_icon" className="editImage">
                      <g transform="translate(1 1)" strokeWidth="1.273" fill="none" fillRule="evenodd" strokeLinecap="square" opacity=".691">
                        <path d="M13.364.636L.636 13.364" stroke="#919191"></path>
                        <path d="M.636.636l12.728 12.728" stroke="#8B8B8B"></path>
                      </g>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          <input onChange={this.handleChangeAddAddressInput} className="addAddressTextfield"/>
          <div className="addAddress" onClick={this.addAddress}>
            اضافه کردن آدرس جدید
          </div>
          {this.props.remove ?
            ''
          :
            <div>
              <p className="timeText">
                زمان دریافت سفارش
              </p>
              <select className="customSelect">
                <option data-display="انتخاب کنید" value="">انتخاب کنید</option>
                {this.state.times.map((time) => 
                  <option value={time}>{time}</option>
                )}
              </select>
            </div>
          }
        </div>
      </div>
    );
  }
}

Delivery.defaultProps = {
  remove: "",
}

export default Delivery
