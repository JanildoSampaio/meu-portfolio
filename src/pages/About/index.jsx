import React from "react";
import Header from "../../components/navbar";

import { Container, Me, Stack, Philosophy, Learning, StyledHtml, StyledCss, StyledJs, StyledReact,  } from "../About/styles";


const About = () => {
  return (
    <Container>
      <Header />
      <Me>
        <h1>Sobre Mim</h1>
        <p>
          Como desenvolvedor Front-end, transformo essa busca por conhecimento
          em soluções práticas e inovadoras. Minha paixão pela tecnologia vai
          além do código - está na curiosidade de entender profundamente como
          cada elemento funciona e como posso utilizá-lo para criar experiências
          digitais excepcionais.
        </p>
      </Me>
      <Stack>
        <h1>Minha Stack Técnica</h1>
        <ul>
          <li><StyledHtml/></li>
          <li><StyledCss/></li>
          <li><StyledJs/></li>
          <li><StyledReact/></li>          
        </ul>
        <ul>
          
        </ul>
      </Stack>
      <Philosophy>
        <h1>Filosofia de Trabalho</h1>
        <p>
          Minha abordagem ao desenvolvimento front-end se baseia em três pilares
          fundamentais:
        </p>
        <ul>
          <li>
            Excelência Visual: Criação de interfaces que não apenas funcionam
            bem, mas encantam os usuários
          </li>
          <li>
            Código Limpo: Desenvolvimento organizado e bem documentado,
            facilitando manutenção e colaboração
          </li>
          <li>
            Eficiência: Otimização de performance e recursos para a melhor
            experiência possível
          </li>
        </ul>
      </Philosophy>
      <Learning>
        <h1>Aprendizado e Evolução</h1>
        <p>
          A tecnologia está em constante evolução, e mantenho-me sempre
          atualizado através de:
        </p>
        <ul>
          <li>Exploração de novas tecnologias e frameworks</li>
          <li>Participação ativa em comunidades de desenvolvimento</li>
          <li>Projetos pessoais que desafiam minhas habilidades atuais</li>
        </ul>
      </Learning>
    </Container>
  );
};

export default About;
