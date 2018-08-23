export function addTodo(texto) {
  return dispatch => {
    setTimeout(function(){
      dispatch({type: 'ADD_TODO', texto})
    }, 3000)
  } 
}