import React from "react";
import Header from "../../components/navbar";
import { Container, CardProject, H1, CardProject1, CardProject2, CardProject3, Button } from "./styles";

const Projects = () => {
  return (
    <Container>
      <Header />
      <H1>Projetos</H1>
      <CardProject>
        <CardProject1>
          <Button>Saiba Mais</Button>
        </CardProject1>
        <CardProject2>
          <Button>Saiba Mais</Button>
        </CardProject2>
        <CardProject3>
          <Button>Saiba Mais</Button>
        </CardProject3>
      </CardProject>
    </Container>
  );
};

export default Projects;
