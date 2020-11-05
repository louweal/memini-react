import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) { //updates task title
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        const {title} = this.props;
        const {category} = this.props;

        return (
            <li className="task">
                <div className="task-head">
                    <div className={`task-category ${category}`}>
                    </div>
                    <div className="task-actions">
                        <i className="fas fa-check task-done"></i>
                        <i className="fas fa-trash-alt task-delete"></i>
                    </div>
                </div>
                <input
                    type="text"
                    name="title" 
                    defaultValue={title}
                    onChange={this.handleChange}
                 />
          </li>
        )
    }
}

export default Task;