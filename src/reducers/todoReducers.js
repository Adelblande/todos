export default function todos(state = [], action) {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {
        id: Math.random(),
        texto: action.texto
      }]
      
    default:
      return state;
  }
}