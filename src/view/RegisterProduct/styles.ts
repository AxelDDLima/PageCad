import styled from "styled-components";

export const Container = styled.div`
  color: red;
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin: auto;

  button {
    padding: 10px;
    left: 100px;
  }

  input {
    padding: 15px;
    margin: 10px;
    background-color: #00fa9a;
    display: flex;
    border-radius: 5px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
