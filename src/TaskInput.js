import React, { Component } from 'react';
import './TaskInput.css';

const categories = {
    cat1: "Webdev", 
    cat2: "People", 
    cat3: "Home" , 
    cat4: "Appointments" , 
    cat5: "Exercise",
    cat6: "Relax"
}

class TaskInput extends Component {
    static defaultProps = {
        onClose() {},
        onSave() {}
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // save all values currently in form
        this.props.onSave({...this.state});
        // clear form
        this.setState({
            title: '',
            category: '',
          })        
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    getCategoryName(cat) {
        return categories[cat]
    }

    render() {
        const {name} = this.props;
        const {title, category} = this.state;

        return (
            <div className="input-area">
                <form className='add-task-form' onSubmit={this.handleSubmit}>
                    <label className="container">
                        <input 
                            type="radio" 
                            name="category" 
                            id={`${this.props.name}-cat1`} 
                            value="cat1"
                            checked={category==="cat1"}
                            onChange={this.handleChange}
                        />
                        <span className="checkmark checkmark-cat1"></span>

                    </label>
                    <label className="container">
                        <input 
                            type="radio" 
                            name="category" 
                            id={`${this.props.name}-cat2`} 
                            value="cat2"
                            checked={category==="cat2"}
                            onChange={this.handleChange}
                        /> 
                        <span className="checkmark checkmark-cat2"></span>
                    </label>                    
                    <label className="container">                
                        <input 
                            type="radio" 
                            name="category" 
                            id={`${this.props.name}-cat3`} 
                            value="cat3"
                            checked={category==="cat3"}
                            onChange={this.handleChange}
                        />
                        <span className="checkmark checkmark-cat3"></span>
                    </label>
                    <label className="container">                
                        <input 
                            type="radio" 
                            name="category" 
                            id={`${this.props.name}-cat4`} 
                            value="cat4"
                            checked={category==="cat4"}
                            onChange={this.handleChange}
                        />
                        <span className="checkmark checkmark-cat4"></span>
                    </label>
                    <label className="container">                
                        <input 
                            type="radio" 
                            name="category" 
                            id={`${this.props.name}-cat5`} 
                            value="cat5"
                            checked={category==="cat5"}
                            onChange={this.handleChange}
                        />
                        <span className="checkmark checkmark-cat5"></span>
                    </label> 
                    <label className="container">                
                        <input 
                            type="radio" 
                            name="category" 
                            id={`${this.props.name}-cat6`} 
                            value="cat6"
                            checked={category==="cat6"}
                            onChange={this.handleChange}
                        />
                        <span className="checkmark checkmark-cat6"></span>
                    </label>
                    <span>{this.getCategoryName(category)}</span>                                                           
                    <br />
                    <input 
                    type="text" 
                    name="title" 
                    value={title}
                    placeholder="What to do?"  
                    onChange={this.handleChange} />
                    
                    <button type="submit">Add task</button>
                </form>
            </div>
        )
    }
}

export default TaskInput;