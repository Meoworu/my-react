const defaultState = {
    todos:[1,2,3,4,5]
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
        return {
            todos: [...state.todos,state.todos.length+1]     
        };
    case 'UP':
        return {
            todos: [...state.todos].slice(0,-1)
        };
    default: 
      return state;
  }
};
export default reducer;