import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Countries(){
    var [a,setA] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3/all")
        .then(res => res.json())
        .then((data)=>{setA((prev)=>{return[...prev,...data]})})
    },[])
    return (<div className="container text-info">
                <h1>Countries</h1> 
                <div className="d-flex flex-wrap">
                    <ul className="w-25">
                        {a.map((b)=>{
                        return(<Link to={`countryDetails/${b.name.common}`} >
                        <li>{b.name.common}</li>  </Link>             
                        )})}
                    </ul> 
                    <div className="w-60">
                        <Outlet></Outlet>
                    </div> 
                </div>   
    </div>)
}
export default Countries