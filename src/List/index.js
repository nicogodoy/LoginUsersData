import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./list.css";

function List() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
 

  useEffect(() => {
    const token = localStorage.getItem("User");

    if (token === null) {
      navigate("/");
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, []);

  const focus = (e) => {
    e.target.classList.toggle("focus");
  };

  return (
    <>
      <div className="listContainer">
        {data &&
          data.map((card) => {
            return (
              <div
                key={card.id}
                className="card"
                style={{
                  width: "300px",
                  height: "180px",
                  margin: "5px",
                  border: "1px solid #006FE3",
                }}
                onClick={(e) => {
                  focus(e);
                  console.log(e);
                }}
              >
                <div className="card-body">
                  <h5
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="card-title"
                  >
                    {card.title}
                  </h5>
                  <h6
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="card-subtitle mb-2 text-muted"
                  >
                    {card.completed}
                  </h6>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="card-text"
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default List;
