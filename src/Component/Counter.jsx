import React from "react";
import { connect } from "react-redux ";

function Counter (props){
    return (
        <div className="container"> 
            <h1>Counter:{props.counterReducer.Count}</h1>
            <button onClick={()=>{props.dispatch({type:'INC'})}}>Increament</button>
            <button onClick={()=>{props.dispatch({type:'DEC'})}}>Decreament</button>
            <button onClick={()=>{props.dispatch({type:'RESET'})}}>Reset</button>
        </div>
    )
}
export default connect((store)=>{return store})(Counter)