import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import axios from "axios";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [iswhatsapp, setWhatsApp] = useState(false);
  const [isgurupetam, setGurupetam] = useState(false);
  const [islocation, setLocation] = useState(false);
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
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div>
      Register Here
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
            required: "**Please Enter your Gmail",
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
          <div>
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
              <select
                className="form-select form-select-lg mb-3 mt-3"
                aria-label=".form-select-lg example"
                {...register("home", {
                  required: "**Please Enter your Home",
                })}>
                <option selected disabled>
                  Select Home
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
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Register;
