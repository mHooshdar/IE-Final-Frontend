import React, { Component } from 'react';
import styles from './Category.module.css';

class Category extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.item + " col-lg-4 col-md-4 col-sm-4 col-xs-12"}>
        <a href ={this.props.href}>
          <img src={this.props.src} alt="male" className={styles.itemImages}/>
          <div className={styles.itemText}>{this.props.text}</div>
        </a>
      </div>
    );
  }
}

export default Category;
