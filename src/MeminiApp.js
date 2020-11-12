import React, { Component } from 'react';
import './MeminiApp.css';
import List from './List';
import './List.css';

class MeminiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        id: 0,
        listId: 0,
        title: "Water the plants",
        category: 1,
        selected: false
      },
      {
        id: 2,
        listId: 2,
        title: "Buy flowers",
        category: 5,
        selected: false
      },
      {
        id: 3,
        listId: 0,
        title: "Bookmark Memini",
        category: 2,
        selected: false
      },
      {
        id: 4,
        listId: 3,
        title: "Plant a tree",
        category: 3,
        selected: false
      },
    ],
      showInputs: [false, false, false, false],
      nextTaskId: 6
    }
    this.handleSave = this.handleSave.bind(this);
    this.handlePlace = this.handlePlace.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
  }
 
  handleSave(listId, task) {
    const id = this.state.nextTaskId;
    this.setState({nextTaskId: id+1});
    const newTask = {...task, id, listId, selected: false};
    const tasks = [...this.state.tasks, newTask];
    this.setState({tasks});

    this.toggleInput(listId);
  }

  handlePlace(listId) {
    const tasks = this.state.tasks.map((task, id) => {
      if(task.selected) {
        task.listId = listId;
        task.selected = false;
      }
      return task;
    })
    this.setState({tasks});
  }

  // helper function for updating a task
  updateTask(task, taskIndex) {
    // copy the state
    const tasks = [...this.state.tasks];
    // remove old task from copied state
    tasks.splice(taskIndex, 1);
    // insert the updated task at its index position
    tasks.splice(taskIndex, 0, task);
    // update state
    this.setState({tasks});
  }

  onSelect(id) {
    // find selected task in state list
    var task = this.state.tasks.find(x => x.id === id);
    // find index of the selected task
    var taskIndex = this.state.tasks.findIndex(x => x.id === id);
    // toggle selection state
    task.selected = !task.selected;

    this.updateTask(task, taskIndex); 

  }

  changeCategory(id) {
    // find selected task in state list
    var task = this.state.tasks.find(x => x.id === id);
    // find index of the selected task
    var taskIndex = this.state.tasks.findIndex(x => x.id === id);
    // update task-category to the next category
    task.category = (task.category+1)%7; // modulo number of categories +1 (categories are 1-indexed)

    this.updateTask(task, taskIndex);
  }

  onDelete(id) {
    const tasks = this.state.tasks.filter(t => t.id !== id);
    this.setState({tasks});
  }

  toggleInput(listId) {
    const showInputs = [...this.state.showInputs];
    showInputs[listId] = !showInputs[listId]; 
    this.setState({showInputs});  
  }
  
  render() {
    const listNames = ["Today", "Tomorrow", "Upcoming", "Someday"];
    const lists = listNames.map((listname, index) => (
      <List 
        key={index}
        listId={index}
        name={listname}
        tasks={this.state.tasks}
        showInput={this.state.showInputs[index]}
        onDelete={this.onDelete}
        onSelect={this.onSelect}
        handleSave={this.handleSave}
        handlePlace={this.handlePlace}
        toggleInput={this.toggleInput}
        changeCategory={this.changeCategory}
      />
    ));  
      return (

        <div>
          <header className="logo">
            <a href="landing.html">
              <div className="logo-wrapper">
                <div className="logo-check">
                  <div className="check-div2"><span className="check-span2"></span></div>
                  <div className="check-div1"><span className="check-span1"></span></div>
                </div>      
                <br/>
                <svg width="207" height="45" viewBox="0 0 207 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5312 39.3125H5.14844V11.3984C5.14844 9.94531 5.03125 8.9375 4.79688 8.375C4.5625 7.76562 4.21094 7.39062 3.74219 7.25C2.99219 7.0625 2.38281 6.82812 1.91406 6.54688C1.49219 6.26562 1.28125 5.79688 1.28125 5.14062C1.28125 3.92187 2.19531 3.3125 4.02344 3.3125H9.85938C11.6406 3.3125 12.5312 4.10938 12.5312 5.70312V7.10938C12.9531 6.54688 13.4453 6.00781 14.0078 5.49219C15.8359 3.71094 18.2266 2.79687 21.1797 2.75C24.3672 2.75 26.7812 3.85156 28.4219 6.05469C28.8906 6.80469 29.3359 7.69531 29.7578 8.72656C30.2734 7.78906 30.9297 6.875 31.7266 5.98438C33.7422 3.82813 36.2969 2.75 39.3906 2.75C42.5781 2.75 44.9688 3.875 46.5625 6.125C48.2031 8.375 49.0234 11.9844 49.0234 16.9531V39.3125H41.7109V17.1641C41.7109 13.9297 41.3828 11.6562 40.7266 10.3438C40.1172 9.03125 39.1562 8.375 37.8438 8.375C36.2031 8.375 34.4688 9.80469 32.6406 12.6641C31.7969 13.9766 31.1875 15.4531 30.8125 17.0938V39.3125H23.4297V17.1641C23.4297 13.8828 23.125 11.6094 22.5156 10.3438C21.9062 9.03125 20.9688 8.375 19.7031 8.375C17.9688 8.42188 16.1641 9.85156 14.2891 12.6641C13.4453 14.0234 12.8594 15.5469 12.5312 17.2344V39.3125ZM61.8203 22.4375C61.9609 25.625 62.9922 28.4141 64.9141 30.8047C66.8828 33.1953 69.4844 34.5547 72.7188 34.8828C73.7969 35.0234 74.9922 34.9766 76.3047 34.7422C77.6172 34.5078 78.8594 34.1094 80.0312 33.5469C81.1562 33.0312 82 32.8672 82.5625 33.0547C83.125 33.2422 83.5938 33.6406 83.9688 34.25C84.25 34.8125 84.2266 35.3984 83.8984 36.0078C83.5703 36.6172 83.125 37.0859 82.5625 37.4141C81.3438 38.1641 79.7266 38.7734 77.7109 39.2422C75.6953 39.7109 73.4453 39.875 70.9609 39.7344C66.2734 39.4531 62.2656 37.6016 58.9375 34.1797C55.6562 30.7578 54.0156 25.9766 54.0156 19.8359C54.0156 14.3984 55.4922 10.1328 58.4453 7.03906C61.4453 3.94531 65.4297 2.39844 70.3984 2.39844C74.6172 2.39844 78.0859 3.82813 80.8047 6.6875C83.5234 9.5 84.8828 13.7891 84.8828 19.5547V22.4375H61.8203ZM61.8203 17.4453H77.3594C77.3594 13.9297 76.6328 11.3516 75.1797 9.71094C73.7734 8.07031 72.1328 7.25 70.2578 7.25C68.0547 7.25 66.1094 8.1875 64.4219 10.0625C62.7812 11.8906 61.9141 14.3516 61.8203 17.4453ZM97.8906 39.3125H90.5078V11.3984C90.5078 9.94531 90.3906 8.9375 90.1562 8.375C89.9219 7.76562 89.5703 7.39062 89.1016 7.25C88.3516 7.0625 87.7422 6.82812 87.2734 6.54688C86.8516 6.26562 86.6406 5.79688 86.6406 5.14062C86.6406 3.92187 87.5547 3.3125 89.3828 3.3125H95.2188C97 3.3125 97.8906 4.10938 97.8906 5.70312V7.10938C98.3125 6.54688 98.8047 6.00781 99.3672 5.49219C101.195 3.71094 103.586 2.79687 106.539 2.75C109.727 2.75 112.141 3.85156 113.781 6.05469C114.25 6.80469 114.695 7.69531 115.117 8.72656C115.633 7.78906 116.289 6.875 117.086 5.98438C119.102 3.82813 121.656 2.75 124.75 2.75C127.938 2.75 130.328 3.875 131.922 6.125C133.562 8.375 134.383 11.9844 134.383 16.9531V39.3125H127.07V17.1641C127.07 13.9297 126.742 11.6562 126.086 10.3438C125.477 9.03125 124.516 8.375 123.203 8.375C121.562 8.375 119.828 9.80469 118 12.6641C117.156 13.9766 116.547 15.4531 116.172 17.0938V39.3125H108.789V17.1641C108.789 13.8828 108.484 11.6094 107.875 10.3438C107.266 9.03125 106.328 8.375 105.062 8.375C103.328 8.42188 101.523 9.85156 99.6484 12.6641C98.8047 14.0234 98.2188 15.5469 97.8906 17.2344V39.3125ZM149.992 39.3125H142.539V11.3984C142.539 9.94531 142.398 8.9375 142.117 8.375C141.883 7.76562 141.531 7.39062 141.062 7.25C140.312 7.01562 139.703 6.75781 139.234 6.47656C138.812 6.19531 138.602 5.77344 138.602 5.21094C138.602 3.94531 139.516 3.3125 141.344 3.3125H147.32C149.102 3.3125 149.992 4.10938 149.992 5.70312V39.3125ZM150.484 -8.07812C150.484 -6.71875 149.992 -5.54688 149.008 -4.5625C148.07 -3.625 146.922 -3.15625 145.562 -3.15625C144.156 -3.15625 142.961 -3.625 141.977 -4.5625C141.039 -5.54688 140.57 -6.71875 140.57 -8.07812C140.57 -9.39062 141.039 -10.5156 141.977 -11.4531C142.961 -12.4375 144.156 -12.9297 145.562 -12.9297C146.922 -12.9297 148.07 -12.4375 149.008 -11.4531C149.992 -10.5156 150.484 -9.39062 150.484 -8.07812ZM165.461 39.3125H158.148V11.3984C158.148 9.94531 158.055 8.96094 157.867 8.44531C157.727 7.88281 157.398 7.50781 156.883 7.32031C156.133 7.03906 155.5 6.78125 154.984 6.54688C154.469 6.3125 154.211 5.84375 154.211 5.14062C154.211 3.92187 155.125 3.3125 156.953 3.3125H162.789C164.57 3.3125 165.461 4.10938 165.461 5.70312V7.8125C166.164 6.875 167.008 6.03125 167.992 5.28125C170.148 3.59375 172.797 2.75 175.938 2.75C179.031 2.75 181.562 3.85156 183.531 6.05469C185.547 8.21094 186.555 11.9375 186.555 17.2344V39.3125H179.102V17.0234C179.102 13.7891 178.656 11.5859 177.766 10.4141C176.922 9.19531 175.82 8.58594 174.461 8.58594C172.352 8.63281 170.266 9.94531 168.203 12.5234C167.031 13.9297 166.117 15.6875 165.461 17.7969V39.3125ZM202.164 39.3125H194.711V11.3984C194.711 9.94531 194.57 8.9375 194.289 8.375C194.055 7.76562 193.703 7.39062 193.234 7.25C192.484 7.01562 191.875 6.75781 191.406 6.47656C190.984 6.19531 190.773 5.77344 190.773 5.21094C190.773 3.94531 191.688 3.3125 193.516 3.3125H199.492C201.273 3.3125 202.164 4.10938 202.164 5.70312V39.3125ZM202.656 -8.07812C202.656 -6.71875 202.164 -5.54688 201.18 -4.5625C200.242 -3.625 199.094 -3.15625 197.734 -3.15625C196.328 -3.15625 195.133 -3.625 194.148 -4.5625C193.211 -5.54688 192.742 -6.71875 192.742 -8.07812C192.742 -9.39062 193.211 -10.5156 194.148 -11.4531C195.133 -12.4375 196.328 -12.9297 197.734 -12.9297C199.094 -12.9297 200.242 -12.4375 201.18 -11.4531C202.164 -10.5156 202.656 -9.39062 202.656 -8.07812Z" fill="#252326"/>
                </svg>
              </div>
            </a>
            
         </header>

          <section className="lists">
            {lists}
          </section>
        </div>
    );
  }
}

export default MeminiApp;
