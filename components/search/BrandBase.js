import global from '../../static/global';

class BrandBase extends React.Component{
  // search functionality and check brands send to server
  constructor(props){
    super(props);
    this.state = {
      open: "-",
    }
    this.toggleBrand = this.toggleBrand.bind(this);

    // we have to get this from server
    this.brandBases = [
      {
        id: 1,
        faName: "مانگو",
        enName: "Mango"
      },
      {
        id: 2,
        faName: "ارکسترا",
        enName: "Orchestra"
      },
      {
        id: 3,
        faName: "ورا مدا",
        enName: "Vero Moda"
      },
      {
        id: 4,
        faName: "انی",
        enName: "Anny"
      },
      {
        id: 5,
        faName: "سوپردرای",
        enName: "Superdry"
      },
      {
        id: 6,
        faName: "دفکتو",
        enName: "Defacto"
      },
      {
        id: 7,
        faName: "آیس واچ",
        enName: "Ice Watch"
      },
      {
        id: 8,
        faName: "تیفوسی",
        enName: "Tiffosi"
      },
    ];
  }
  toggleBrand(){
    $("#brandBaseContainer").slideToggle();
    if(this.state.open == "+"){
      this.setState({open: "-"});
    }
    else{
      this.setState({open: "+"});
    }
  }
  render () {
    return (
      <div className="brandBase">
        <style jsx>{`
          .brandBase {
            background: ${global.lightGray};
            padding: 20px 20px 10px 5px;
            margin-bottom: 15px;
          }
          .brandSlider{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
            padding-left: 15px;
          }
          .brandSlider:hover{
            cursor: pointer;
          }
          .minusPlus{
            float: left;
          }
          .brandSearch{
            margin-bottom: 30px;
            border: solid 1px #cdcdcd;
            border-radius: 0;
            padding: 7px 14px;
            width: 100%;
          }
          .brandSearchContainer{
            padding-left: 15px;
          }
          .brandSearch:focus{
            outline: none;
            border-color: rgb(200, 200, 200);
          }
          .checkContainer {
            display: block;
            position: relative;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 15px;
            padding-bottom: 10px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border-bottom: 1px solid rgb(160, 160, 160);
            color: rgb(160, 160, 160);
          }
          .checkContainer input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
          .checkmark {
            position: absolute;
            top: 0;
            right: 0;
            height: 25px;
            width: 25px;
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(160, 160, 160);
          }
          .checkContainer:hover input ~ .checkmark {
            background-color: rgb(230, 230, 230);
          }
          .checkContainer input:checked ~ .checkmark {
            background-color: rgb(33, 150, 243);
          }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }
          .checkContainer input:checked ~ .checkmark:after {
            display: block;
          }
          .checkContainer .checkmark:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          .nameFa{
            padding-right: 32px;
            display: inline-block;
            line-height: 25px;
            font-size: 15px;
            font-weight: normal;
          }
          .nameEn{
            display: inline-block;
            float: left;
            padding-left: 5px;
            line-height: 25px;
            font-size: 15px;
            font-weight: normal;
          }
          .brands{
            height: 280px;
            padding-left: 10px;
            overflow-y: scroll;
          }
          .brands::-webkit-scrollbar {
            width: 4px;
            padding-right: 10px;
          }
          .brands::-webkit-scrollbar-track {
            background: ${global.lightGray}; 
            border-radius: 3px;
          }
          .brands::-webkit-scrollbar-thumb {
            background: rgb(210, 210, 210); 
            border-radius: 10px;
          }
        `}</style>
        <div className="brandSlider" onClick={this.toggleBrand}>
          <span className="minusPlus">
            {this.state.open}
          </span>
          <span className="brandBaseHeader">
            بر اساس برند
          </span>
        </div>
        <div id="brandBaseContainer">
          <div className="brandSearchContainer">
            <input className="brandSearch" placeholder="جستجو برند ..."/>
          </div>
          <div className="brands">
            {this.brandBases.map((brandBase) => 
              <label className="checkContainer">
                <input type="checkbox" name="brandBase" value={brandBase.id}/>
                <span className="checkmark"></span>
                <div className="nameFa">{brandBase.faName}</div>
                <div className="nameEn">{brandBase.enName}</div>
              </label>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BrandBase
