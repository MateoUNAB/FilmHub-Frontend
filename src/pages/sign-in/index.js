import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_URL } from "../../util/Util";
import "./styles.css";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData((values) => ({ ...values, [name]: value }));  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await sendAuthApi();
  };

  const sendAuthApi = async () => {
    const requestData = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    };
    let response = await fetch(API_URL + "auth", requestData);
    response = await response.json();
    return response;
  };

  return (
    <div className="SignInForm">

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="user"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>

    </div>
  );
};
