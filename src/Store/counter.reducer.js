var initialState = {
    Count:0
}
function counterReducer(state = initialState,action){
    if(action.type === 'INC'){
        return {...state,count:state.Count+1}
    }
    if(action.type === 'DEC'){
        return {...state,count:state.Count-1}
    }
    if(action.type === 'RESET'){
        return {...state,count:state.Count=0}
    }
    return state
}
export default counterReducer