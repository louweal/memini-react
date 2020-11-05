import React, { Component } from 'react';
import Task from './Task';
import './Task.css';
import TaskInput from './TaskInput';
import './TaskInput.css';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
        nextTaskId: 1,
    }
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(task) {
    this.setState((prevState, props) => {
      const newTask = {...task, id: this.state.nextTaskId};
      return {
        nextRecipeId: prevState.nextTaskId + 1,
        tasks: [...this.state.tasks, newTask],
      }
    });
  }

  static propTypes = {
    name: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired // task is State instead of prop ... 
  };

  render() {
    const {name} = this.props;
    const tasks = this.state.tasks.map((task, id) => {
      return <Task key={id} {...task} />
    }); 


    return (
      <div className={`list ${name}`}>
        <h1>{name} <i className="fas fa-angle-down"></i></h1>

          <div className="add-area">
            <span>+</span>
          </div>

          <TaskInput name={name} onSave={this.handleSave} />

        <ul className="tasks">
          {tasks}
        </ul>

          <div className="place-area">
            <span>Place selected task(s) here</span>
          </div>
      </div>
    );
  }
}

export default List;