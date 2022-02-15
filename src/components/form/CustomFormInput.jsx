const CustomFormInput = ({
  type = "text",
  placeholder,
  form: { touched, errors },
  field,
  title,
}) => {
  return (
    <section className="mb-3">
      <>
        <label htmlFor={field.name} className="text-sm ">
          {title}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          {...field}
          className="py-2 mt-3 w-full bg-blue-100 rounded pl-2 outline-none text-gray-700"
        />
        {errors[field.name] && touched[field.name] ? (
          <span className="text-red-700">{errors[field.name]}</span>
        ) : null}
      </>
    </section>
  );
};

export default CustomFormInput;
