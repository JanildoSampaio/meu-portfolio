import React from "react";
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
import Header from "../../components/navbar";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
            <button onClick={() => navigate("/sobre")}>Saiba Mais...</button>
          </p>
        </About>
        <SocialMedia>
          <a
            href="https://www.linkedin.com/in/janildo-sampaio-cardoso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/JanildoSampaio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="http://wa.me/5585992127411?text=Seja bem vindo(a) Vamos conversar ?!  !"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/janildosampaio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialMedia>
        <Footer>
          <p>©2024 Todos os Direitos Reservados. Por Janildo`S Cardoso </p>
        </Footer>
      </Container>
    </motion.div>
  );
};

export default Home;
