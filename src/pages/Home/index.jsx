import { React } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Hero,
  H1,
  P,
  ImageProfile,
  About,
  SocialMedia,
  Footer,
} from "./styles";

import Profile from "../../assets/janildoperfil.png";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Header from "../../components";

const Home = () => {
  const navigate = useNavigate();

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
          eficiente. <br />
          <span onClick={() => navigate("/sobre")}>Saiba Mais...</span>
        </p>
      </About>
      <SocialMedia>
        <FaLinkedin />
        <FaGithub />
        <FaWhatsapp />
        <FaInstagram />
      </SocialMedia>

      <Footer>
        <p>©2024 Todos os Direitos Reservados. Por Janildo`S Cardoso </p>
      </Footer>
    </Container>
  );
};

export default Home;
