import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
  handleAddGoal,
  handleDeleteGoal,
  toggleGoalAction
} from '../actions/goals';

class Goals extends React.Component {
  addItem = (e) => {
      e.preventDefault()

      this.props.dispatch(handleAddGoal(
          this.input.value,
          () => {() => this.input.value = ''}
      ))
  }

  removeItem = (goal) => {
      this.props.dispatch(handleDeleteGoal(goal))
  }

  toggleItem = (id) => {
      this.props.dispatch(toggleGoalAction(id))
  }
  render() {
      return (
          <div>
              <h1>Goals</h1>
              <input
              type="text"
              placeholder="Add Goal"
              ref = {(input) => this.input = input}
              />
              <button onClick={this.addItem}>Add Goal</button>
              <List
                  toggle={this.toggleItem}
                  items={this.props.goals}
                  remove={this.removeItem}
              />
          </div>
      )
  }
}

export default connect((state)=>(
  {goals: state.goals}
))(Goals)
