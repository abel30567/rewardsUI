import React, { Component } from 'react';
import Rewards from '../sections/Rewards';
import Categories from '../sections/Categories';

import { DragDropContext } from 'react-beautiful-dnd';
// Non-React Components
import data from '../data/point';
import '../style/screens/Categorize.css';
export default class Categorize extends Component {
  constructor() {
    super();
    this.state = {
      reward:[],
    };

  }
  componentDidMount() {
    this.assignStyle();
  }
  onDragEnd = result => {
    console.log('TODO: make sure that rewards stay in lane');
    const { source, destination } = result;
    console.log('res',result);
    if (destination === null) {
      return;
    } else {
      let datasource = this.state.reward;
      let reward = source.index;
      let type = source.droppableId;
      let category = destination.droppableId.split('-')[1];
      let change = datasource[reward].style[category];
      if (type === 'MainRewards') {
        console.log('Moving rewards from main');
        console.log('category is', category);
        console.log('styles to change',change);
        datasource[reward].style[category] = true;
        console.log('changed style', datasource[reward].style);
      } else {
        // category 2 category transition
        // if element already in destination category return 
        // if element not in destination category, show
        let srcCat = type.split('-')[1];
        let srcShow = datasource[reward].style[srcCat];
        if (srcShow && change) {
          return;
        }
        if (srcShow && !change) {
          datasource[reward].style[category] = true;
          datasource[reward].style[srcCat] = false;
        }
      }
    }    
  };

  assignStyle() {
    const catLen = data.Categories.length;
    let rewardData = [];
    data.Rewards.forEach(reward => {
      let style = {};
      for (let i = 0; i < catLen; i++) {
        style[`Category${i}`]= false;
      }
      reward['style']=style;
      rewardData.push(reward);
    });
    this.setState({reward: rewardData})
  }
  remove(row, col) {
    console.log(row,col);
    let rewardIndex = row.split('-')[1];
    console.log('reward index', rewardIndex);
    let datasource = this.state.reward;
    console.log(datasource[rewardIndex]);
    datasource[rewardIndex].style[col] = false;
    console.log(datasource[rewardIndex]);
    this.setState({ reward: datasource });
  }
  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <div className='Categorize'>
          <Rewards rewards={data.Rewards} />
          <Categories 
          categories={data.Categories} 
          rewards={this.state.reward}
          remove={(row,col) => this.remove(row,col)}
          />
        </div>
      </DragDropContext>      
    );
  }
};