import React from "react";
import Header from "../../components/navbar";
import { motion } from "framer-motion";
import {
  Container,
  CardProject,
  H1,
  CardProject1,
  CardProject2,
  CardProject3,
  Button,
} from "./styles";

const Projects = () => {
  
 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Header />
        <H1>Projetos</H1>
        <CardProject>
          <CardProject1>
            <Button>Saiba Mais</Button>
          </CardProject1>
          <CardProject2>
            <Button >Saiba Mais</Button>
          </CardProject2>
          <CardProject3>
            <Button>Saiba Mais</Button>
          </CardProject3>
        </CardProject>
      </Container>
    </motion.div>
  );
};

export default Projects;
