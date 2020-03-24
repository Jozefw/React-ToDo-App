import React, {Component} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            ToDos:[{task:'get it done'},{task:'hurry up and wait'}]
        }
        this.makeTodo = this.makeTodo.bind(this);
    }
    makeTodo(newTask){
        this.setState({
            ToDos:[...this.state.ToDos,newTask]
        })
    }
    render(){
        const singleTask = this.state.ToDos.map(item=>(
            <Todo  task={item.task}>

            </Todo>
        ))
        return(
            <div>
            <h1>Here is a HoneyDew list:</h1>
            <ul>
                {singleTask}
            </ul>
            <TodoForm addToDo={this.makeTodo}></TodoForm>
            </div>
        )
    }
}

export default TodoList;