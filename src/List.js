import React, { Component } from 'react';
import Task from './Task';
import './Task.css';
import AddTask from './AddTask';
import './AddTask.css';
import TaskInput from './TaskInput';
import './TaskInput.css';
//import PropTypes from 'prop-types';

class List extends Component {
  render() {
    // const {showInput} = this.state;
    const {listId, name, handleSave, showInput, toggleInput} = this.props;

    const tasks = this.props.tasks.map((task, id) => { // todo: replace map by 'filter'? 
      return <Task key={task.id} {...task} listId={listId} onDelete={this.props.onDelete} />
    }); 
    
    return (
      <div className={`list ${name}`}>
        <h1>{name} <i className="fas fa-angle-down"></i></h1>

        {showInput? 
          <TaskInput
            listId={listId} 
            name={name} 
            onSave={handleSave}
            onClose={() => toggleInput(listId)} 
          /> : 
          <AddTask 
            onClick={() => toggleInput(listId)} 
          />}

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