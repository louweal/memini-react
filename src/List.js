import React, { Component } from 'react';
import Task from './Task';
import './Task.css';
import AddTask from './AddTask';
import './AddTask.css';
import TaskInput from './TaskInput';
import './TaskInput.css';
import PropTypes from 'prop-types';

class List extends Component {
  static propTypes = {
    name: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.string) 
  };

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      nextTaskId: 1,
      showInput: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }


  handleSave(task) {
    this.setState((prevState, props) => {
      const newTask = {...task, id: this.state.nextTaskId};
      return {
        nextTaskId: prevState.nextTaskId + 1,
        tasks: [...this.state.tasks, newTask],
        showInput: false
      }
    });
  }

  onDelete(id) {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks});
  }

  render() {
    const {showInput} = this.state;
    const {name} = this.props;
    const tasks = this.state.tasks.map((task, id) => {
      return <Task key={task.id} {...task} onDelete={this.onDelete} />
    }); 

    return (
      <div className={`list ${name}`}>
        <h1>{name} <i className="fas fa-angle-down"></i></h1>

        {showInput? <TaskInput 
          name={name} 
          onSave={this.handleSave}
          onClose={() => {this.setState({showInput: false})}} /> : <AddTask onClick={() => {this.setState({showInput: true})}} />}

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