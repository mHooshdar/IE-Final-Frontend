import global from '../../static/global';

class CategoryBase extends React.Component{
  // categories send to server
  constructor(props){
    super(props);
    this.state = {
      open: "-",
    }
    this.toggleCategory = this.toggleCategory.bind(this);

    // we have to get this from server
    this.categoryBases = [
      {
        id: 1,
        name: "مردانه",
        subCategory: [
          {
            id: 11,
            name: "لباس مردانه",
            subCategory: [
              {
                id: 111,
                name: "تی شرت و پولوشرت"
              },
              {
                id: 112,
                name: "شلوار"
              },
              {
                id: 113,
                name: "لباس ورزشی"
              },
              {
                id: 114,
                name: "لباس زیر و لباس راحتی"
              },
            ]
          },
          {
            id: 12,
            name: "کیف مردانه",
            subCategory: [
              {
                id: 121,
                name: "کیف پول و کارت"
              },
            ]
          },
          {
            id: 13,
            name: "اکسسوری مردانه",
            subCategory: [
              {
                id: 131,
                name: "کمربند"
              },
              {
                id: 132,
                name: "دستکش"
              },
              {
                id: 133,
                name: "زیورآلات"
              },
              {
                id: 134,
                name: "ساعت"
              },
            ]
          },
          {
            id: 14,
            name: "کفش مردانه",
            subCategory: [
              {
                id: 141,
                name: "بوت و نیم بوت"
              },
              {
                id: 142,
                name: "رسمی"
              },
              {
                id: 143,
                name: "روزمره"
              },
              {
                id: 144,
                name: "ورزشی"
              },
              {
                id: 145,
                name: "صندل و دمپایی"
              },
            ]
          },
        ]
      },
      {
        id: 2,
        name: "زنانه",
        subCategory: [
          {
            id: 21,
            name: "لباس زنانه",
            subCategory: [
              {
                id: 211,
                name: "پالتو بارانی و کاپشن"
              },
              {
                id: 212,
                name: "رویه"
              },
              {
                id: 213,
                name: "ژاکت و پلیور"
              },
              {
                id: 214,
                name: "سویشرت"
              },
              {
                id: 215,
                name: "تی شرت و پولوشرت"
              },
              {
                id: 216,
                name: "بلوز و شومیز"
              },
              {
                id: 217,
                name: "کت و جلیقه"
              },
              {
                id: 218,
                name: "سرهمی و سارافون"
              },
              {
                id: 219,
                name: "دامن"
              },
            ]
          },
          {
            id: 22,
            name: "کفش زنانه",
            subCategory: [
              {
                id: 221,
                name: "پاشنبه بلند"
              },
              {
                id: 222,
                name: "تخت"
              },
              {
                id: 223,
                name: "کتانی"
              },
              {
                id: 224,
                name: "صندل"
              },
              {
                id: 225,
                name: "دمپایی روفرشی"
              },
            ]
          },
          {
            id: 23,
            name: "اکسسوری زنانه",
            subCategory: [
              {
                id: 231,
                name: "شال و روسری"
              },
              {
                id: 232,
                name: "زیورآلات"
              },
              {
                id: 233,
                name: "ساعت"
              },
              {
                id: 234,
                name: "زیورآلات مو"
              },
            ]
          },
          {
            id: 24,
            name: "زیبایی و سلامت",
            subCategory: [
              {
                id: 241,
                name: "آرایش صورت"
              },
              {
                id: 242,
                name: "آرایش چشم و ابرو"
              },
              {
                id: 243,
                name: "بهداشت و زیبایی ناخن"
              },
            ]
          },
        ]
      },
      {
        id: 3,
        name: "بچه گانه",
        subCategory: [
          {
            id: 31,
            name: "نوزاد",
            subCategory: [
              {
                id: 311,
                name: "لباس نوزاد"
              },
              {
                id: 312,
                name: "کفش و پاپوش نوزاد"
              },
              {
                id: 313,
                name: "اکسسوری نوزاد"
              },
            ]
          },
          {
            id: 32,
            name: "پسرانه",
            subCategory: [
              {
                id: 321,
                name: "کفش پسرانه"
              },
            ]
          },
          {
            id: 33,
            name: "دخترانه",
            subCategory: [
              {
                id: 331,
                name: "لباس دخترانه"
              },
              {
                id: 332,
                name: "کفش دخترانه"
              },
              {
                id: 333,
                name: "کیف دخترانه"
              },
              {
                id: 334,
                name: "اکسسوری دخترانه"
              },
            ]
          },
        ]
      },
      {
        id: 4,
        name: "ورزشی",
        subCategory: [
          {
            id: 41,
            name: "مردانه",
            subCategory: [
              {
                id: 411,
                name: "لباس ورزشی"
              },
            ]
          },
          {
            id: 42,
            name: "پسرانه",
            subCategory: [
              {
                id: 421,
                name: "لباس ورزشی"
              },
            ]
          },
        ]
      },
    ];
  }
  toggleCategory(){
    $("#categoryBaseContainer").slideToggle();
    if(this.state.open == "+"){
      this.setState({open: "-"});
    }
    else{
      this.setState({open: "+"});
    }
  }
  render () {
    return (
      <div className="categoryBase">
        <style jsx>{`
          .categoryBase {
            background: ${global.lightGray};
            padding: 20px 20px 10px 5px;
            margin-bottom: 15px;
          }
          .categorySlider{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
            padding-left: 15px;
          }
          .categorySlider:hover{
            cursor: pointer;
          }
          .minusPlus{
            float: left;
          }
          .categories{
            height: 300px;
            padding-left: 10px;
            overflow-y: scroll;
          }
          .categories::-webkit-scrollbar {
            width: 4px;
            padding-right: 10px;
          }
          .categories::-webkit-scrollbar-track {
            background: ${global.lightGray}; 
            border-radius: 3px;
          }
          .categories::-webkit-scrollbar-thumb {
            background: rgb(210, 210, 210); 
            border-radius: 10px;
          }
          .categories ul{
            padding-right: 0;
            display: block;
            margin-right: 12px;
          }
          .categoryList{
            list-style-type:none;
          }
          .categoryList li{
            display: block;
            margin-right: 10px;
          }
          .eachCategory{
            border-bottom: 1px solid rgb(180, 180, 180);
            margin-bottom: 5px;
            padding-bottom: 25px;
            margin-right: 0 !important;
          }
          .eachCategory:last-child{
            border-bottom: none;
          }
          .categoryName{
            font-size: 18px;
            font-weight: bold;
            color: rgb(0, 0, 0);
            line-height: 35px;
          }
          .subCategoryName1{
            font-size: 14px;
            font-weight: bold;
            color: ${global.darkGray};
            line-height: 30px;
          }
          .subCategoryName2{
            font-size: 12px;
            color: ${global.gray};
            line-height: 30px;
          }
          .myListStyle{
            padding-left: 5px;
            font-size: 10px;
          }
        `}</style>
        <div className="categorySlider" onClick={this.toggleCategory}>
          <span className="minusPlus">
            {this.state.open}
          </span>
          <span className="categoryBaseHeader">
            دسته بندی ها
          </span>
        </div>
        <div id="categoryBaseContainer">
          <div className="categories">
          <ul className="categoryList">
            {this.categoryBases.map((categoryBase) => 
              <li className="eachCategory">
                {/* must change href */}
                <span className="glyphicon glyphicon-menu-down myListStyle"></span>
                <a href="#" className="categoryName">{categoryBase.name}</a>
                {categoryBase.subCategory.map((subCategory1) => 
                  <ul>
                    <li>
                      {/* must change href */}
                      <span className="glyphicon glyphicon-menu-left myListStyle"></span>
                      <a href="#" className="subCategoryName1">{subCategory1.name}</a>
                      {subCategory1.subCategory.map((subCategory2) => 
                        <ul>
                          <li>
                            {/* must change href */}
                            <a href="#" className="subCategoryName2">{subCategory2.name}</a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
            )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryBase
