import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import logo from "../../images/Colorido 1.png";

export default function Register() {

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  function sendData(e) {
    e.preventDefault()

    if (!id) {
      document.getElementById("userId").style.border = "2px solid red"
      return
    } else if (!name) {
      document.getElementById("userName").style.border = "2px solid red"
      return
    } else if (!email) {
      document.getElementById("userEmail").style.border = "2px solid red"
      return
    } else if (!password) {
      document.getElementById("userPassword").style.border = "2px solid red"
      return
    } else {
      sendUserData();
    }

  }

  function sendUserData() {
    fetch("http://localhost:8080/user", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        name: name,
        email: email,
        password: password
      }),
      headers: { "Content-type": "application/json;charset=UTF-8" }
    })
    .then(response => response.json())
    .then(json => (console.log(json)))
    .catch(err => console.log(err))
  }
  


  return (
    <div className="imageLogin" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
      <div className="card" style={{ width: "30rem" }}>

        <div className="card-header" style={{ textAlign: "center" }}>
          <img src={logo} width={160} />
        </div>

        <div className="card-body">
          <Form className="column g-3" onSubmit={sendData} method="POST" action="http://localhost:8080/user">

            <FormGroup className="col-md-12">
              <Label>Numero de identificação:</Label>
              <Input type="number" placeholder="Digite seu ID aqui" id="userId" onBlur={(e) => setId(e.target.value)} />
            </FormGroup>

            <FormGroup className="col-md-12">
              <Label>Nome:</Label>
              <Input type="text" placeholder="Digite seu nome" id="userName" onBlur={(e) => setName(e.target.value)} />
            </FormGroup>

            <FormGroup className="col-md-12">
              <Label>Email</Label>
              <Input type="email" placeholder="email@email.com" id="userEmail" onBlur={(e) => setEmail(e.target.value)} />
            </FormGroup>

            <FormGroup className="col-md-12">
              <Label>Senha:</Label>
              <Input type="password" placeholder="password" id="userPassword" onBlur={(e) => setPassword(e.target.value)} />
            </FormGroup>

            <Link to="/"><Button color="danger">Login</Button></Link>
            <Button color="danger" className="ms-4" type="submit">Registre-se</Button>

          </Form>
        </div>

      </div>
    </div>
  );
}