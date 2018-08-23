import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from './actions/todoAction';


class TodoList extends Component {
  constructor(props){
    super(props)

    console.log(props)
  }
  
  state = {
    newTodoTexto: ''
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoTexto);
    this.setState({ newTodoTexto: '' });
  }

  render(){
    return (
      <div>
        <ul>
          {
            this.props.todos.map(todo => (
              <li key={todo.id}>{ todo.texto }</li>
            ))
          }
        </ul>

        <input 
          type="text" 
          value={this.state.newTodoTexto} 
          onChange={(e) => this.setState({ newTodoTexto: e.target.value})}
        />
        
        <button onClick={this.addNewTodo}>Add Tarefa</button>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);