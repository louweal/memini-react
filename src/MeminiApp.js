import React, { Component } from 'react';
import './MeminiApp.css';
import List from './List';
import './List.css';
// import Task from './Task';
// import './Task.css';
// import TaskInput from './TaskInput';
// import './TaskInput.css';

// const todaysTasks = [{
//   id: 0,
//   title: 'React',
//   category: 'web'
// },
// {
//   id: 1,
//   title: 'Opruimen',
//   category: 'home'
// },
// {
//   id: 2,
//   title: 'UWV bellen',
//   category: 'appointments'
// }
// ]
// const tomorrowsTasks = [{
//   id: 0,
//   title: 'Hometrainer',
//   category: 'sports'
// },
// {
//   id: 1,
//   title: 'Wachten op BOL',
//   category: 'home'
// },
// {
//   id: 2,
//   title: 'React state',
//   category: 'web'
// }
// ]

// const upcommingTasks = [];
// const somedayTasks = [];

class MeminiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: ["Today", "Tomorrow", "Upcoming", "Someday"]
    }
  }
  
  // handleInput(e) {
  //   this.setState((prevState, props) => {
  //     console.log(this.state);
  //     return { title: e.target.value }
  //   }
  //   )}

  render() {
    
    const lists = this.state.lists.map((listname, index) => (
      <List 
        key={index}
        name={listname} 
      />
    ));  
      return (
        <section className="lists">
          {lists}
        </section>
    );
  }
}

export default MeminiApp;
