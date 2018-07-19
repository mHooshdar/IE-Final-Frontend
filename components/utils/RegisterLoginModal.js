import ReactModal from 'react-modal';
import global from '../../static/global';
import axios from 'axios';

ReactModal.setAppElement('#__next');

class RegisterLoginModal extends React.Component {
  /*
    mode: number // 0 => login, 1 => register
  }
  */

  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      textShow: 'ورود',
      mode: 0,
    };
    this.value={
      username: "",
      password: ""
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this);
  }
  
  handleOpenModal (mode) {
    if(mode == 0){
      this.setState({ showModal: true, mode: mode, showText: 'ورود'});
    }
    else if(mode == 1){
      this.setState({ showModal: true, mode: mode, showText: 'ثبت نام'});
    }
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  handleOnChangeUsername(event) {
    this.value.username = event.target.value;
  }
  handleOnChangePassword(event) {
    this.value.password = event.target.value;
  }

  sendRequest(event){
    event.preventDefault();
    let self = this;
    let myUrl="";
    if(this.state.mode == 0){
      myUrl = "/login";
    }
    else{
      myUrl = "/register";
    }
    var formBody = [];
    for (var property in this.value) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(this.value[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    axios({
      method: 'POST',
      url: global.host + myUrl,
      data: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(function (response) {
      if(response.data.success == "true"){
        self.props.loginHandler(response.data.username);
        self.setState({ showModal: false });
      }
      else{
        self.setState({ showModal: false });
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .loginRegisterForm{
            margin: 25px;
            margin-top: 20px;
          }
          .myClose{
            position: absolute;
            display: block;
            font-size: 40px;
            text-align: right;
          }
          .myClose:focus{
            border: 0;
            outline: 0;
          }
          .modalHead{
            text-align: center;
            font-size: 25px;
            font-weight: bold;
            color: ${global.gray}
          }
          .myLabel{
            color: ${global.blue};
            font-size: 12px;
            font-weight: lighter;
            margin: 0;
          }
          .contactUsTextfield{
            width: 100%;
            padding: 10px 20px;
            box-sizing: border-box;
            border: 1px solid rgb(200, 200, 200);
            background: ${global.lighterGray};
            border-radius: 20px;
            margin-bottom: 10px;
            color: rgb(110, 110, 110);
            transition: background 0.3s;
            -webkit-transition: background 0.3s;
            transition: border 0.3s;
            -webkit-transition: border 0.3s;
          }
          .contactUsTextfield[placeholder]{
            text-align: left;
          }
          .contactUsTextfield:focus{
            outline-width: 0;
            background: rgb(255, 255, 255);
            border: 1px solid ${global.blue};
            transition: background 0.3s;
            -webkit-transition: background 0.3s;
            transition: border 0.3s;
            -webkit-transition: border 0.3s;
          }
          .forgotContainer{
            text-align: center;
            margin: 10px;
          }
          .forgotText{
            color: ${global.gray}
          }
          .forgotLink{
            color: ${global.blue}
          }
          .signInSignUpBtn{
            display: block;
            margin: auto;
            margin-top: 30px;
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
          .signInSignUpBtn:hover{
            border: 1px solid ${global.blue};
            background: ${global.blue};
            color: rgb(255, 255, 255);
            -webkit-transition: background 0.3s;
            transition: background 0.3s;
          }
          :global(.modalOverlay){
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(178, 178, 178, 0.75);
            z-index: 100;
          }
          :global(.modalContent){
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            overflow: auto;
            outline: none;

            background: #fff;
            width: 400px;
            height: 380px;
            margin: auto;
            border: 1px solid rgb(150, 150, 150);
            border-radius: 0;
          }
          @media (max-width: 767px) {
            :global(.modalContent){
              width: 90%;
            }
          }
        `}</style>
        <ReactModal 
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          className='modalContent'
          overlayClassName='modalOverlay'
        >
          <form onSubmit={this.sendRequest} className='loginRegisterForm'>
            <button onClick={this.handleCloseModal} className="myClose close">
              <span>&times;</span>
            </button>
            <p className='modalHead'>{this.state.showText}</p>
            <label className='myLabel'>شماره تلفن یا ایمیل</label>
            <input onChange={this.handleOnChangeUsername} type='text' name='emailOrUername' className='contactUsTextfield' placeholder='abc@abc.abc' dir='ltr' required/>
            <label className='myLabel'>رمز عبور</label>
            <input onChange={this.handleOnChangePassword} type='password' name='password' className='contactUsTextfield' placeholder='رمزعبور' dir='ltr' required/>
            <div className='forgotContainer'>
              <span className='forgotText'>رمز عبور خود را فراموش کرده اید؟</span>
              <a href='#' className='forgotLink'> کلیک کنید</a>
            </div>
            <button type='submit' className='signInSignUpBtn'>{this.state.showText}</button>
          </form>
        </ReactModal>
      </div>
    );
  }
}

export default RegisterLoginModal;