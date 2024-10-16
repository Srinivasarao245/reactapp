var initialState = {
    todos: ['Get new bike','Pay Rent','Goto Toor','Get Veggies']
}
function todoReducer(state = initialState,action){
    if (action.type === 'ADD_TODO'){
        return { ...state,todos:[...state.todos,action.payload] }
    }
    return state
}
export default todoReducer