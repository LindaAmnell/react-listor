import { useState } from "react";
import "./App.css";
import FruktLista from "./frukt";
import SlumpaTal from "./Slumpa";

function App() {
  //   const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Listor, objekt</h1>
      <section>
        <FruktLista />
        <SlumpaTal />
      </section>
    </main>
  );
}

export default App;
