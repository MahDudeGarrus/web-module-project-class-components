// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from '../components/Todo';

const ToDoList = props => {

    const handleClick = () => {
        props.handleClearTask()
    }

    return (
        <div>
            {props.toDos.map(task => (
                <Todo key={task.id} handleTaskToggle={props.handleTaskToggle} task={task} />
            ))}
            <button onClick={handleClick}>
                Task Finished!
            </button>
        </div>
    )
}

export default ToDoList;