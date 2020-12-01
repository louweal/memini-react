import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTask extends Component {
    static defaultProps = {
        onClick() {}
    }

    static propTypes = {
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className="add-area" onClick={this.props.onClick}>
                <span><i className="fas fa-plus"></i></span>
            </div>
        )
    }
}

export default AddTask; 