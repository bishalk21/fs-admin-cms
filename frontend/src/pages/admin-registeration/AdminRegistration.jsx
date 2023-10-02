import { Link } from "react-router-dom";
import CustomInputField from "../../components/custom-input-field/CustomInputField";
import { useState } from "react";
import { postNewAdminUser } from "../../helper/axiosHelper";

const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }

    const result = await postNewAdminUser(rest);
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
      autoComplete: "off",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "**********",
      name: "confirmPassword",
      required: true,
      autoComplete: "off",
    },
  ];

  return (
    <div className="p-10 w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-base w-full text-center">
        New Admin Registration
      </h1>
      {response.message && (
        <div
          className={`${
            response.status === "success"
              ? "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              : "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          }`}
          role="alert"
        >
          <strong className="font-bold">{response.message}</strong>
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </div>
      )}
      <form
        className="flex flex-col p-2.5 gap-2 w-2/4 shadow-md"
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

        <p className="text-end w-full pr-4">
          Already have an account?{" "}
          <Link
            className="underline text-blue-600 font-bold text-base"
            to="/admin-login"
          >
            Admin Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AdminRegistration;
