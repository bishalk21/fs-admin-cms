import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import fewaStoreApi from "../api/fewaStoreApi";
import OtpCard from "../components/card/OtpCard";

const SignupOtpVerification = () => {
  const { email } = useParams();
  let navigate = useNavigate();

  const signupOtpHandler = async (otp) => {
    const enteredOtp = parseInt(otp);
    try {
      const response = await fewaStoreApi.post(
        "/auth/administrator/signup/otp-verification",
        {
          email: email,
          otp: enteredOtp,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 201) {
        toast.success(response.data.msg);
        navigate("../", { replace: true });
      } else {
        toast.warn(response.data.msg);
        navigate("../auth/signin", { replace: true });
      }
    } catch (error) {
      toast.error(error.message);
      navigate("../auth/signin", { replace: true });
    }
  };
  return (
    <>
      <OtpCard email={email} onOtpVerification={signupOtpHandler} />
    </>
  );
};

export default SignupOtpVerification;
