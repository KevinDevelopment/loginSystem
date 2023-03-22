import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Label, Input, Button, Spinner } from "reactstrap";

import logo from "../../images/Colorido 1.png";

import ComponentNavbar from "../../components/navbar";

export default function RegisterNewUser() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();
  const [spinner, setSpinner] = useState(false);

  const token = `Bearer ${localStorage.getItem("token")}`;

  function sendUserData() {
    fetch("http://localhost:8080/user", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
      headers: { 
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": token
       }
    })
      .then(response => response.json())
      .then(json => {
        setErrors(json.message);
        if (json.message === "Você será redirecionado em breve") {

          setSpinner(true);

          setTimeout(() => {
            navigate("/users");
          }, 2000);
        }
      })
      .catch(err => console.log(err))
  }


  return (
    <div>
      <ComponentNavbar />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 100 }} >
        <div className="card" style={{ width: "30rem" }}>

          <div className="card-header" style={{ textAlign: "center" }}>
            <img src={logo} width={160} />
          </div>

          <div className="card-body">
            <Form className="column g-3" id="form">

              <div className="col-md-12">
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
                    <div style={{ textAlign: "center", color: "red" }}>{errors}</div>

                }
              </div>
             
              <Button color="danger" className="m-auto" onClick={() => sendUserData()}>Cadastrar</Button>

            </Form>
          </div>

        </div>
      </div>

    </div>
  );
}