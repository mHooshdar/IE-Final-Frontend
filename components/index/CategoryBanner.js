import Category from './Category';

class CategoryBanner extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      banners:[
        {
          bannerURL: "",
          bannerLink: "",
        }
      ]
    }
  }
  getComplete(data){
    this.setState({
      banners: data
    });
  }
  render () {
    return (
      <div className="categoryBanner">
        <div className="row">
        {this.state.banners.map((banner) =>
          <Category src={banner.bannerURL} alt="male" href={banner.bannerLink} text={banner.bannerLink}/>
        )}
        </div>
      </div>
    );
  }
}

export default CategoryBanner;
