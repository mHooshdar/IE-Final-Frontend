import global from '../../static/global';

const JoinUs = () => (
  <div className="container-fluid home">
    <style jsx>{`
      .aboutCell{
        height: 318px;
        margin-bottom: 20px;
      }
      .aboutHead{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        padding: 15px;
        padding-top: 20px;
      }
      .allBrands{
        position: absolute;
        top: 50%;
        left: calc(50% + 15px);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        opacity: 0.2;
        width: calc(100% - 30px);
        border: 2px solid ${global.gray};
        height: 318px;
        object-fit: cover;
      }
      .allBrandsButton{
        border: 1px solid ${global.gray};
        position: absolute;
        top: 50%;
        text-align: center;
        left: calc(50% + 15px);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        color: rgb(255, 255, 255);
        background: ${global.blue};
        font-size: 15px;
        border-radius: 50px;
        padding: 10px;
        padding-left: 40px;
        padding-right: 40px;
      }
      .emailUs{
        background: ${global.blue};
        color: rgb(255, 255, 255);
        text-align: center;
        border: 1px solid ${global.blue};
        border-radius: 5px;
        box-shadow: 0px 10px 20px rgb(100, 100, 100);
      }
      .emailImage{
        display: block;
        margin: auto;
        width: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .newsletter{
        font-size: 15px;
      }
      .join{
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 25px;
      }
      .myTextFieldGroup{
        width: 70%;
        margin: auto;
      }
      .emailIcon{
        border-top-right-radius: 25px !important;
        border-bottom-right-radius: 25px !important;
        border: 1px solid rgb(255, 255, 255) !important;
        background: rgb(255, 255, 255);
        color: ${global.blue};
      }
      .emailTextfield{
        text-align: right;
        color: ${global.gray};
        border: 1px solid rgb(255, 255, 255);
        font-size: 15px;
        padding: 12px;
        padding-right: 0;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        width: 100%;
        -webkit-box-shadow: 0 0;
        box-shadow: 0 0;
      }
      .emailTextfield::placeholder{
        color: ${global.blue};
      }
      .emailTextfield:focus{
        outline-width: 0;
        -webkit-box-shadow: 0 0;
        box-shadow: 0 0;
      }
      .joinButton{
        color: rgb(255, 255, 255);
        background: rgb(32, 32, 32);
        display: block;
        width: 100px;
        font-size: 15px;
        margin: auto;
        border-radius: 25px;
        margin-top: 20px;
        padding: 13px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .joinButton:hover{
        background: rgb(34, 38, 64);
      }
      @media (max-width: 767px) {
        .allBrands{
          position: absolute;
          top: 50%;
          left: calc(50%);
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          width: calc(100%);
        }
        .allBrandsButton{
          position: absolute;
          top: 50%;
          text-align: center;
          left: calc(50% );
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
        }
        .aboutCell{
          padding: 0 !important;
        }
      }
    `}</style>
    <div className="row">
      <p className="aboutHead">بهترین ها را از ما خرید کنید</p>
      <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 allBrandBox aboutCell">
        <img className="allBrands" src="/static/images/index/all-brands.png"/>
        <a href="#" className="allBrandsButton">تمام برندهای معتبر را با ما تجربه کنید</a>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12 emailUs aboutCell">
        <img className="emailImage" src="/static/images/index/email.png" alt="email-us"/>
        <p className="newsletter">در خبرنامه ی ما</p>
        <p className="join">عضو شوید!</p>
        <div className="input-group myTextFieldGroup">
          <span className="input-group-addon emailIcon"><i className="glyphicon glyphicon-user"></i></span>
          <input type="text" className="emailTextfield" placeholder="ایمیل خود را وارد کنید"/>
        </div>
        <a href="#" className="joinButton">عضو شوید</a>
      </div>
    </div>
  </div>
);

export default JoinUs
