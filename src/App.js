import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
