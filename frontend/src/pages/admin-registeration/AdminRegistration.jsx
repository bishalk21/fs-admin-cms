import { Link } from "react-router-dom";
import CustomInputField from "../../components/custom-input-field/CustomInputField";
import { useState } from "react";

const AdminRegistration = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputFields = [
    {
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name: Bishal",
      name: "firstName",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name: Karki",
      name: "lastName",
      required: true,
    },
    {
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
      name: "email",
      required: true,
    },
    {
      label: "Phone",
      type: "number",
      placeholder: "Enter your phone number",
      name: "phone",
    },
    {
      label: "Enter Date of Birth",
      name: "dob",
      type: "date",
      required: true,
    },
    {
      label: "Address",
      type: "text",
      placeholder: "Enter your address",
      name: "address",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "***********",
      name: "password",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "**********",
      name: "confirmPassword",
      required: true,
    },
  ];

  return (
    <div className="p-10 w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-base w-full text-center">
        New Admin Registration
      </h1>
      <form
        className="flex flex-col p-2.5 gap-2 w-full"
        // onSubmit={handleOnSubmit}
      >
        <div className="flex justify-between flex-wrap items-center max-sm:flex-col max-sm:w-full max-sm:items-center gap-6 p-2.5 pb-4 w-full">
          {inputFields.map((field, i) => (
            <CustomInputField key={i} {...field} onChange={handleOnChange} />
          ))}
        </div>

        <button
          onClick={handleOnSubmit}
          type="submit"
          className="p-8 max-sm:w-full text-white max-sm:text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <p className="text-end w-full pr-4">
        Already have an account?{" "}
        <Link
          className="underline text-blue-600 font-bold text-base"
          to="/admin-login"
        >
          Admin Login
        </Link>
      </p>
    </div>
  );
};

export default AdminRegistration;
