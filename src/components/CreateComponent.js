import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create(props) {
  const navigate = useNavigate();
  
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const updateForm = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        phoneNumber: userInfo.phoneNumber,
        email: userInfo.email,
      }),
    };

    fetch("http://localhost:1433/create", requestOptions)
      .then((res) => res.json())
      .then(
        (data) => {
          if (data != null) {
            navigate("/");
          } else {
            navigate("/create");
          }
        },
        (error) => {}
      );
  };

  return (
    <>
    <h1 class="text-center fw-bold">Create User</h1>
    <div class="container">
      <form onSubmit={submitForm}> 
        <div class="form-group row">
          <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={updateForm}
              class="form-control"
            ></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={updateForm}
              class="form-control"
            ></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="phoneNumber" class="col-sm-2 col-form-label">Phone Number</label>
          <div class="col-sm-10">
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={updateForm}
              class="form-control"
            ></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="text"
              name="email"
              id="email"
              onChange={updateForm}
              class="form-control"
            ></input>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      </div>
    </>
  );
}

export default Create;
