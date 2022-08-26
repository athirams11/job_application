import Layout from "./Layout/layout";
import CreateUserDetails from "./CreateUserDetails/createUserDetails";
import UpdateUserDetails from "./UpdateUserDetails/updateUserDetails";
import { SplitScreen } from "./style";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isEmpty, isValidEmail, isValidPhoneNumber } from "../helper/validator";
import {
  updateUser,
  addUser,
  clearUser,
} from "../containers/userDetails/action";
import store from "../store";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const fields = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    job_title: "",
  };
  const job_titles = [
    "Frontend Developer",
    "WordPress Developer",
    "UI/UX Designer",
    "Support Engineer",
    "Graphic Designer",
  ];
  const [user, setUser] = useState(fields);
  const [page, setPage] = useState("");
  const [error, setError] = useState(JSON.parse(JSON.stringify(fields)));
  const navigate = useNavigate();
  useEffect(() => {
    if (state?.userReducer?.user?.message === "Done") {
      navigate("/success");
      window.location.reload();
      dispatch(clearUser());
    }
    console.log(state);
  });
  const dispatch = useDispatch();
  const state = store.getState();

  function onSubmit(event) {
    event.preventDefault();
    console.log(user);
    const applicationId = state?.userReducer?.user?.id || "new";
    setUser((user) => ({
      ...user,
      id: applicationId,
    }));
    const { job_title, ...addUserInputs } = user;

    if (validateForm()) {
      if (applicationId === "new") dispatch(addUser(addUserInputs));
      else {
        dispatch(updateUser({ id: applicationId, job_title }));
      }
    }
  }

  const handleChange = (e) => {
    console.log("event", e);
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function validateForm() {
    let checker = true;
    let error = JSON.parse(JSON.stringify(fields));
    if (isEmpty(user.name)) checker = error.name = "Name required !";
    if (isEmpty(user.email)) checker = error.email = "Email required !";
    else if (isValidEmail(user.email))
      checker = error.email = "Invalid email id!";
    if (isEmpty(user.phone)) checker = error.phone = "Phone number required !";
    else if (isValidPhoneNumber(user.phone))
      checker = error.phone = "Phone Number field should contain 10 digits!";
    if (isEmpty(user.gender)) checker = error.gender = "Gender required !";
    if (page === "next" && isEmpty(user.job_title))
      checker = error.job_title = "Job position required !";
    setError(error);
    return checker === true ? true : false;
  }

  function setNextPage(e) {
    if (validateForm()) {
      onSubmit(e);
      setPage("next");
    }
  }

  const userData = {
    job_titles,
    user,
    error,
    setPage,
    onSubmit,
    handleChange,
    setNextPage,
  };
  return (
    <SplitScreen>
      <div style={{ width: "60%" }}>
        <Layout />
      </div>
      <div style={{ width: "40%" }}>
        <div className="container" style={{ padding: "100px 50px" }}>
          {!page ? (
            <CreateUserDetails userData={userData} />
          ) : (
            <UpdateUserDetails userData={userData} />
          )}
        </div>
      </div>
    </SplitScreen>
  );
}
