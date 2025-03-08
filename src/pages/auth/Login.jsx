import React, { useEffect } from "react";
import Form from "./componenst/Form";
import { useDispatch, useSelector } from "react-redux";
import { login, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loginData = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (status === "sucess") {
      dispatch(setStatus(null));
      navigate("/storebillform");
    }
  }, [status]);

  return (
    <>
      <Form type="login" userData={loginData} />
    </>
  );
};

export default Login;
