import React, { Component } from 'react';
import Reward from '../components/Reward';
import { Droppable } from 'react-beautiful-dnd';
import '../style/sections/Rewards.css';
export default class Rewards extends Component {
  constructor() {
    super();
    this.state = {};

  }
  render() {
    return (
      <div className='Rewards col-md-3'>
        <div className='col-md-12 titleContainer'>
          <h3 className='title'>Rewards</h3>
        </div>
        <Droppable
          droppableId='MainRewards'>
            {provided => (
              <div 
              ref={provided.innerRef}
              {...provided.dropableProps}
              className='col-md-12'>
                {this.props.rewards.map((reward,indy) => (
                <Reward
                key={indy}
                _id={'Reward' + reward._id}
                index={indy}
                title={reward.title}
                />
              ))}
              {provided.placeholder}
              </div>   
            )}
          </Droppable>
      </div>
    );
  }
};
