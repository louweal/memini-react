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
            category: '',
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
            category: '',
            selectedCategoryColor: '#a79b8e'
          })        
    }

    handleCategoryChange(cat, e) {
        this.setState({selectedCategoryColor: categoryColors[cat]})
        this.setState({[e.target.name]: e.target.value});
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
                                    value="cat4"
                                    checked={category==="cat4"}
                                    onChange={(e) => this.handleCategoryChange('cat4',e)}
                                />
                                <span className="checkmark checkmark-cat4"></span>
                            </label>
                            <label className="container">
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat2`} 
                                    value="cat2"
                                    checked={category==="cat2"}
                                    onChange={(e) => this.handleCategoryChange('cat2',e)}
                                /> 
                                <span className="checkmark checkmark-cat2"></span>
                            </label> 
                            <label className="container">                
                                <input className="checkmark-cat6"
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat6`} 
                                    value="cat6"
                                    checked={category==="cat6"}
                                    onChange={(e) => this.handleCategoryChange('cat6',e)}
                                />
                                <span className="checkmark checkmark-cat6"></span>
                            </label>                           
                            <label className="container">                
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat3`} 
                                    value="cat3"
                                    checked={category==="cat3"}
                                    onChange={(e) => this.handleCategoryChange('cat3',e)}
                                />
                                <span className="checkmark checkmark-cat3"></span>
                            </label>
                            <label className="container">
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat1`} 
                                    value="cat1"
                                    checked={category==="cat1"}
                                    onChange={(e) => this.handleCategoryChange('cat1',e)}
                                />
                                <span className="checkmark checkmark-cat1"></span>

                            </label>                            
                            <label className="container">                
                                <input 
                                    type="radio" 
                                    name="category" 
                                    id={`${this.props.name}-cat5`} 
                                    value="cat5"
                                    checked={category==="cat5"}
                                    onChange={(e) => this.handleCategoryChange('cat5',e)}
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