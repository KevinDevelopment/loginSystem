import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

export default function ListOfUsers() {

  const [list, setList] = useState([]);

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
        setList(json.users);
        console.log(json);
      }).catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <ul>
      {list.map((user) => {
        return (
          <div>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </div>
        );
      })}
    </ul>
  );
}