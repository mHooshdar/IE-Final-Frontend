import ReactModal from 'react-modal';
import global from '../../static/global';

ReactModal.setAppElement('#__next');

class RegisterLoginModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal (mode) {
    this.setState({ showModal: true, mode: mode });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
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
            background: ${global.lightGray};
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
          <form method='POST' className='loginRegisterForm'>
            <button onClick={this.handleCloseModal} className="myClose close">
              <span>&times;</span>
            </button>
            <p className='modalHead'>{this.state.mode}</p>
            <label className='myLabel'>شماره تلفن یا ایمیل</label>
            <input type='text' name='emailOrUername' className='contactUsTextfield' placeholder='abc@abc.abc' dir='ltr'/>
            <label className='myLabel'>رمز عبور</label>
            <input type='password' name='password' className='contactUsTextfield' placeholder='رمزعبور' dir='ltr'/>
            <div className='forgotContainer'>
              <span className='forgotText'>رمز عبور خود را فراموش کرده اید؟</span>
              <a href='#' className='forgotLink'> کلیک کنید</a>
            </div>
            <button type='submit' className='signInSignUpBtn'>{this.state.mode}</button>
          </form>
        </ReactModal>
      </div>
    );
  }
}

export default RegisterLoginModal;