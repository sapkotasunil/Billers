import React, { useEffect } from "react";
import Form from "./componenst/Form";
import { useDispatch, useSelector } from "react-redux";
import { login, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import username from "../../../global/logedUser";

const Login = () => {
  const navigate = useNavigate();
  const { status, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loginData = (data) => {
    dispatch(login(data));
  };
  const loggedUser = JSON.parse(localStorage.getItem("logged"));
  const storeInformation = JSON.parse(
    localStorage.getItem(`${username}storeInformation`)
  );
  if (!loggedUser && !storeInformation) {
    useEffect(() => {
      if (status === "sucess") {
        dispatch(setStatus(null));
        navigate("/storebillform");
      }
    }, [status]);
  }
  if (loggedUser && !storeInformation) {
    useEffect(() => {
      navigate("/storebillform");
    }, []);
  }
  if (loggedUser && storeInformation) {
    useEffect(() => {
      navigate("/billmaking");
    }, []);
  }

  return (
    <>
      <Form type="login" userData={loginData} />
    </>
  );
};

export default Login;
