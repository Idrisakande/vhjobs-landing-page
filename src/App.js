import React from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header
        text="Become a service provider"
        leftBtnText="Sign up"
        rightBtnText="Explore now"
      ></Header>
      <Home />
    </div>
  );
}

export default App;
