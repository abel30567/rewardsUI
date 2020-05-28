import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import '../style/components/Category.css';
export default class Category extends Component {
  constructor() {
    super();
    this.state = {};

  }
  componentDidMount() {
    console.log(this.props.rewards);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    return (
      <div id={this.props._id} className='Category col-md-2'>
        <h4 className='subtitle'>{this.props.title}</h4>
        {this.props.rewards.map((reward,i) => (
          <Droppable
            key={'cat' + i}
            droppableId={'Reward' + reward._id +'-' + this.props._id}>
            {(provided, snapshot) => (
              <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className='col-md-12'>
                <Draggable draggableId={'Category-' + i+ '-'+this.props.title} index={i}>
                  {provided => (         
                    <div 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    onClick={() => console.log(provided)}
                    //provided.data-rbd-draggable-id  gets the row
                    // this.props._id gets the column
                    // style={{ borderColor: reward.style[this.props._id]}}
                    className={'col-md-12 rewardContainer ' + (reward.style[this.props._id] ? 'lightContainer' : 'ghostContainer')}>
                      <h5 >{reward.title}</h5>
                      <a onClick={() => this.props.remove(provided.draggableProps['data-rbd-draggable-id'],this.props._id)} className='btn closeOut'>X</a>
                    </div>        
                  )}      
                </Draggable>   
                          {provided.placeholder}
              </div>
            )}
            
          </Droppable>
        ))}
      </div>
    );
  }
};
