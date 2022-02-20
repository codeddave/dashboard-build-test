import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addUserSchema } from "./definitions/yup/addUserSchema";
import CustomFormInput from "./form/CustomFormInput";
import { createUser } from "./user/userSlice";
const AddUser = ({ closeModal }) => {
  const dispatch = useDispatch();
  return (
    <section
      style={{
        height: "90vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="modal-bg-color text-gray-600 bg-white border bg-blue shadow-xl p-6 transform transition-all w-full md:max-w-2xl opacity-100  overflow-x-hidden overflw-y-scroll fixed z-50 tracking-wider  scroll "
    >
      <section className="shadow h-auto p-6">
        <p className="text-4xl font-bold">ADD USER</p>
        <p className="text-2xl font-bold pt-2.5 pb-5">1/2 Personal Details</p>
        <Formik
          validationSchema={addUserSchema}
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
          }}
          onSubmit={(values) => {
            dispatch(createUser(values));
            closeModal();
          }}
        >
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
                title="First Name"
              />
              <Field
                component={CustomFormInput}
                placeholder="Last Name"
                name="lastName"
                title="Last Name"
              />{" "}
              <Field
                component={CustomFormInput}
                placeholder="Gender"
                name="gender"
                title="Gender"
              />{" "}
              <Field
                component={CustomFormInput}
                placeholder="Email Address"
                name="email"
                title="Email Address"
              />{" "}
              <Field
                component={CustomFormInput}
                placeholder="Date of Birth"
                name="dateOfBirth"
                title="Date of Birth"
              />
              <button
                type="submit"
                className="border p-2 w-full bg-blue-400 text-white rounded"
              >
                {" "}
                submit{" "}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
};

export default AddUser;
