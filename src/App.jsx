import { useState } from "react";
import "./App.css";
import div from "./components/div.module.css";
import h1 from "./components/h1.module.css";
import CorteRapido from "./components/corteRapido/CorteRapido";

function App() {
  const [pagina, setPagina] = useState("dashboard");
  return (
    <>
      <header>
        <div></div>
        <div>
          <h1>ClipFY</h1>
        </div>
        <div>
          <a
            onClick={(e) => {
              e.preventDefault();
              setPagina("dashboard");
            }}
          >
            Dashboard
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setPagina("corterapido");
            }}
          >
            Corte Rápido
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setPagina("calendario");
            }}
          >
            Calendário
          </a>
        </div>
      </header>
      <main>
        {pagina === "dashboard" && (
          <>
            <h1 className={`${h1.centro} ${h1.cor}`}>Dashboard</h1>
          </>
        )}
        {pagina === "corterapido" && <CorteRapido></CorteRapido>}
        {pagina === "calendario" && (
          <>
            <h1 className={`${h1.centro} ${h1.cor}`}>Calendário</h1>
          </>
        )}
      </main>
    </>
  );
}

export default App;
