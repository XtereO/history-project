import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./ui/Header/Header";
import { Article } from "./ui/Article/Article";
import { Footer } from "./ui/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
