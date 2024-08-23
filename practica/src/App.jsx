import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Galeria } from "./components/Galeria";

function App() {

  return (
    <main>
      <NavBar/>
      <div className="contenedor">
        <div className="lado-izquierdo">
          <Galeria/>
        </div>
        <div className="lado-derecho">

        </div>
      </div>
    </main>
  )
}

export default App
