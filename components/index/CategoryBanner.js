import Category from './Category';

const CategoryBanner = () => (
  <div className="categoryBanner">
    <div className="row">
      <Category src='/static/images/index/male.jpg' alt="male" href="#" text="مردانه"/>
      <Category src='/static/images/index/kids.jpg' alt="male" href="#" text="بچه گانه"/>
      <Category src='/static/images/index/female.jpg' alt="male" href="#" text="زنانه"/>
    </div>
  </div>
);

export default CategoryBanner;
