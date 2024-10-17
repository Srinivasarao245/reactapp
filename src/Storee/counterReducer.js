var initialState = {
    count:0
}
function counterReducer(state=initialState,action){
   if (action.type==='INC'){
    return {...state,count:state.count++}
   } 
   if (action.type==='DEC'){
    return {...state,count:state.count--}
   } 
   if (action.type==='RESET'){
    return {...state,count:state.count= 0 }
   } 
   return state
}
export default counterReducer;