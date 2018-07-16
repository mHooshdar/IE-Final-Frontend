import global from '../../static/global';

class ColorBase extends React.Component{
  // colors send to server
  constructor(props){
    super(props);
    this.state = {
      open: "-",
    }
    this.toggleColor = this.toggleColor.bind(this);

    // we have to get this from server
    this.colorBases = [
      {
        id: 1,
        title: "نقره ای",
        color: "c0c0c0"
      },
      {
        id: 2,
        title: "طوسی",
        color: "808080"
      },
      {
        id: 3,
        title: "زغالی",
        color: "696969"
      },
      {
        id: 4,
        title: "مشکی",
        color: "000000"
      },
      {
        id: 5,
        title: "سفید",
        color: "ffffff"
      },
      {
        id: 6,
        title: "بژ",
        color: "d4be8d"
      },
      {
        id: 7,
        title: "کرم",
        color: "ffe4c4"
      },
      {
        id: 8,
        title: "سبز",
        color: "25b53a"
      },
      {
        id: 9,
        title: "قهوه ای",
        color: "6f3e18"
      },
      {
        id: 10,
        title: "قرمز",
        color: "ea0001"
      },
      {
        id: 11,
        title: "سرخابی",
        color: "ff0080"
      },
      {
        id: 12,
        title: "بنفش",
        color: "800080"
      },
      {
        id: 13,
        title: "آبی",
        color: "0000ff"
      },
      {
        id: 14,
        title: "سرمه ای",
        color: "000080"
      },
      {
        id: 15,
        title: "زرد",
        color: "fffc00"
      },
      {
        id: 16,
        title: "صورتی",
        color: "ffc0cb"
      },
      {
        id: 17,
        title: "زرشکی",
        color: "800000"
      },
      {
        id: 18,
        title: "نارنجی",
        color: "ff6501"
      },
      {
        id: 19,
        title: "زیتونی",
        color: "657400"
      },
      {
        id: 20,
        title: "سبز آبی",
        color: "04ba94"
      },
      {
        id: 21,
        title: "طلایی",
        color: "cdad00"
      },
      {
        id: 22,
        title: "رز گلد",
        color: "b76e79"
      },
    ];
  }
  toggleColor(){
    $("#colorBaseContainer").slideToggle();
    if(this.state.open == "+"){
      this.setState({open: "-"});
    }
    else{
      this.setState({open: "+"});
    }
  }
  render () {
    return (
      <div className="colorBase">
        <style jsx>{`
          .colorBase {
            background: ${global.lighterGray};
            padding: 20px 20px 10px 5px;
            margin-bottom: 15px;
          }
          .colorSlider{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
            padding-left: 15px;
          }
          .colorSlider:hover{
            cursor: pointer;
          }
          .minusPlus{
            float: left;
          }
          .checkContainer {
            display: block;
            position: relative;
            margin-bottom: 12px;
            padding-bottom: 10px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin-bottom: 12px;
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
            height: 30px;
            width: 40px;
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(160, 160, 160);
          }
          .checkContainer:hover input ~ .checkmark {
            background-color: rgb(230, 230, 230);
          }
          .checkContainer input:checked ~ .checkmark {
            border: 2px solid rgb(0, 0, 0);
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
            left: 11px;
            top: -5px;
            width: 13px;
            height: 26px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          .colors{
            height: 200px;
            padding-left: 10px;
            overflow-y: scroll;
          }
          .colors::-webkit-scrollbar {
            width: 4px;
            padding-right: 10px;
          }
          .colors::-webkit-scrollbar-track {
            background: ${global.lighterGray}; 
            border-radius: 3px;
          }
          .colors::-webkit-scrollbar-thumb {
            background: rgb(210, 210, 210); 
            border-radius: 10px;
          }
          .colorContainer{
            display: inline-block;
            height: 30px;
            width: 40px;
            margin-left: 3px;
            margin-right: 3px;
          }
        `}</style>
        <div className="colorSlider" onClick={this.toggleColor}>
          <span className="minusPlus">
            {this.state.open}
          </span>
          <span className="colorBaseHeader">
            بر اساس رنگ
          </span>
        </div>
        <div id="colorBaseContainer">
          <div className="colors">
            {this.colorBases.map((colorBase) => 
              <div className="colorContainer">
                <label className="checkContainer" title={colorBase.title}>
                  <input type="checkbox" name="colorBase" value={colorBase.id}/>
                  <span className="checkmark" style={{"backgroundColor": "#" + colorBase.color}}></span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ColorBase
