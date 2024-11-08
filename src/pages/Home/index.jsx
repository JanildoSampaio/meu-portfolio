import { React } from "react";
import { Container, Hero, H1, P, ImageProfile, About } from "./styles";

import Profile from "../../assets/janildoperfil.png";
import Header from "../../components";

const Home = () => {
  return (
    <Container>
      <Header />
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
          Movido pela busca constante de conhecimento e pela oportunidade de
          criar
          <br /> soluções que combinem excelência visual com código limpo e
          eficiente. <br></br>
          <span>Saiba Mais...</span>
        </p>
      </About>
    </Container>
  );
};

export default Home;
