import React, {Component} from 'react';
import PropTypes from 'prop-types'
class Task extends Component {
    static defaultProps = {
        onDelete() {}
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) { //updates task title
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        const {id, title, category, onDelete} = this.props;
        
        return (
            <li className="task">
                <div className="task-head">
                    <div className={`task-category ${category}`}>
                    </div>
                    <div className="task-actions">
                        <span className="remove-task" onClick={() => {onDelete(id)}}><i className="fas fa-check task-done"></i></span>
                        <span className="remove-task" onClick={() => {onDelete(id)}}><i className="fas fa-trash-alt task-delete"></i></span>
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