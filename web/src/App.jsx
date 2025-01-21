import * as react from "react";
import Ticket from "./components/Ticket.jsx"
import './App.scss'

function App() {

  return (
    <>
      <Ticket id="1" title="Bug Report" dateTime={"21/01/25 14:45"} player={"NeyZzO"} reason={"Je suis buggé, je peux plus bouger"} initialState="opened"/>
    </>
  )
}

export default App
