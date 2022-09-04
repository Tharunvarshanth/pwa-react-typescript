import React from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "@mui/material";
export default function Login() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control className="input-email" type="email" placeholder="eamil.com@gmail.com"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          className="Button"
          sx={{
            width: 300,
            "& .MuiButtonBase-root": {
              color: "black",
            },
          }}
        >
          Button
        </Button>
      </Form>
    </Container>
  );
}
