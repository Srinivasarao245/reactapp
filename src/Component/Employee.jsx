import React from "react";
import { Field, Formik, Form, ErrorMessage  } from "formik";
import * as Yup from 'yup';

function Employee() {
    var initialValues = {
        firstname:'',
        lastname:'',
        age:'',
        fathername:'',
        mothername:'',
        city:'',
        qualification:'',  }
    var onSubmit = function(values){console.log(values)}    
    var validationSchema = Yup.object({
        firstname:Yup.string().min(3,"minimum mudu letters kavali").required("firstname not entered"),
        lastname:Yup.string().required("lastname not entered"),
        age:Yup.string().required("age is not entered"),
    })
    return (
    <div className="container">
        <b>Employee Form</b>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >      
            {(ed)=>{ console.log(ed)
                return <Form >
                    <div>
                        FirstName:-<Field name="firstname" className={ed.errors.firstname ? "form-control is-invalid" : "form-control is-valid" } ></Field> 
                        <ErrorMessage name="firstname" component="div" ></ErrorMessage> 
                    </div>
                    <div>
                        LastName:-
                        <Field name="lastname" ></Field>
                        <ErrorMessage name="lastname" component="div" ></ErrorMessage> </div> 
                    <div>
                        Age:-<Field name="age" ></Field>
                        <ErrorMessage name="age" component="div" ></ErrorMessage> </div>
                    <div>FatherName:-<Field name="fathername" ></Field></div> 
                    <div>MotherName:-<Field name="mothername" ></Field> </div>
                    City:-<Field name="city" ></Field> <br />
                    Qualification:-<Field name="qualification" ></Field> <br />
                    <button disabled={!ed.dirty && !ed.isValid}>Add Employee</button>
                </Form>
            }}
        </Formik>
    </div>
)}
export default Employee