import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header/index"
import FoodSearch from "./components/FoodSearch/index"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name="Harry" age={16}>
          This content goes inside
        </Header>
        <FoodSearch />
        {/* <Header name="Sally" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
