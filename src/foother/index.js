import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import "./foother.css";

function Foother() {
  return (
    <>
      <div className="footherCont">
        <div className="about">
          <h4>Sobre nosotros</h4>
          <p>
            Somos una empresa que se dedica a la manipulación de infomacion de
            usuarios
          </p>
        </div>
        <div className="footherSocial">
          <h4>Siguenos</h4>

          <ul>
            <li className="iconLetter">
              <AiOutlineFacebook />
              Facebook
            </li>

            <li className="iconLetter">
              <AiOutlineInstagram />
              Instagram
            </li>
            <li className="iconLetter">
              <AiOutlineLinkedin />
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Foother;
