import global from '../../static/global';

class UserPart extends React.Component{
  constructor (props) {
    super(props);

    this.state= {
      user: {
        src: "/static/images/profile/user.png",
        name: "محمد هوشدار",
        city: "قم",
        phoneNumber: "09379439798",
        homePhone: "0212222222",
        date: "2018-01-01",
        cardNumber: "987876765672189",
        password: "123456",
      }
    }
  }

  render () {
    return (
      <div className="userPart">
        <style jsx>{`
          .userPart{
            border: 1px solid ${global.lightGray};
            padding-left: 3%;
            padding-right: 3%;
            padding-top: 140px;
            position: relative;
          }
          .imageAndNamePart{
            text-align: center;
            position: absolute;
            right: calc(50% - 150px);
            top: 20px;
          }
          .userName{
            font-size: 20px;
            font-weight: bold;
          }
          .userImage{
            width: 300px;
            height: 300px;
            border-radius: 50%;
          }
          .genderContainer{
            height: 50px;
          }
          .gender{
            color: ${global.blue};
            font-size: 12px;
            margin-top: 10px;
          }
          .maleText{
            display: inline-block;
            border: 1px solid ${global.blue};
            border-radius: 50%;
            vertical-align: top;
            position: relative;
            right: 32px;
            padding-left: 34px;
            padding-top: 14px;
            padding-bottom: 14px;
            padding-right: 4px;
            z-index: -1;
          }
          .maleImg{
            width: 40px;
            fill: rgb(255, 255, 255);
            height: 100%;
            display: inline-block;
            padding: 10px;
            background: ${global.blue};
          }
          .femaleText{
            display: inline-block;
            position: relative;
            border: 1px solid ${global.blue};
            border-radius: 50%;
            vertical-align: top;
            left: 29px;
            padding-right: 34px;
            padding-top: 14px;
            padding-bottom: 14px;
            padding-left: 4px;
            z-index: -1;
          }
          .femaleImg{
            width: 40px;
            height: 100%;
            fill: rgb(255, 255, 255);
            padding: 7px;
            display: inline-block;
            background: ${global.redFemale};
          }
          .userProfileLabel{
            margin: 0;
            color: ${global.blue};
            font-weight: bold;
            display: block;
            padding-top: 20px;
          }
          .userProfileTextfield{
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-right: 20px;
            box-sizing: border-box;
            padding-left: 20px;
            border: 1px solid ${global.lighterGray};
            background: ${global.lighterGray};
            border-radius: 20px;
            color: ${global.gray};
            transition: background 0.3s;
            -webkit-transition: background 0.3s;
            transition: border 0.3s;
            -webkit-transition: border 0.3s;
          }
          .textfieldContainerRight{
            width: 28%;
            display: inline-block;
          }
          .textfieldContainerLeft{
            width: 28%;
            float: left;
            display: inline-block;
          }
          .passwordRow{
            padding-top: 50px;
          }
          .passwordRight{
            width: 28%;
            display: inline-block;
          }
          .passwordCenter{
            width: 28%;
            margin-right: 8%;
            margin-left: 8%;
            display: inline-block;
          }
          .passwordLeft{
            width: 28%;
            display: inline-block;
          }
          .userProfileTextfield:focus{
            outline-width: 0;
            background: rgb(255, 255, 255);
            border: 1px solid ${global.blue};
            transition: background 0.3s;
            -webkit-transition: background 0.3s;
            transition: border 0.3s;
            -webkit-transition: border 0.3s;
          }
          .userDetailRow{
            margin-bottom: 40px;
          }
          .submitButton{
            position: relative;
            right: 5px;
            top: 25px;
            border: 1px solid ${global.gray};
            text-align: center;
            width: 250px;
            margin-right: auto;
            color: rgb(255, 255, 255);
            background: ${global.blue};
            font-size: 15px;
            border-radius: 50px;
            padding: 12px;
            margin-top: 30px;
            margin-right: auto;
            margin-left: auto;
          }
          .submitButton:hover{
            cursor: pointer;
          }
          @media (max-width: 767px) {
            .imageAndNamePart{
              text-align: center;
              position: absolute;
              right: calc(50% - 100px);
              top: 20px;
            }
            .userImage{
              width: 180px;
              height: 180px;
            }
          }
        `}</style>
        <div className="imageAndNamePart">
          <p className="userName">
            {this.state.user.name}
          </p>
          <img className="userImage" src={this.state.user.src}/>
          <p className="gender">
            جنسیت
          </p>
          <div className="genderContainer">
            <p className="maleText">
              مرد
            </p>
            <svg className="maleImg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 347.182 347.182" style={{enableBackground: "new 0 0 347.182 347.182"}} xmlSpace="preserve">
              <g>
                <path d="M340.664,107.589V0H233.081v42.741h34.638l-47.813,47.801
                  c-22.125-13.933-48.117-21.505-74.449-21.505c-37.156,0-72.038,14.434-98.245,40.64c-54.263,54.263-54.257,142.549,0,196.811
                  c26.242,26.242,61.202,40.688,98.412,40.694c37.203,0,72.163-14.452,98.412-40.694c26.242-26.248,40.706-61.208,40.706-98.412
                  c0-33.086-11.433-64.388-32.49-89.431l45.682-45.682v34.626H340.664z M145.625,304.46c-25.795,0-50.002-10.012-68.189-28.193
                  c-37.585-37.597-37.585-98.77,0-136.367c18.181-18.175,42.395-28.199,68.189-28.193c25.795,0,50.014,10.018,68.189,28.193
                  c37.591,37.597,37.591,98.77,0,136.367C195.621,294.447,171.414,304.46,145.625,304.46z"/>
              </g>
            </svg>
            <svg className="femaleImg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="477.141px" height="477.141px" viewBox="0 0 477.141 477.141" style={{enableBackground: "new 0 0 477.141 477.141"}}
              xmlSpace="preserve">
              <g>
                <path d="M326.711,341.99h-64.628v-64.634c0-0.686-0.142-1.323-0.213-1.997c65.409-11.119,115.378-68.161,115.378-136.681
                  C377.249,62.208,315.044,0,238.571,0C162.103,0,99.892,62.208,99.892,138.678c0,68.521,49.973,125.562,115.375,136.681
                  c-0.059,0.674-0.204,1.312-0.204,1.997v64.634h-64.631c-12.983,0-23.501,10.527-23.501,23.502c0,12.98,10.518,23.507,23.501,23.507
                  h64.637v64.64c0,12.98,10.524,23.502,23.501,23.502c12.979,0,23.513-10.527,23.513-23.502v-64.64h64.628
                  c12.986,0,23.508-10.526,23.508-23.507C350.219,352.518,339.698,341.99,326.711,341.99z M146.904,138.678
                  c0-50.546,41.121-91.673,91.667-91.673c50.549,0,91.676,41.122,91.676,91.673s-41.127,91.667-91.676,91.667
                  C188.031,230.346,146.904,189.224,146.904,138.678z"/>
              </g>
            </svg>
            <p className="femaleText">
              زن
            </p>
          </div>
        </div>
        <div className="userDetailRow">
          <div className="myTextfieldRow">
            <div className="textfieldContainerRight">
              <label htmlFor="name" className="userProfileLabel">نام و نام خانوادگی</label>
              <input name="name" className="userProfileTextfield" type="text" placeholder="نام را وارد کنید" defaultValue={this.state.user.name}/>
            </div>
            <div className="textfieldContainerLeft">
              <label htmlFor="city" className="userProfileLabel">شهر</label>
              <input name="city" className="userProfileTextfield" type="text" placeholder="شهر را وارد کنید" defaultValue={this.state.user.city}/>
            </div>
          </div>
          <div className="myTextfieldRow">
            <div className="textfieldContainerRight">
              <label htmlFor="phoneNumber" className="userProfileLabel">شماره تلفن همراه</label>
              <input name="phoneNumber" className="userProfileTextfield" type="text" placeholder="11 رقم" defaultValue={this.state.user.phoneNumber}/>
            </div>
            <div className="textfieldContainerLeft">
              <label htmlFor="number" className="userProfileLabel">شماره تلفن ثابت</label>
              <input name="number" className="userProfileTextfield" type="text" placeholder="11 رقم" defaultValue={this.state.user.homePhone}/>
            </div>
          </div>
          <div className="myTextfieldRow">
            <div className="textfieldContainerRight">
              <label htmlFor="birthdate" className="userProfileLabel">تاریخ تولد</label>
              <input name="birthdate" className="userProfileTextfield" type="date" placeholder="تاریخ" defaultValue={this.state.user.date}/>
            </div>
            <div className="textfieldContainerLeft">
              <label htmlFor="cardNumber" className="userProfileLabel">شماره کارت 16 رقمی</label>
              <input name="cardNumber" className="userProfileTextfield" type="text" placeholder="اختیاری" defaultValue={this.state.user.cardNumber}/>
            </div>
          </div>
          <div className="passwordRow">
            <div className="passwordRight">
              <label htmlFor="curPass" className="userProfileLabel">رمز عبور فعلی</label>
              <input name="curPass" className="userProfileTextfield" type="password"/>
            </div>
            <div className="passwordCenter">
              <label htmlFor="newPass" className="userProfileLabel">رمز عبور جدید</label>
              <input name="newPass" className="userProfileTextfield" type="password"/>
            </div>
            <div className="passwordLeft">
              <label htmlFor="againNewPass" className="userProfileLabel">تکرار رمز عبور جدید</label>
              <input name="againNewPass" className="userProfileTextfield" type="password"/>
            </div>
          </div>
        </div>
        <div className="submitButton">
          ثبت تغییرات
        </div>
      </div>
    );
  }
}

export default UserPart
