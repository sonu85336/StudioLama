import React, { useEffect, useState } from "react";
import classes from "../Css/Step1.module.css";
import { formSchema } from "../schema";
import { useFormik } from "formik";
import { ErrorSharp } from "@mui/icons-material";
const initialValues = {
  name: "",
  email: "",
  mobile: "",
   
  date_of_birth: "",
  weight:"",
  height:"",
  born:'',
};
function Step1(props) {

  const [weeks,setWeeks] = useState(false)
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
     validationSchema:formSchema,
      onSubmit: (values, action) => {
        console.log(values);
        props.nextpageHandler()
    localStorage.setItem('value',JSON.stringify(values))
      },
    });
    const weeksHandler = () =>{
      setWeeks(true)
    }
     
  return (
    <div>
      <div className="container">
        <div>
          <h5 className="py-1  ">
            Get your questions answered by our consultants from the comfort of
            your home
          </h5>
        </div>
        <div className="row py-3">
          <form onSubmit={ handleSubmit} >
            {/* name */}
            <div className="form-group mb-2">
              <label htmlFor="name">Child's name</label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Alice"
                className="form-control"
                
              value={values.name}
              onChange={handleChange}
            onBlur={handleBlur}
              />
              {errors.name && touched.name ? (<p  style={{color:'red'}}>{errors.name}</p>):null}
            </div>
            {/* date of birth */}
            <div className="form-group mb-2">
              <label htmlFor="date_of_birth">Child's date of birth</label>

              <input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                placeholder="November 14, 2023"
                className="form-control"
                value={values.date_of_birth}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.date_of_birth&& touched.date_of_birth ? (<p  style={{color:'red'}}>{errors.date_of_birth}</p>):null}
            </div>
            {/* weeks */}
            <div className="mb-2">
              <p>Born at less than 37 weeks?</p>
              <div className="form-check">
                <input
                  type="radio"
                  name="weeks"
                  className="form-check-input"
                  id="No"
                  defaultChecked 

                  onBlur={handleBlur}
                  onClick={()=>setWeeks(false)}
                />
                <label htmlFor="NO" className="form-check-label">
                  No
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="Yes"
                  name="weeks"
                  className="form-check-input"
                  onBlur={handleBlur}
                  onClick={()=>weeksHandler()}
                />
                <label htmlFor="Yes" className="form-check-label">
                  Yes
                </label>
              </div>
            </div>
            {/* if Yes */}
            {weeks && (<div className="form-group mb-2">
              <label htmlFor="born">Born in weeks</label>
              <input
                type="number"
                name="born"
                id="born"
                
                className="form-control"
                
              value={values.born}
              onChange={handleChange}
            onBlur={handleBlur}
              />
              {errors.born&& touched.born? (<p  style={{color:'red'}}>{errors.born}</p>):null}
            </div>)}
            {/* weight */}
            <div className="form-group row mb-2">
              <div className="w-50">
                {" "}
                <label htmlFor="weight">Child's weight</label>
                <input type="number" name="weight" value={values.weight} onChange={handleChange} id="weight"className="form-control"
                  onBlur={handleBlur}></input>{" "}
              </div>

              <div className=" w-50 ">
                <label htmlFor="weight">Weight unit</label>

                <select className="form-control"  id="weight" name="weight" value={values.weight} onChange={handleChange}   onBlur={handleBlur}>
                  <option>kg</option>
                </select>
              </div>
            </div>

            {/* height */}
            <div className="form-group row mb-2">
              <div className="w-50">
                <label htmlFor="height">Child's height</label>

                <input type="number" id="height" name="height" value={values.height} onChange={handleChange} className="form-control"   onBlur={handleBlur}></input>
              </div>
              <div className="w-50">
                <label htmlFor="height">Height unit</label>

                <select className="form-control"  id="height" name="height"   onBlur={handleBlur} value={values.height} onChange={handleChange}>
                  <option>cm</option>
                </select>
              </div>
            </div>
            {/* email */}
            <div className="form-group mb-2">
              <label htmlFor="email">Email address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="james@gmail.com"
                className="form-control"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.email && touched.email ? (<p style={{color:'red'}}>{errors.email}</p>):null}
            </div>
            {/* mobile */}
            <div className="form-group  mb-2">
              <label htmlFor="mobile">Phone number</label>
              <div className="row">
                <div className="w-25">
                  <select className="form-control"   onBlur={handleBlur} name="mobile" >
                    <option>+91</option>
                  </select>
                </div>
                <div className="w-75">
                  <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    placeholder="number"
                    className="form-control"
                   value={values.mobile}
                   onChange={handleChange} 
                   onBlur={handleBlur}

                  />
                  {errors.mobile && touched.mobile ? (<p  style={{color:'red'}}>{errors.mobile}</p>):null}
                </div>
              </div>
            </div>
            {/* <button type="submit" > submit</button> */}
            {/* ************** */}
            <button type="submit" style={{width:'290px'}}   className="btn btn-primary btn-sm btn-block"   
              
            >Next</button> 
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step1;
