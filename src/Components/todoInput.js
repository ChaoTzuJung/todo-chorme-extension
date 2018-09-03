import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class todoInput extends Component {
    state = {
        input: '',
    }
    render() {
        return (
            <TextField
                className="add-todo-input"
                type="text"
                value={this.state.input}
                onChange={e=>this.setState({input: e.target.value})}
                label="Add New Todo"
                onKeyPress={e =>{
                    e.key === "Enter" && (
                        this.props.submitHandler(this.state.input),
                        this.setState({input: ''})
                    )
                }}
            />
        );
    }
}

export default todoInput;