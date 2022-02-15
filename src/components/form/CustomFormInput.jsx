const CustomFormInput = ({
  type = "text",
  placeholder,
  form: { touched, errors },
  field,
  title,
}) => {
  return (
    <section className="mb-3.5">
      <>
        <label htmlFor={field.name} className="text-sm ">
          {title}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          {...field}
          className="py-2 mt-1.5 w-full border bg-blue-50 rounded pl-2 outline-none text-gray-700"
        />
        {errors[field.name] && touched[field.name] ? (
          <span className="text-red-700">{errors[field.name]}</span>
        ) : null}
      </>
    </section>
  );
};

export default CustomFormInput;
