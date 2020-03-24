import React, {Component} from 'react';

class TodoForm extends Component{

constructor(props){
    super(props);
    this.state={
        task:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
}

handleChange(evt){
    this.setState({
        [evt.target.name]:evt.target.value
    })
}
submitForm(event){
    event.preventDefault();
    this.props.addToDo(this.state);
    this.setState({task:""});
}
    render(){
        return(
            <form onSubmit={this.submitForm}>
                <label htmlFor='newTodo'>New Todo:</label>
                <input
                type="text"
                id="newTodo"
                name="task"
                value={this.state.newTodo}
                onChange={this.handleChange}
                placeholder='New Todo'
                />
                <button>Add New toDo</button>
            </form>
        )
    }
}

export default TodoForm;