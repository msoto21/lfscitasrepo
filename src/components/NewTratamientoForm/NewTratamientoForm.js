import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import './NewTratamientoForm.css';


const NewTratamientoForm = () => {
  return (
    <>
      <div className="tmp-container">
        <div className="form-wrap">
          <h1>Nuevo Tratamiento</h1>
          <h2>Introduzca los datos</h2>
          <Formik
              initialValues={{
                  nombre: '',
                  descripcion: '',
                  precio: '',
              }}

              validate={(values) => {
                      let errors = {}

                      if (!values.nombre)
                          errors.nombre = "Nombre es un campo requerido!"

                      if (!values.descripcion)
                          errors.descripcion = "Descripción es un campo requerido!"

                      if (!values.precio)
                        errors.precio = "Precio es un campo requerido!"
                      return errors;
                  }
              }

              onSubmit={(values, { resetForm }) => {
                  console.log(values);
                  resetForm();
              }}
          >
              {({ errors }) => (
                  <Form>
                      <div className="form-group">
                          <label htmlFor="nombre">Nombre: </label>
                          <Field id="nombre" name="nombre" placeholder="Nombre" type="text" />
                          <ErrorMessage name="nombre" component={() => <div>{errors.nombre}</div>} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="descripcion">Dirección: </label>
                          <Field id="descripcion" name="descripcion" placeholder="Descripción" as="textarea" />
                          <ErrorMessage name="descripcion" component={() => <div>{errors.descripcion}</div>} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="precio">Precio: </label>
                          <Field id="precio" name="precio" placeholder="Precio" type="text" />
                          <ErrorMessage name="precio" component={() => <div>{errors.precio}</div>} />
                      </div>  
                      <button className="btn-guardar" type="submit">Enviar</button>
                  </Form>
              )}
          </Formik>
        </div>
      </div>
        
    </>
)}

export default NewTratamientoForm;