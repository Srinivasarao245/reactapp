import React from "react";
import { Formik } from "formik";
function Employee() {
    return (
    <div className="container">
        <b>Employee Form</b>
        <Formik 
        initialValues = {{
            firstname:'',
            laststname:'',
            age:'',
            fathername:'',
            mothername:'',
            city:'',
            qualification:'',  }}
            onSubmit = {(values)=>{console.log(values)}} >      
            {(ed)=>{
                return <form action="" onSubmit={ed.handleSubmit}>
                    FirstName:-<input type="text" {...ed.getFieldProps('firstname')} /> <br />
                    LastName:-<input type="text" {...ed.getFieldProps('laststname')} /> <br />
                    Age:-<input type="text" {...ed.getFieldProps('age')} /> <br />
                    FatherName:-<input type="text" {...ed.getFieldProps('fathername')} /> <br />
                    MotherName:-<input type="text" {...ed.getFieldProps('mothername')} /> <br />
                    City:-<input type="text" {...ed.getFieldProps('city')} /> <br />
                    Qualification:-<input type="text" {...ed.getFieldProps('qualification')} /> <br />
                    <button>Add Employee</button>
                </form>
            }}
        </Formik>
    </div>
)}
export default Employee