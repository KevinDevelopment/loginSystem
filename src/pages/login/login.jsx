import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { Form, Label, Input, Button } from "reactstrap";

import logo from "../../images/Colorido 1.png";

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();

  function sendUserData() {
    fetch("http://localhost:8080/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: { "Content-type": "application/json;charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        setErrors(json.message)
      })
      .catch(err => console.log(err))
  }

  console.log(errors)

  return (
    <div className="imageLogin" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
      <div className="card" style={{ width: "20rem" }}>

        <div className="card-header" style={{ textAlign: "center" }}>
          <img src={logo} width={160} />
        </div>

        <div className="card-body">
          <Form className="row g-3">

            <div className="col-md-12">
              <Label>Email:</Label>
              <Input type="email" placeholder="email@email.com" required onChange={(e) => [setEmail(e.target.value), setErrors(" ")]} />
            </div>

            <div className="col-md-12">
              <Label>Senha:</Label>
              <Input type="password" placeholder="password" onChange={(e) => [setPassword(e.target.value), setErrors(" ")]} />
            </div>

            {
              errors === "Successfully logged in" ?
                <div style={{ textAlign: "center", color: "green" }}>{errors}</div> :
                <div style={{ textAlign: "center", color: "red" }}>{errors}</div>

            }

            <div style={{ textAlign: "center" }}>
              <Button color="danger" className="col-md-11" onClick={sendUserData}>Login</Button>

              <div>não possui cadastro ? registre-se abaixo</div>
              <hr />
              <Link to="/register"><Button color="danger" className="col-md-11" >Registre-se</Button></Link>
            </div>

          </Form>
        </div>

      </div>
      <div style={{ color: "white", fontSize: 12, marginTop: 7 }}>&reg; Hoxtak Aeroespacial. &trade; Todos os diretos reservados</div>
    </div>
  );
}