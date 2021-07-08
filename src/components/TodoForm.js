import { throwStatement } from '@babel/types';
import React from 'react';

class ToDoForm extends React.Component{
    //Constructor with state
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    // handles the changes in the input field
    formChanges = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    //handles events in the submission process
    submitForm = (event) => {
        event.preventDefault()
        this.props.handleAddItem(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    //render
    render() {
        return(
            <form onSubmit={this.submitForm}>
                <input type='text' name='toDoItem' value={this.state.inputValue} onChange={this.formChanges}/>
                <button>Another Thing To Do!</button>
            </form>
        )
    }
}

export default ToDoForm;