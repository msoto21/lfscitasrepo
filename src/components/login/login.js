import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import  { NavLink } from 'react-router-dom';
import './login.css';
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { setName } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate ();

  const dispatch = useDispatch();
  const [ userName, setUserName ] = useState('');

  const handleChange = e => setUserName(e.target.value);

  const handleClick = () => {
    dispatch(setName(userName));
    setUserName('');
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    const name = e.target[0].value;
    navigate('/');
    // e.target[0].value = '';
    // setUserName(username.value)
    // const name = userName.value;
    // setName(name);
  }

  return (
    <>
      <div className="tmp-container">
        <div className="form-wrap">
          <h1>Login</h1>
          {/* <h2>Introduzca los datos</h2> */}
          <Formik
              initialValues={{
                  username: '',
                  password: ''
              }}

              validate={(values) => {
                      let errors = {}

                      if (!values.username)
                          errors.username = "El Usuario es requerido!"

                      if (!values.password)
                          errors.password = "El Password es requerido!"

                      return errors;
                  }
              }

              onSubmit={(values, { resetForm }) => {
                  console.log(values);
                  resetForm();
              }}
          >
              {({ errors }) => (
                  <Form onSubmit={submitHandler}> 
                      <div className="form-group">
                          <label htmlFor="username">Usuario</label>
                          <Field id="username" name="username" placeholder="Usuario" onChange={handleChange} type="text" value={userName} />
                          <ErrorMessage name="username" component={() => <div>{errors.username}</div>} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Field id="password" name="password" placeholder="Password" type="password" />
                          <ErrorMessage name="password" component={() => <div>{errors.password}</div>} />
                      </div>
                      {/* <button className="btn-guardar" type="submit">Log in</button> */}
                      <button className='btn-nuevo' type="submit" onClick={handleClick}>Log in</button>
                  </Form>
              )}
          </Formik>
        </div>
      </div>
    </>
)}

// // export default Info
// const mapStateToProps = (state) => {
//   return{
//     name: state.name
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setName: (name) => dispatch(setName(name))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;