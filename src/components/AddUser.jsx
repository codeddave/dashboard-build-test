import { Form, Formik } from "formik";
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
      className="modal-bg-color border bg-blue-200 shadow-xl p-6 transform transition-all w-full md:max-w-2xl opacity-100 overflow-x-hidden overflw-y-scroll fixed z-50 tracking-wider  scroll "
    >
      <Formik>{() => <Form></Form>}</Formik>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore
      ullam vitae sapiente odit nesciunt, perspiciatis cupiditate, officia magni
      nihil distinctio consectetur dignissimos, corporis laborum? Placeat facere
      rem laudantium amet?
    </section>
  );
};

export default AddUser;
