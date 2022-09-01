import React, { useEffect, useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiUser, BiTable } from "react-icons/bi";
import { HiViewList } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

function Header({token, setToken}) {
  const logout=()=>{
    localStorage.clear()
    setToken(false)
    swal.fire('Te has deslogueado')
    navigate('/')

  }
  let navigate = useNavigate();
 
  return (
    <>
      <div className="nav">
        <ul>
          {!token && (
            <li>
              <NavLink to="/" className="link">
                <BiUser />
                Login
              </NavLink>
            </li>
          )}

          {token && (
            <>
              <li>
                <NavLink to="/table" className="link">
                  <HiViewList />
                  Tabla
                </NavLink>
              </li>
              <li>
                <NavLink to="/list" className="link">
                  <BiTable />
                  Listado
                </NavLink>
              </li>
              <li>
              <button  className="link" onClick={logout}>
                <RiLogoutCircleLine />
                Logout
              </button>
            </li>
            </>
          )}
          
        </ul>
      </div>
    </>
  );
}
export default Header;
