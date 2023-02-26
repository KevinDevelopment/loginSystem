import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import logo from "../../images/Colorido 1.png";

export default function Login() {

  function alerta() {
    alert("esta funcionando")
  }

  return (
    <div className="imageLogin" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
      <div className="card" style={{ width: "20rem" }}>

        <div className="card-header" style={{ textAlign: "center" }}>
          <img src={logo} width={160} />
        </div>

        <div className="card-body">
          <Form className="row g-3">

            <div className="col-md-12">
              <Label>Email</Label>
              <Input type="email" placeholder="email@email.com" />
            </div>

            <div className="col-md-12">
              <Label>Senha</Label>
              <Input type="password" placeholder="password" />
            </div>

            <div style={{ textAlign: "center" }}>
              <Button color="danger" onClick={alerta} className="col-md-11" >Login</Button>

              <div>não possui cadastro ? registre-se abaixo</div>
              <hr />
              <Link to="/register"><Button color="danger" className="col-md-11">Registre-se</Button></Link>
            </div>

          </Form>
        </div>

      </div>
    </div>
  );
}