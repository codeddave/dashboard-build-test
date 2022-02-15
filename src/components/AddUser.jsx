import { Field, Form, Formik } from "formik";
import React from "react";
import CustomFormInput from "./form/CustomFormInput";

const AddUser = () => {
  return (
    <section
      style={{
        height: "65vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="modal-bg-color text-gray-600 bg-white border bg-blue shadow-xl p-6 transform transition-all w-full md:max-w-2xl opacity-100  overflow-x-hidden overflw-y-scroll fixed z-50 tracking-wider  scroll "
    >
      <section className="shadow h-full p-6">
        <p className="text-4xl font-bold">ADD USER</p>
        <p className="text-2xl font-bold pt-2.5 pb-5">1/2 Personal Details</p>
        <Formik>
          {() => (
            <Form>
              <Field
                component={CustomFormInput}
                placeholder="Title"
                name="title"
                title="Title"
              />
              <Field
                component={CustomFormInput}
                placeholder="First Name"
                name="firstName"
                title="First name"
              />
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
};

export default AddUser;
