import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.scss"
import axios from "axios";
import { useState } from "react";
const BicycleAddForm = ({getAllBicycles}) => {
  const [image, setImage] = useState(null)
  const handleCreateBicycle = async (values)=>{
    console.log(values);
    const formDataForServer = new FormData();
    formDataForServer.append('title', values.title);
    formDataForServer.append('description', values.description);
    formDataForServer.append('price', values.price);
    formDataForServer.append('discount', values.discount);
    formDataForServer.append('image',image);
    await axios.post("http://localhost:5234/bicycle",formDataForServer)
    getAllBicycles()
  }
  return (
    <Formik
      initialValues={{
        image: "",
        title: "",
        description: "",
        price: "",
        discount: "",
      }}
      validationSchema={Yup.object({
        image: Yup.mixed(),
        title: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        description: Yup.string()
          .max(150, "Must be 150 characters or less")
          .required("Required"),
        price: Yup.number()
          .min(10, "Must be 10 or more")
          .required("Required"),
        discount: Yup.number()
                  .min(5,"Must be 5 or more")
                  .max(95,"Must be 95 or less")
                  .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          handleCreateBicycle(values)
          resetForm()
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="bicycle-form">
        <div className="form-group">
          <label htmlFor="image">Image</label>
         <input type="file"  onChange={(e)=>setImage(e.target.files[0])}/>
          <div className="error">
          <ErrorMessage name="image" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" className="form-control" />
          <div className="error">
          <ErrorMessage name="title" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field name="description" type="text" className="form-control" />
          <div className="error">
          <ErrorMessage name="description" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <Field name="price" type="number" className="form-control" />
          <div className="error">
          <ErrorMessage name="price" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <Field name="discount" type="number" className="form-control" />
          <div className="error">
          <ErrorMessage name="discount" />
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default BicycleAddForm;
