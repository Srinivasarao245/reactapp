import React, { useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Student(){
    var studentForm = useFormik({
                        initialValues:{
                            firstname:'',
                            lastname:'',
                            age:'',
                            gender:'',
                            fathername:'',
                            mothername:'',
                        },
                            validationSchema:Yup.object({
                                firstname:Yup.string().min(3,"minimum mudu letters kavali").required("must fill firstname"),                    
                                lastname:Yup.string().min(3,"minimum mudu letters kavali").required("must fill lastname"),
                                age:Yup.number().required("must fill age"),
                                gender:Yup.string().required("must select gender"),
                                fathername:Yup.string().min(3,"minimum mudu letters kavali").required("must fill fathername"),
                                mothername:Yup.string().min(3,"minimum mudu letters kavali").required("must fill mothername"),
                                course:Yup.string().required("must select course"),
                        }),
                 onSubmit:(values)=>{ console.log(values) }
    })
    useEffect(()=>{console.log(studentForm.touched)})
    return ( 
    <div className="container">
        {console.log(studentForm)}
        <b>Student Details</b>
        <form onSubmit={studentForm.handleSubmit}>
            FirstName:-<input type="text" {...studentForm.getFieldProps('firstname')} />  <br />          
            <span>{studentForm.touched.firstname && studentForm.errors.firstname}</span> 
            <br />
            LastName:-<input type="text" name="lastname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} /> <br/>
            <span>{studentForm.touched.lastname && studentForm.errors.lastname}</span> 
            <br />
            Age:-<input type="text" name="age" {...studentForm.getFieldProps('age')} /> <br/>
            <span>{studentForm.touched.age && studentForm.errors.age}</span> 
            <br />
            FatherName:-<input type="text" {...studentForm.getFieldProps('fathername')} /> <br/>
            <span>{studentForm.touched.fathername && studentForm.errors.fathername}</span> 
            <br />
            MotherName:-<input type="text" {...studentForm.getFieldProps('mothername')} /> <br/>
            <span>{studentForm.touched.mothername && studentForm.errors.mothername}</span> 
            <br />
            Gender:- <br />
            <input type="radio" {...studentForm.getFieldProps('gender')} value="male" /> :Male &nbsp;
            <input type="radio" {...studentForm.getFieldProps('gender')} value="female" /> :FeMale &nbsp;
            <input type="radio" {...studentForm.getFieldProps('gender')} value="others" /> :Others
            <br />
            <span>{studentForm.touched.gender && studentForm.errors.gender}</span> 
            <br />
            Courses:- <br />
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="java" />:-Java
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="angular" />:-Angular
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="redux" />:-Redux
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="html" />:-Html
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="css" />:-CSS
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="python" />:-Python
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="corejava" />:-CoreJava
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="javafullstack" />:-JavaFullStack
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="phythonfullstack" />:-PythonFullStack
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="mongodb" />:-MongoDB
            <input type="checkbox" {...studentForm.getFieldProps('techs')} value="react" />:-React
            <br />
            <span>{studentForm.touched.gender && studentForm.errors.gender}</span> 
            <br />
            <button>Register</button>
        </form>
    </div>
    ) }
export default Student