import React, { useEffect } from "react";
import Form from "./componenst/Form";
import { useDispatch, useSelector } from "react-redux";
import { register, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const registerData = (data) => {
    console.log(data);
    dispatch(register(data));
  };
  useEffect(() => {
    if (status === "sucess") {
      dispatch(setStatus(null));
      navigate("/login");
    }
  }, [status]);

  return (
    <>
      <Form type="Register" userData={registerData} />
    </>
  );
};

export default Register;
