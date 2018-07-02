import FacebookIcon from './FacebookIcon'
import GoogleIcon from './GoogleIcon'
import TwitterIcon from './TwitterIcon'
import global from '../../static/global';

const Footer = () => (
  <footer className="footer">
    <style jsx>{`
      .footer{
        background-color: rgb(239, 239, 239);
        padding-top: 2%;
        padding-bottom: 2%;
      }
      .item1 {
        font-size: 15px;
        color: ${global.gray};
        display: inline-block;
        text-align: right;
        min-height: 150px;
      }
      .item2 {
        font-size: 15px;
        color: ${global.gray};
        display: inline-block;
        text-align: right;
        min-height: 150px;
      }
      .item3 {
        text-align: center;
        font-size: 18px;
        color: ${global.gray};
        display: inline-block;
      }
      .item4 {
        color: ${global.gray};
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        min-height: 150px;
        text-align: justify;
      }
      .subitem {
        display: block;
        font-size: 13px;
        color: rgb(170, 170, 170);
        font-weight: lighter;
        padding-top: 2px;
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
      }
      .subitem:hover {
        color: ${global.blue};
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        font-weight: normal;
      }
      .footerImg {
        justify-content: center;
      }

      .itemHead{
        font-weight: bold;
        padding-bottom: 3px;
      }
    `}</style>

    <div className="container">
      <div className="row">
        <div className="item1 col-lg-2 col-md-2 col-sm-3 col-xs-6">
          <div className="itemHead">خدمات مشتریان</div>
          <a href="#" className="subitem">سوالات متداول</a>
          <a href="return.html" className="subitem">بازگرداندن کالا</a>
          <a href="#" className="subitem">شرایط استفاده</a>
          <a href="#" className="subitem">حریم شخصی</a>
        </div>
        <div className="item2 col-lg-2 col-md-2 col-sm-3 col-xs-6">
          <div className="itemHead">اطلاعات ما</div>
          <a href="about.html" className="subitem">درباره ما</a>
          <a href="contact.html" className="subitem">تماس با ما</a>
        </div>
        <div className="item3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div className="itemHead">به ما در رسانه های اجتماعی بپیوندید</div>
          <div className="footerImg">
            <a href="#" ><FacebookIcon width="35px" height="35px"/></a>
            <a href="#" ><TwitterIcon width="35px" height="35px"/></a>
            <a href="#" ><GoogleIcon width="35px" height="35px"/></a>
          </div>
          <div className="footerImg">
            <a href="#" ><FacebookIcon width="35px" height="35px"/></a>
            <a href="#" ><TwitterIcon width="35px" height="35px"/></a>
            <a href="#" ><GoogleIcon width="35px" height="35px"/></a>
          </div>
        </div>
        <div className="item4 col-lg-4 col-md-4 col-sm-12 col-xs-6">
          تمامی حقوق این سایت متعلق به دانشگاه امیرکبیر بوده و هرگونه استفاده از منابع و طراحی های این سایت توسط نهادی خارج از دانشگاه با پیگرد قانونی همراه خواهد بود
        </div>
      </div>
    </div>
  </footer>
);

export default Footer