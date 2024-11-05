import { useState } from "react";
import {
  Container,
  Nav,
  Image,
  Ul,
  Li,
  Hero,
  H1,
  P,
  ImageProfile,
  About,
} from "./styles";

import Logo from "../../assets/Janildologo.png";
import Profile from "../../assets/janildoperfil.png";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Nav>
        <Image src={Logo} alt="Logo" />
        <Ul>
          <Li>Inicio</Li>
          <Li>Sobre</Li>
          <Li>Projetos</Li>
        </Ul>
      </Nav>

      <Hero>
        <H1>
          Front-End <span>Developer</span>
        </H1>
        <P>
          Olá, Me chamo <span>JANILDO!</span>
        </P>
        <ImageProfile src={Profile} alt="Profile" />
      </Hero>
      <About>
        <p>
        Movido pela busca constante de conhecimento e pela oportunidade de criar<br/> soluções que combinem excelência visual com código limpo e eficiente. <br></br><span>Saiba Mais...</span> 
        </p>
      </About>
    </Container>
  );
};

export default Home;
