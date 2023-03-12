import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import vegeta from "../../images/rem.png"

import ComponentNavbar from "../../components/navbar";
import ImageComponent from "./components/image";

import { AiOutlineAudit } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";

import { Button } from "reactstrap";

export default function ListOfUsers() {

  const [list, setList] = useState([]);
  const [messages, setMessages] = useState([]);

  const token = `Bearer ${localStorage.getItem("token")}`;

  useEffect(() => {
    fetch("http://localhost:8080/users", {
      method: "GET",
      mode: "cors",
      withCredentials: true,
      credentials: "omit",
      headers: {
        "Authorization": token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": ["*"],
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": 86400
      }
    }).then(response => response.json())
      .then(json => {
        setList(json.message);
        console.log(json);
      }).catch(err => {
        console.log(err);
      })
  }, []);


  function deleteUserById(userId) {
    fetch(`http://localhost:8080/user/${userId}`, {
      method: "DELETE",
      headers: {
        "Authorization": token
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <ComponentNavbar />

      {Array.isArray(list) ?
        <ul className="imageUsers">
          {list.map((user) => {
            return (
              <div className="container" key={user.id}>

                <div className="card mt-4">
                  <div className="card-header">
                    <div><AiOutlineAudit size={23} />{`ID: ${user.id}`}</div>
                  </div>

                  <div className="card-body">
                    <div className="mb-2"><AiOutlineUser size={23} />{` ${user.name}`}</div>
                    <div><AiOutlineMail size={23} />{` ${user.email}`}</div>
                  </div>

                  <div className="card-footer">
                    <Link to={`/change/user/${user.id}`}><Button className="me-2" color="warning">Alterar <FaUserEdit size={23} /></Button></Link>
                    <Button className="me-2" color="danger" onClick={() => deleteUserById(`${user.id}`)}>Excluir <FaUserMinus size={23} /></Button>
                  </div>
                </div>

              </div>
            );
          })}
        </ul> : <ImageComponent image={vegeta} message={list} /> }
    </div>
  );
}