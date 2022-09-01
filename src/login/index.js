import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import { IoIosMail, IoIosKey } from "react-icons/io";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./login.css";

export function Index({ setToken }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    if (email === "admin@gmail.com" || password === "Rql1234*") {
      swal.fire({
        icon: "success",
        text: "successfully logged in!",
      });
      localStorage.setItem("User", JSON.stringify({ email, password }));
      setToken(true);
      navigate("/table");
    } else {
      swal.fire({
        icon: "error",
        text: "invalid credentials!",
        footer: "try again",
      });
    }
  };

  return (
    <>
      <div className="loginCont">
        <div className="login">
          <div>
            <h1 className="title">Login</h1>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">
                <IoIosMail />
                Email
              </label>
              <input
                type="text"
                defaultValue={"admin@gmail.com"}
                className="form-control my-2"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="p">El email es requerido!</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="p">El formato email es incorrecto!</p>
              )}
            </div>
            <div>
              <label className="label">
                <IoIosKey />
                Contraseña
              </label>
              <input
                type="password"
                defaultValue={"Rql1234*"}
                className="form-control my-2"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="p">La contraseña es requerida!</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="p">
                  Minimo 8 caracteres, maximo 15, Al menos una letra mayúscula,
                  al menos una letra minucula, al menos un dígito No espacios en
                  blanco, al menos 1 caracter especial!
                </p>
              )}
            </div>

            <button className="buttonLogin">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Index;
