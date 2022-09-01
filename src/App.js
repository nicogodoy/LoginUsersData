import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Login from "./login";
import Table from "./table";
import Foother from "./foother";
import List from "./List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const KeyValue = localStorage.getItem("User");
   if (KeyValue) {
      setToken(true);
    }
  }, [token]);

  return (
    <>
      <header>
        <Header token={token} setToken={setToken} />
      </header>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/table" element={<Table />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <footer>
        <Foother />
      </footer>
    </>
  );
}

export default App;
