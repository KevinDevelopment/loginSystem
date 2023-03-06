import React, { useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";

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
          <div className="container">
            <div className="card mt-4">
              <div className="card-header">
                <div><FcAbout size={30}/>{`Numero de identificação: ${user.id}`}</div>
              </div>
              <div className="card-body">
                <div>{`Nome: ${user.name}`}</div>
                <div>{`Email: ${user.email}`}</div>
              </div>
            </div>
          </div>

        );
      })}
    </ul>
  );
}