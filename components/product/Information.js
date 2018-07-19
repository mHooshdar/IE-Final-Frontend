import global from '../../static/global';
import axios from "axios";

class Information extends React.Component{
  constructor (props) {
    super(props);
    // props : id
    this.state = {
      informations: []
    }
  }
  componentDidMount(){
    const self = this;
    axios.get(global.host + "/information/" + self.props.id)
    .then(function (response) {
      self.setState({
        informations: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })
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
                  {this.state.informations.map((information) => 
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
