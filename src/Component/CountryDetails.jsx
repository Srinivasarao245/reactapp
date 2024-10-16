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
           <h1>CountryDetails:-{a.bname}</h1>
                <h1>Population:-{ab.population}</h1>
                <h1>Area:-{ab.area}</h1>
                <h1>Capital:-{ab.capital}</h1>
                <h1>Region:-{ab.region}</h1>
                <h1>Sub-Region:-{ab.subregion}</h1>
                {/* <img src={ab.flags[0]} alt="" width="400px"/>            */}
    </div>)
}
export default CountryDetails