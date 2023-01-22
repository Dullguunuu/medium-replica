import React from "react"
import "./App.css"
import Header from "./components/Header";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Trending />
      <Main />
    </div>
  )
}

export default App;   