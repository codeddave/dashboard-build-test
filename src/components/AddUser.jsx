import { Field, Form, Formik } from "formik";
import React from "react";

const AddUser = () => {
  return (
    <section
      style={{
        height: "65vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="modal-bg-color bg-white border bg-blue shadow-xl p-6 transform transition-all w-full md:max-w-2xl opacity-100  overflow-x-hidden overflw-y-scroll fixed z-50 tracking-wider  scroll "
    >
      <p className="text-4xl font-bold">ADD USER</p>
      <p className="text-2xl font-bold pt-2.5">1/2 Personal Details</p>
      <Formik>
        {() => (
          <Form>
            <Field />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddUser;
