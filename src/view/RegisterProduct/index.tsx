import React from "react";
import { FormEvent, useState } from "react";
import { Container, FormContainer } from "./styles";
import { useHistory } from "react-router-dom";

const FormProduto = () => {
  const [productName, setProductName] = useState<string>("");
  const [codigo, setCodigo] = useState<string>("");
  const [amaunt, setAmaunt] = useState<string>("");
  const [provider, setProvider] = useState<string>("");
  const [type, setType] = useState<string>("");
  const location = useHistory();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let product = {
      productName: productName,
      codigo: codigo,
      amaunt: amaunt,
      provider: provider,
      type: type,
    };
    const str = JSON.stringify(product);
    localStorage.setItem("produto", str);
    alert("produto cadastrado!");
    location.push("/");
  };
  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={productName}
            placeholder="Digite aqui seu nome"
            onChange={({ target }) => setProductName(target.value)}
          />
          <input
            type="text"
            value={codigo}
            placeholder="Digite aqui seu codigo"
            onChange={({ target }) => setCodigo(target.value)}
          />
          <input
            type="text"
            value={amaunt}
            placeholder="Digite aqui a quantidade"
            onChange={({ target }) => setAmaunt(target.value)}
          />
          <input
            type="text"
            value={provider}
            placeholder="Digite aqui fornecedor"
            onChange={({ target }) => setProvider(target.value)}
          />
          <input
            type="text"
            value={type}
            placeholder="Digite aqui tipo produto"
            onChange={({ target }) => setType(target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </FormContainer>
    </Container>
  );
};

const RegisterProduct = () => {
  const location = useHistory();
  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <FormProduto />
      <button onClick={() => location.push("/")} type="button">
        Voltar
      </button>
    </div>
  );
};
export default RegisterProduct;
