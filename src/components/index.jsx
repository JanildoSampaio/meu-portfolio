
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Janildologo.png";
import { Nav, Image, Ul, Li } from "./styles";

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (   
    <Nav>
    <Image src={Logo} alt="Logo" onClick={() => navigate("/")} />
    <Ul>
      <Li onClick={() => navigate("/")} className={location.pathname === "/" ? "active" : ""} >Inicio</Li>
      <Li onClick={() => navigate("/sobre")} className={location.pathname === "/sobre" ? "active" : ""} >Sobre</Li>
      <Li onClick={() => navigate("/projetos")} className={location.pathname === "/projetos" ? "active" : ""} >Projetos</Li>
    </Ul>
    </Nav>
  );
}

export default Header;