import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import React from "react";
import Cabecalho from "../components/Cabecalho";
import Pagina from "../components/Pagina";

const array = () => {
  const carros = ["Civic", "Tucson", "Celta", "Tempra", "Marea", "Doblo"];

  return (
    <>
      <Pagina titulo="Arrays">
        <Container>
          
          <ol>
            {carros.map((item) => (
              <li>{item}</li>
            ))}
          </ol>

        </Container>
      </Pagina>
    </>
  );
};

export default array;
