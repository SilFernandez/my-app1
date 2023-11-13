//app que llama a componente Contador
import React from "react"
//vinculo con el componente
import Contador from "./components/Contador";

// funcion que llame al componente valores de un contador
function App() {
  return (
    <div className="App">
      <h1>Mostrame contador.</h1>
       <Contador/>
    </div>
  );
}

export default App;
