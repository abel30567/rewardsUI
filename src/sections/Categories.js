import React, { Component } from 'react';
import Category from '../components/Category';

// Non-React
import '../style/sections/Categories.css';
export default class Categories extends Component {
  constructor() {
    super();
    this.state = {};

  }
  render() {
    return (
      <div className='Categories col-md-9'>
        <div className='col-md-12 titleContainer'>
          <h3 className='title'>Categories</h3>
        </div>
        {this.props.categories.map((category,indy) => (
          <Category
          key={category._id}
          _id={'Category' + indy}
          title={category.title}
          rewards={this.props.rewards}
          remove={(row,col) => this.props.remove(row,col)}
          />
        ))}
      </div>
    );
  }
};
