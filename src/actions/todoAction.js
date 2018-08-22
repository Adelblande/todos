export function addTodo(texto) {
  return {
    type: 'ADD_TODO',
    texto
  }
}