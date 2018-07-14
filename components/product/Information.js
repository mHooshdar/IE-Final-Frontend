import global from '../../static/global';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Information extends React.Component{
  constructor (props) {
    super(props);

    this.informations = [
      {
        id: 1,
        key: "جنس",
        value: "نخ"
      },
      {
        id: 2,
        key: "فرم",
        value: "معمولی"
      },
      {
        id: 3,
        key: "مورد استفاده",
        value: "روزمره"
      },
      {
        id: 4,
        key: "قد آستین",
        value: "بلند"
      },
      {
        id: 5,
        key: "یقه",
        value: "هفت"
      },
      {
        id: 6,
        key: "طرح پارچه",
        value: "طرح دار"
      },
      {
        id: 7,
        key: "فصل تولید",
        value: "بهار / تابستان 2018"
      },
      {
        id: 8,
        key: "کد کالا",
        value: "Red-1711027"
      },
    ]
  }

  render () {
    return (
      <div className="information">
        <style jsx>{`
          .myNavInformation{
            text-align: center;
            margin: auto;
            background: rgb(245,245,245);
            margin-bottom: 30px;
          }
          .myNavInformationItem{
            display: inline-block;
            padding: 3px;
            padding-left: 25px;
            padding-right: 25px;
            float: none;
          }
          .tabLinkInformation{
            background-color: inherit !important;
            border-radius: 0;
            color: rgb(0, 0, 0) !important;
          }
          .myNavInformation .active{
            border-bottom: 3px solid ${global.gray};
          }
          .tableInformationRow{
            border-top: 0px !important;
          }
          .informationPanelContainer{
            margin-right: 10%;
            margin-left: 10%;
          }
          .commentPanelContainer{
            margin-right: 10%;
            margin-left: 10%;
          }
          .tableInformationCell{
            border-top: 0px !important;
            padding: 15px;
          }
          
          .commentHead{
            font-size: 17px;
            color: ${global.gray};
            margin-bottom: 20px;
          }
          .commentTitle{
            outline: none;
            background-color: transparent;
            border-radius: 0;
            box-shadow: none;
            margin-bottom: 15px;
          }
          .commentText{
            resize: none;
            outline: none;
            background-color: transparent;
            border-radius: 0;
            box-shadow: none;
            margin-bottom: 15px;
            height: 245px;
          }
          .commentTitle:focus{
            border: 1px solid ${global.gray};
            -webkit-transition: all .2s ease-out;
            -moz-transition: all .2s ease-out;
            -o-transition: all .2s ease-out;
            transition: all .2s ease-out;
          }
          .commentText:focus{
            border: 1px solid ${global.gray};
            -webkit-transition: all .2s ease-out;
            -moz-transition: all .2s ease-out;
            -o-transition: all .2s ease-out;
            transition: all .2s ease-out;
          }
          .submitComment{
            color: #fff;
            background-color: ${global.blue};
            border: none;
            margin-right: auto;
            cursor: pointer;
            display: block;
            font-size: 16px;
            font-weight: normal;
            line-height: 40px;
            margin-bottom: 15px;
            padding: 0 25px;
            outline: none;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            -ms-border-radius: 0;
            -o-border-radius: 0;
            border-radius: 0;
            -webkit-transition: all .2s ease-out;
            -moz-transition: all .2s ease-out;
            -o-transition: all .2s ease-out;
            transition: all .2s ease-out;
          }
          .submitComment:hover{
            background: ${global.darkBlue};
          }
        `}</style>

        <ul className="nav nav-pills myNavInformation" id="myTab" role="tablist">
          <li className="nav-item myNavInformationItem active">
            <a className="nav-link tabLinkInformation" id="informationTab" data-toggle="tab" href="#informationPanel" role="tab" aria-controls="information" aria-selected="true">مشخصات محصول</a>
          </li>
          <li className="nav-item myNavInformationItem">
            <a className="nav-link tabLinkInformation" id="commentTab" data-toggle="tab" href="#commentPanel" role="tab" aria-controls="comment" aria-selected="false">نظرارت کاربران</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade active in" id="informationPanel" role="tabpanel" aria-labelledby="informationTab">
            <div className="informationPanelContainer">
              <table className="table table-striped">
                <tbody>
                  {this.informations.map((information) => 
                    <tr className="tableInformationRow">
                      <td className="tableInformationCell">{information.key}</td>
                      <td className="tableInformationCell">{information.value}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane fade" id="commentPanel" role="tabpanel" aria-labelledby="commentTab">
            <div className="commentPanelContainer">
              <p className="commentHead">
                لطفا قبل از نوشتن نظر خود در مورد این محصول، قوانین و ضوابط را مطالعه کنید.
              </p>
              <form>
                <input name="commentTitle" placeholder="عنوان نظر" className="form-control commentTitle"/>
                <textarea name="commentText" placeholder="نظر خود را بنویسید ..." className="form-control commentText"></textarea>
                <button onClick={this.submitClick} className="submitComment">ثبت نظر</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information
