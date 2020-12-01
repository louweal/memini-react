import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PlaceTasks extends Component {
    static defaultProps = {
        onClick() {}
    }

    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        const {listId, tasks} = this.props;
        
        const numSelectedTasks = tasks.filter(t => t.selected).length; 

        var placeMessage = (numSelectedTasks===1) ? "Place selected task here": "Place selected tasks (" + numSelectedTasks + " tasks) here"; 
        var showPlaceMessage = (numSelectedTasks>0) ? placeMessage: "Select tasks to move here"; 

        return (
            <div className="place-area" onClick={() => this.props.onClick(listId)} >
                <span>
                    {showPlaceMessage}
                </span>
            </div>            
        )
    }
} 

export default PlaceTasks;