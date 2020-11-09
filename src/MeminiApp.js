import React, { Component } from 'react';
import './MeminiApp.css';
import List from './List';
import './List.css';

class MeminiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: ["Today", "Tomorrow", "Upcoming", "Someday"]
    }
  }

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
