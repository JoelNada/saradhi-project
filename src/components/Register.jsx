import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, ToastContainer, Toast } from "react-bootstrap";
import axios from "axios";
import "./register.css";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [resdata, setdata] = useState("");
  const [show, setShow] = useState(false);
  const [err, seterr] = useState("");
  const [iswhatsapp, setWhatsApp] = useState(false);
  const [isgurupetam, setGurupetam] = useState(false);
  const [islocation, setLocation] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data = {
      firstname: data.firstname,
      lastname: data.lastname,
      gmail: data.gmail,
      phonenumber: data.phonenumber,
      whatsappnumber: iswhatsapp ? data.whatsappnumber : data.phonenumber,
      gurupetam: isgurupetam ? data.gurupetam : null,
      home: islocation ? data?.home : null,
    };
    console.log(data);
    axios
      .post(`http://localhost:4000/addperson`, data)
      .then((res) => {
        console.log(res);
        setdata(res.data);
        setShow(true);
      })
      .catch((err) => {
        console.log(err.response);
        seterr(err?.response?.data);
      });
  };
  return (
    <div className="container">
      <Button
        style={{ float: "right" }}
        onClick={() => {
          navigate("/");
        }}>
        Back to login
      </Button>
      <h2>Register Here</h2>
      <h6>Your data was not found in Database, kindly register here.</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter Your First Name"
          className="form-control"
          {...register("firstname", {
            required: "**Please Enter your First Name",
          })}
        />
        {errors ? (
          <p style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
            {errors.firstname?.message}
          </p>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Enter Your Last Name"
          className="form-control"
          {...register("lastname", {
            required: "**Please Enter your Last Name",
          })}
        />
        {errors ? (
          <p style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
            {errors.lastname?.message}
          </p>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Enter Your Gmail"
          className="form-control"
          {...register("gmail", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors ? (
          <p style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
            {errors.gmail?.message}
          </p>
        ) : (
          ""
        )}
        <input
          type="number"
          placeholder="Enter your phone number"
          className="form-control"
          {...register("phonenumber", {
            required: "**Please Enter your PhoneNumber",
            pattern: {
              value: /^\d{10}$/,
              message: "Please enter a 10-digit phone number.",
            },
          })}
        />
        {errors ? (
          <p style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
            {errors.phonenumber?.message}
          </p>
        ) : (
          ""
        )}
        <br />
        <div
          className="d-flex flex-column align-items-start"
          style={{ width: "100%" }}>
          <p>Is WhatsApp same as your Phone Number ?</p>
          <div className="d-flex">
            <label className="form-check-label">
              Yes{" "}
              <input
                className="form-check-input"
                type="radio"
                name="option"
                onChange={() => {
                  setWhatsApp(false);
                }}
              />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <label className="form-check-label">
              No{" "}
              <input
                className="form-check-input"
                type="radio"
                name="option"
                onChange={() => {
                  setWhatsApp(true);
                }}
              />
            </label>
          </div>
        </div>
        <br />
        {iswhatsapp ? (
          <>
            <input
              type="number"
              placeholder="Enter WhatsApp number"
              className="form-control mb-4"
              {...register("whatsappnumber", {
                required: "**Please Enter your WhatsAppNumber",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please enter a 10-digit phone number.",
                },
              })}
            />
            {errors ? (
              <p
                style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
                {errors.whatsappnumber?.message}
              </p>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}

        <div
          className="d-flex flex-column align-items-start"
          style={{ width: "100%" }}>
          <p>Please Select any of your Location from below.</p>
          <div className="mb-2">
            <label className="form-check-label">
              Select GuruPetam{" "}
              <input
                className="form-check-input"
                type="radio"
                name="option"
                onChange={() => {
                  setGurupetam(true);
                  setLocation(false);
                }}
              />
            </label>
            &nbsp;&nbsp;&nbsp;{" "}
            <label className="form-check-label">
              Select Home{" "}
              <input
                className="form-check-input"
                type="radio"
                name="option"
                onChange={() => {
                  setLocation(true);
                  setGurupetam(false);
                }}
              />
            </label>
          </div>
          {isgurupetam ? (
            <>
              <select
                className="form-select form-select-lg mb-3 mt-3"
                aria-label=".form-select-lg example"
                {...register("gurupetam", {
                  required: "**Please Enter your Gurupetam",
                })}>
                <option selected disabled>
                  Select GuruPetam
                </option>
                <option value="Vijayawada">One</option>
                <option value="Hyderabad">Two</option>
                <option value="Chennai">Three</option>
              </select>

              {errors ? (
                <p
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "12px",
                  }}>
                  {errors.gurupetam?.message}
                </p>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
          {islocation ? (
            <>
              <input
                type="number"
                className="form-control mb-3 mt-3 w-25"
                placeholder="Enter Your Area PinCode"
                {...register("home", {
                  required: "**Please Enter your Home",
                })}
              />
              {errors ? (
                <p
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "12px",
                  }}>
                  {errors.home?.message}
                </p>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </div>

        <Button type="submit">Register</Button>
      </form>
      <ToastContainer position="top-center">
        <Toast
          show={show}
          onClose={() => {
            setShow(false);
          }}
          className="py-12 col-sm-12 mx-auto bg-success"
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "white",
            width: "400px",
          }}>
          <Toast.Header className="justify-content-between">
            <strong>success</strong>
            <Button
              onClick={() => {
                navigate("/");
              }}>
              back to login
            </Button>
          </Toast.Header>
          <Toast.Body>{resdata}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Register;
