import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../style/components/Reward.css';

export default class Reward extends Component {
  constructor() {
    super();
    this.state = {};

  }
  render() {
    return (
      <div id={this.props._id} className='Reward col-md-12'>
      <Draggable draggableId={this.props._id} index={this.props.index}>
        {provided => (         
          <div 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='col-md-12 rewardContainer'>
            <h5>{this.props.title}</h5>
          </div>        
        )}      
      </Draggable>      
      </div>
    );
  }
};
