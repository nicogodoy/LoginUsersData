import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./foother.css";

function Foother() {
  return (
    <>
      <div className="footherCont">
        <div className="boxOne">
          <h4 className="titleContain">
            Siguenos en nuestras redes para mas informacion
          </h4>
          <ul>
            <li className="icon">
              <AiOutlineFacebook />
            </li>

            <li className="icon">
              <AiOutlineInstagram />
            </li>
            <li className="icon">
              <AiOutlineLinkedin />
            </li>
            <li className="icon">
              <AiOutlineWhatsApp />
            </li>
          </ul>
        </div>
        <div className="boxTwo">
          <h4 className="title">Sobre nosotros:</h4>
          <p>
            Somos una empresa que se dedica a la manipulación de infomacion de
            usuarios
          </p>
        </div>
      </div>
    </>
  );
}
export default Foother;
