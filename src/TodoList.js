import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as todoActions from './actions/todoAction'
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props){
    super(props)

    console.log(props)
  }
  render(){
    return (
      <div>
        <ul>
          <li> Lista de todos</li>
        </ul>

        <input type="text" />
        <button>Add Todo</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);



export default connect(null, mapDispatchToProps)(TodoList);