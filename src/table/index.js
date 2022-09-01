import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";

function TableUser() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("User");
    if (token === null) {
      navigate("/");
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, []);

  const info = (user) => {
    console.log(user);
  };

  return (
    <>
      <div className="tableCont">
        <h3 className="titleH3">Tabla de ususarios</h3>

        <table style={{ width: "80%" }} className="table table-md">
          <thead className="table table-active">
            <tr>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Sitio web</th>
            </tr>
          </thead>

          {data &&
            data.map((user) => {
              return (
                <tbody key={user.id}>
                  <td
                    onClick={(e) => {
                      info(user);
                    }}
                  >
                    {user.name}
                  </td>
                  <td
                    onClick={(e) => {
                      info(user);
                    }}
                  >
                    {user.username}
                  </td>
                  <td
                    onClick={(e) => {
                      info(user);
                    }}
                  >
                    {user.email}
                  </td>
                  <td
                    onClick={(e) => {
                      info(user);
                    }}
                  >
                    {user.website}
                  </td>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
}
export default TableUser;
