import React from "react";
import Route from "./Routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
