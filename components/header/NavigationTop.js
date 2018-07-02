import global from '../../static/global';

const NavigationTop = () => (
  <div className="navigationTop">
    <style jsx>{`
      .mHeaderToggle{
        border: 2px solid ${global.gray};
      }
      .myIconBar{
        background: ${global.gray};
      }
      .myNavbarForm{
        margin: 0;
        border: 0px;
        -webkit-box-shadow: 0 0;
        box-shadow: 0 0;
      }
      .headerRow{
        margin-top: 40px;
        margin-right: 0px;
      }
      .blockButton{
        display: inline-block;
        border-radius: 25px;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
      }
      .signInBtn{
        width: 130px;
        font-size: 20px;
        border: 1px solid ${global.gray};
        background: ${global.gray};
        color: rgb(255, 255, 255);
        -webkit-transition: background 0.3s;
        transition: background 0.3s;
      }
      .signInBtn:hover{
        border: 1px solid ${global.blue};
        background: ${global.blue};
        color: rgb(255, 255, 255);
        -webkit-transition: background 0.3s;
        transition: background 0.3s;
      }
      .signUpBtn{
        margin-left: 5px;
        color: ${global.gray};
        font-size: 20px;
        width: 130px;
        border: 1px solid ${global.gray};
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        -webkit-transition: border 0.3s;
        transition: border 0.3s;
      }
      .signUpBtn:hover{
        color: ${global.blue};
        background: rgb(255, 255, 255);
        border: 1px solid ${global.blue};
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        -webkit-transition: border 0.3s;
        transition: border 0.3s;
      }
      .searchForm{
        padding: 0;
      }
      .searchTextfield{
        border: 1px solid ${global.gray};
        border-top-right-radius: 15px !important;
        border-bottom-right-radius: 15px !important;
        border-left: 0px;
        -webkit-box-shadow: 0 0;
        box-shadow: 0 0;
      }
      .searchTextfield:focus{
        border: 1px solid ${global.blue};
        border-top-right-radius: 15px !important;
        border-bottom-right-radius: 15px !important;
        border-left: 0px;
        -webkit-box-shadow: 0 0;
        box-shadow: 0 0;
      }
      .myGroupBtn{
        border: 1px solid ${global.gray};
        border-top-left-radius: 15px !important;
        border-bottom-left-radius: 15px !important;
        border-right: 0px;
      }
      .innerBtnSearch:hover{
        background: inherit;
      }
      .innerBtnSearch{
        border: 0px solid ${global.gray};
        border-top-left-radius: 15px !important;
        border-bottom-left-radius: 15px !important;
        padding-bottom: 0px;
      }
      .searchIcon{
        color: ${global.gray};
      }
      .searchTextfield:focus + .myGroupBtn .searchIcon{
        color: ${global.blue};
      }
      .searchTextfield:focus + .myGroupBtn{
        border: 1px solid ${global.blue};
        border-top-left-radius: 15px !important;
        border-bottom-left-radius: 15px !important;
        border-right: 0px;
      }
      
      @media (max-width: 767px) {
        .headerRow{
          margin-top: 0px;
        }
        .blockButton{
          margin-top: 5px;
          display: inline-block;
        }
        .mNavbarCollapse{
          border-top: 1px solid ${global.gray};
        }
      }
    `}</style>

    <div className="navbar-header">
      <button type="button" className="navbar-toggle mHeaderToggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar myIconBar"></span>
        <span className="icon-bar myIconBar"></span>
        <span className="icon-bar myIconBar"></span>                        
      </button>
    </div>
    <div className="collapse navbar-collapse mNavbarCollapse" id="myNavbar">
      <div className="nav navbar-nav navbar-right headerRow">
        <a href="#" className="blockButton signUpBtn">عضویت</a>
        <a href="#" className="blockButton signInBtn">ورود</a>
      </div>
      <form className="navbar-form myNavbarForm navbar-left headerRow searchForm" action="#">
        <div className="input-group">
          <input type="text" className="form-control searchTextfield" placeholder="جستجو" name="search"/>
          <div className="input-group-btn submit-search myGroupBtn">
            <button className="btn btn-default innerBtnSearch" type="submit">
              <i className="glyphicon glyphicon-search searchIcon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default NavigationTop;
