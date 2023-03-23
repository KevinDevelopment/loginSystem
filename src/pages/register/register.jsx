import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, div, Label, Input, Button, Spinner } from "reactstrap";

import logo from "../../images/Colorido 1.png";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();
  const [spinner, setSpinner] = useState(false);


  function sendUserData() {
    fetch("http://localhost:8080/register/user", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
      headers: { "Content-type": "application/json;charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        setErrors(json.message);
        if (json.message === "Você será redirecionado em breve") {

          setSpinner(true);

          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch(err => console.log(err))
  }



  return (
    <div className="imageLogin" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
      <div className="card" style={{ width: "30rem" }}>

        <div className="card-header" style={{ textAlign: "center" }}>
          <img src={logo} width={160} />
        </div>

        <div className="card-body">
          <Form className="column g-3" id="form">

            <div className="col-md-12 required">
              <Label>Nome:</Label>
              <Input type="text" placeholder="Digite seu nome" id="userName" required onChange={(e) => [setName(e.target.value), setErrors(" ")]} />
            </div>

            <div className="col-md-12">
              <Label>Email</Label>
              <Input type="email" placeholder="email@email.com" id="userEmail" required onChange={(e) => [setEmail(e.target.value), setErrors(" ")]} />
            </div>

            <div className="col-md-12 mb-3">
              <Label>Senha:</Label>
              <Input type="password" placeholder="password" id="userPassword" required onChange={(e) => [setPassword(e.target.value), setErrors(" ")]} />
            </div>

            <div style={{ marginBottom: 10, textAlign: "center" }}>
              {
                spinner ? <Spinner>Loading...</Spinner> : null
              }

              {
                errors === "Você será redirecionado em breve" ?
                  <div style={{ textAlign: "center", color: "green" }}>{errors}</div> :
                  <div style={{ textAlign: "center", color: "black" }}>{errors}</div>

              }
            </div>

            <Link to="/"><Button color="danger">Login</Button></Link>
            <Button color="danger" className="ms-4" onClick={sendUserData}>Registre-se</Button>

          </Form>
        </div>

      </div>
    </div>
  );
}