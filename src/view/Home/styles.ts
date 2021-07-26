import styled from "styled-components";

export const Container = styled.div`
  color: red;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin: auto;

  button {
    padding: 15px;
    margin: 10px;

    display: flex;
    border-radius: 5px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ButtonPerson = styled.button`
  background-color: #dc143c;
`;

export const ButtonProduct = styled.button`
  background-color: #00fa9a;
`;
