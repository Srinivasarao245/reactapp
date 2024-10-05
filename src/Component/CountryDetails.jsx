import React, { useEffect,useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function CountryDetails(){
    var a = useParams()
    var [ab,setAb] = useState({})
    useEffect(()=>{
        fetch(`https://restcountries.com/v3/name/${a.bname}`)
        .then(res=>res.json())
        .then(data=>{
            setAb({...data[0]}) })
    },[a.bname])
    return (<div className="container">
           <h1>{a.bname}CountryDetails</h1>
                <h1>{ab.population}</h1><br/>
                {/* <img src={ab.flags[0]} alt="" width="400px"/>            */}
    </div>)
}
export default CountryDetails