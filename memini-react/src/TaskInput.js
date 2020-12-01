import React, { Component } from 'react';
import './TaskInput.css';

const categoryColors = {
    cat1: "#d81b60", 
    cat2: "#c0ca33", 
    cat3: "#a79b8e", 
    cat4: "#0b8043", 
    cat5: "#9e69af",
    cat6: "#f6bf26"
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
            category: 0,
            selectedCategoryColor: '#a79b8e'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    handleSubmit(listId, e) {
        e.preventDefault();
        // save all values currently in form
        this.props.onSave(listId, {...this.state});
        // clear form
        this.setState({
            title: '',
            category: 0,
            selectedCategoryColor: '#a79b8e'
          })        
    }

    handleCategoryChange(cat, e) {
        this.setState({selectedCategoryColor: categoryColors["cat"+cat]})
        this.setState({[e.target.name]: +e.target.value});
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    // getCategoryName(cat) {
    //     return categories[cat]
    // }

    render() {
        //const {name} = this.props;
        const {title, category, selectedCategoryColor} = this.state;
        const {listId, onClose} = this.props;
        return (
            <div className="input-area">

                <form className='add-task-form' onSubmit={(e) => this.handleSubmit(listId, e)}>

                    <div className="input-head">
                        <div className="input-category">
                            <label className="container">                
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat4`} 
                                    value="4"
                                    checked={category===4}
                                    onChange={(e) => this.handleCategoryChange(4, e)}
                                />
                                <span className="checkmark checkmark-cat4"></span>
                            </label>
                            <label className="container">
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat2`} 
                                    value="2"
                                    checked={category===2}
                                    onChange={(e) => this.handleCategoryChange(2, e)}
                                /> 
                                <span className="checkmark checkmark-cat2"></span>
                            </label> 
                            <label className="container">                
                                <input className="checkmark-cat6"
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat6`} 
                                    value="6"
                                    checked={category===6}
                                    onChange={(e) => this.handleCategoryChange(6 ,e)}
                                />
                                <span className="checkmark checkmark-cat6"></span>
                            </label>                           
                            <label className="container">                
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat3`} 
                                    value="3"
                                    checked={category===3}
                                    onChange={(e) => this.handleCategoryChange(3 ,e)}
                                />
                                <span className="checkmark checkmark-cat3"></span>
                            </label>
                            <label className="container">
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat1`} 
                                    value="1"
                                    checked={category===1}
                                    onChange={(e) => this.handleCategoryChange(1, e)}
                                />
                                <span className="checkmark checkmark-cat1"></span>

                            </label>                            
                            <label className="container">                
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat5`} 
                                    value="5"
                                    checked={category===5}
                                    onChange={(e) => this.handleCategoryChange(5, e)}
                                />
                                <span className="checkmark checkmark-cat5"></span>
                            </label> 

                            <span>{/*this.getCategoryName(category)*/}</span>
                        </div>    
                        <div className="close-input" onClick={onClose}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="selected-category" style={{backgroundColor: selectedCategoryColor}}></div>
                    
                    <input 
                        type="text" 
                        name="title" 
                        value={title}
                        placeholder="Add title"  
                        onChange={this.handleChange} 
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default TaskInput;