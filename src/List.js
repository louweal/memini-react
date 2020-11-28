import React, { Component } from 'react';
import Task from './Task';
import './Task.css';
import AddTask from './AddTask';
import './AddTask.css';
import TaskInput from './TaskInput';
import './TaskInput.css';
import PlaceTasks from './PlaceTasks';
import './PlaceTasks.css';
//import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const {listId, name, tasks, handleSave, handlePlace, showInput, toggleInput} = this.props;

    const tasksComponents = tasks.filter(t => t.listId === listId).map((task) => {
      return <Task 
        key={task._id}
        {...task} 
        listId={listId} 
        onDelete={this.props.onDelete}
        onSelect={this.props.onSelect}
        changeCategory={this.props.changeCategory} 
      />
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
          {tasksComponents}
        </ul>

        <PlaceTasks listId={listId} tasks={tasks} onClick={handlePlace} />  
      </div>
    );
  }
}

export default List;