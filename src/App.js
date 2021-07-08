import React from 'react';
import ReactDOM from 'react-dom';

// component imports
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

const toDos = [
  {
    task: "Yoga; Does watching the video count as exercise?",
    id: 101,
    completed: false,
  },
  {
    task: "Make breakfast",
    id: 102,
    completed: false,
  },
  {
    task: "What about second breakfast?",
    id: 103,
    completed: false,
  },
  {
    task: "Pay dem bills",
    id: 104,
    completed: false,
  },
  {
    task: "Buy another Udemy lesson that I will not do",
    id: 105,
    completed: false,
  },
  {
    task: "Play Fire Emblem for countless hours",
    id: 106,
    completed: false,
  },
  {
    task: "Skip lunch",
    id: 107,
    completed: false,
  },
  {
    task: "Nap the whole afternoon away",
    id: 108,
    completed: false,
  },
  {
    task: "Drink coffee until you get jitters",
    id: 109,
    completed: false,
  },
  {
    task: "Wonder about how you did nothing (again) today",
    id: 110,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Constructor with state
  constructor(){
    super();
    this.state = {
      toDos: toDos
    }
  }

  handleAddTask =(task) =>{
    const tasks = {
      task: task,
      id:this.state.toDos.length,
      completed: false
    }

    const newTasks = [...this.state.toDos, tasks]
    this.setState({
      toDos: newTasks
    })
  }

  handleTaskToggle = (taskId) => {
    this.setState({
      toDos: this.state.toDos.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  }

  handleClearTask = () => {
    const newTasks = this.state.toDos.filter(task => {
      return !task.completed
    })

    this.setState({
      toDos: newTasks
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm handleAddTask={this.handleAddTask}/>
        </div>
        <ToDoList handleClearTask={this.handleClearTask} handleTaskToggle={this.handleTaskToggle} toDos={this.state.toDos}/>
      </div>
    );
  }
}

export default App;
