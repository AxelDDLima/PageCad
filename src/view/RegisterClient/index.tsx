import React from "react";
import { FormEvent, useState } from "react";
import { Container, FormContainer } from "./styles";
import { useHistory } from "react-router-dom";

const FormClient = () => {
  const [name, setName] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const location = useHistory();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let client = {
      name: name,
      sex: sex,
      email: email,
      phone: phone,
    };
    const str = JSON.stringify(client);
    localStorage.setItem("client", str);
    alert("cliente cadastrado!");
    location.push("/");
  };
  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Digite aqui seu nome"
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="text"
            value={sex}
            placeholder="Digite aqui seu Sexo"
            onChange={({ target }) => setSex(target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Digite aqui a E-mail"
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="text"
            value={phone}
            placeholder="Digite aqui Telefone"
            onChange={({ target }) => setPhone(target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </FormContainer>
    </Container>
  );
};

const RegisterClient = () => {
  const location = useHistory();
  return (
    <div>
      <h1>Cadastrar Cliente</h1>
      <FormClient />
      <button onClick={() => location.push("/")} type="button">
        Voltar
      </button>
    </div>
  );
};
export default RegisterClient;
