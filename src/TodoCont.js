import React from 'react';
import { connect } from 'react-redux';

const TodoCont = (props) => (
  <h2>Total de Tarefas: { props.todos.length } </h2>
)

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoCont)