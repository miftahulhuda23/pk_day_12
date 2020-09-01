import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={register}
          className="form-control"
        />
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          ref={register}
          className="form-control"
        />
        <span className="badge badge-danger">
          {errors.email && errors.email.message}
        </span>
        <br />
        <label htmlFor="age">Age :</label>
        <input
          type="text"
          name="age"
          id="age"
          ref={register}
          className="form-control"
        />
        <div className="text-center pt-3">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
