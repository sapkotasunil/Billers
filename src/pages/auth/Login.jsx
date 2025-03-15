import React, { useEffect } from "react";
import Form from "./componenst/Form";
import { useDispatch, useSelector } from "react-redux";
import { login, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const loginData = (data) => {
    dispatch(login(data));
  };

  // Get the username dynamically instead of importing
  const loggedUser = JSON.parse(localStorage.getItem("logged"));
  const username = loggedUser?.username || null;
  const storeInformation = JSON.parse(
    localStorage.getItem(`${username}storeInformation`)
  );

  useEffect(() => {
    if (status === "success") {
      dispatch(setStatus(null));
    }

    if (!loggedUser) {
      navigate("/login");
    } else if (!storeInformation) {
      navigate("/storebillform");
    } else {
      navigate("/billmaking");
    }
  }, [loggedUser]);

  return <Form type="login" userData={loginData} />;
};

export default Login;
