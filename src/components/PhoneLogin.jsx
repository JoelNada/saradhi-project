import React, { useState } from "react";
// Import your CSS file
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table, Toast, ToastContainer, Modal, Button } from "react-bootstrap";

const PhoneLogin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resdata, setdata] = useState([]);
  const [err, seterr] = useState("");
  const [show, setShow] = useState(false);
  const [showModal, setModal] = useState(false);
  const handleShow = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { phoneNumber: phoneNumber };
    axios
      .post("http://localhost:4000/getbynum", data)
      .then((res) => {
        setdata(res.data);
        setModal(true);
      })
      .catch((err) => {
        console.log(err.response);
        seterr(err?.response?.data);
        setShow(true);
        navigate("/register");
      });
  };
  return (
    <div className="container">
      <ToastContainer position="top-center">
        <Toast
          show={show}
          onClose={() => {
            setShow(false);
          }}
          className="py-12 col-sm-12 mx-auto bg-danger"
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "white",
            width: "400px",
          }}>
          <Toast.Header className="justify-content-between">Error</Toast.Header>
          <Toast.Body>{err}</Toast.Body>
        </Toast>
      </ToastContainer>
      <h2>Phone Number Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="form-control"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <br />

      <br />
      {/* <Table striped bordered hover>
        {resdata.length !== 0 ? (
          <thead>
            <tr>
              <th>SNO</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Gmail</th>
              <th>Phonenumber</th>
              <th>Whatsappnumber</th>
              <th>Gurupetam</th>
              <th>Home</th>
            </tr>
          </thead>
        ) : (
          ""
        )}
        <tbody>
          {resdata.map((item, index) => (
            <tr key={index}>
              <td> {index + 1}</td>
              <td> {item.firstname}</td>
              <td> {item.lastname}</td>
              <td> {item.gmail}</td>
              <td> {item.phonenumber}</td>
              <td> {item.whatsappnumber}</td>
              <td> {item.gurupetam.length !== 0 ? item.gurupetam : "NA"}</td>
              <td>{item.home?.length !== 0 ? item?.home : "NA"}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your data is already there in our Database, We will contact you
          shortly by Phone or G-mail
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PhoneLogin;

