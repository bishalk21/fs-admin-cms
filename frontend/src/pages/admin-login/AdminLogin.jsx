import { useRef, useState } from "react";
import CustomInputField from "../../components/custom-input-field/CustomInputField";

const AdminLogin = () => {
  const [form, setForm] = useState({});

  // const emailRef = useRef();
  // const passwordRef = useRef();

  return (
    <div className="w-full min-h-screen flex-col flex items-center justify-center">
      <form className="w-full flex flex-col items-center justify-center">
        <CustomInputField
          label="Email"
          type="email"
          required
          name="email"
          placeholder="Enter your Email"
        />
        <CustomInputField
          label="password"
          type="password"
          required
          name="password"
          placeholder="Enter your password"
        />

        {/* <label htmlFor="">Email Address</label>
        <input type="text" placeholder="Enter your Email Address" value={emailRef} />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" value={passwordRef} /> */}
      </form>
      <h1 className="text-end font-bold text-base">Don't have an account?</h1>
    </div>
  );
};

export default AdminLogin;
