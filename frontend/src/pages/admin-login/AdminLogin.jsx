import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInputField from "../../components/custom-input-field/CustomInputField";
import { Link } from "react-router-dom";
import { loginAdminUserAction } from "./admin-reducer-action/adminUserAction";

const AdminLogin = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const { adminUsers } = useSelector((state) => state.adminUsers);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // const emailRef = useRef();
  // const passwordRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(loginAdminUserAction(form));
  };

  return (
    <div className="w-full h-[80vh] flex-col flex items-center justify-center">
      <h1 className="text-lg font-bold">Welcome!</h1>
      <form
        onSubmit={handleOnSubmit}
        className="w-2/4 flex flex-col items-start justify-center border-b shadow-lg p-4"
      >
        <CustomInputField
          label="Email"
          type="email"
          required
          name="email"
          placeholder="Enter your Email"
          onChange={handleOnChange}
        />
        <CustomInputField
          label="password"
          type="password"
          required
          name="password"
          placeholder="Enter your password"
          onChange={handleOnChange}
        />

        {/* <label htmlFor="">Email Address</label>
        <input type="text" placeholder="Enter your Email Address" value={emailRef} />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" value={passwordRef} /> */}
        <button
          type="submit"
          className="mt-4 cursor-pointer w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Login
        </button>
        <h1 className="w-full pt-4 text-right font-bold text-base">
          Forgot Password?{" "}
          <Link className="text-blue-700 underline" to="/reset-password">
            Reset
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default AdminLogin;
