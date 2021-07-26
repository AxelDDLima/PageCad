import React from "react";
import { useHistory } from "react-router-dom";

import { Container, ButtonPerson, ButtonProduct } from "./styles";

const Home: React.FC = () => {
  const location = useHistory();
  return (
    <Container>
      <ButtonPerson
        onClick={() => location.push("/RegisterProduct")}
        type="button"
      >
        Cadastrar Pessoas
      </ButtonPerson>
      <ButtonProduct
        onClick={() => location.push("/RegisterProduct")}
        type="button"
      >
        Cadastrar Produto
      </ButtonProduct>
    </Container>
  );
};

export default Home;
