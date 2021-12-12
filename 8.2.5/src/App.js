import logo from './logo.svg';
import './App.scss';
import React from "react";
import ReactDOM from "react-dom";
import data from "./data/articles.json";
import './styles/Menu.scss';
import Menu from "./components/Menu";

function App() {
  return (
      <Menu articles={data} />
  );
}

export default App;

