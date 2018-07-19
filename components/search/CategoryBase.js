import global from '../../static/global';
import axios from 'axios';

class CategoryBase extends React.Component{
  // categories send to server
  constructor(props){
    super(props);
    this.state = {
      open: "-",
    }
    this.toggleCategory = this.toggleCategory.bind(this);

    // we have to get this from server
    this.state = {
      categoryBases: []
    }
  }
  componentDidMount(){
    let self = this;
    axios.get(global.host + "/categories")
    .then(function (response) {
      self.setState({
        categoryBases: response.data
      })
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
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
            background: ${global.lighterGray};
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
            background: ${global.lighterGray}; 
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
            {this.state.categoryBases.map((categoryBase) => 
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
