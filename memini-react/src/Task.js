import React, {Component} from 'react';
import PropTypes from 'prop-types'
class Task extends Component {
    static defaultProps = {
        onDelete() {},
        onSelect() {},
        changeCategory() {}
    }

    static propTypes = {
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired,
        changeCategory: PropTypes.func.isRequired
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
        const {_id, title, category, selected, onDelete, onSelect, changeCategory} = this.props;
        const selectedClass = selected ? "task-selected": "";

        return (
            <li className={`task ${selectedClass}`} onClick={() => {onSelect(_id)}} >
                <div className="task-head">
                    <div className={`task-category cat${category}`} onClick={(e) => {e.stopPropagation(); changeCategory(_id)}}>
                    </div>
                    <div className="task-actions">
                        <span className="remove-task" onClick={(e) => {e.stopPropagation(); onDelete(_id)}}><i className="fas fa-check task-done"></i></span>
                        <span className="remove-task" onClick={(e) => {e.stopPropagation(); onDelete(_id)}}><i className="fas fa-trash-alt task-delete"></i></span>
                    </div>
                </div>
                <input
                    type="text"
                    name="title" 
                    defaultValue={title}
                    onClick={(e) => {e.stopPropagation()}}
                    onChange={this.handleChange}
                 />
          </li>
        )
    }
}

export default Task;