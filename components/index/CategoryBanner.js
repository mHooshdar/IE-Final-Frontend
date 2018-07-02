import React, { Component } from 'react';

import Female from './assets/female.jpg';
import Male from './assets/male.jpg';
import Kids from './assets/kids.jpg';

import Category from './Category';

class CategoryBanner extends Component {
  render() {
    return (
      <div className="categoryBanner">
        <div className="row">
          <Category src={Male} alt="male" href="#" text="مردانه"/>
          <Category src={Kids} alt="male" href="#" text="بچه گانه"/>
          <Category src={Female} alt="male" href="#" text="زنانه"/>
        </div>
      </div>
    );
  }
}

export default CategoryBanner;
