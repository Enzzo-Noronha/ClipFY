import { useState } from "react";
import "./App.css";
import div from "./components/div.module.css";
import h1 from "./components/h1.module.css";

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
        {pagina === "corterapido" && (
          <>
            <h1 className={`${h1.centro} ${h1.cor}`}>Corte Rápido</h1>
            <div className={`${div.config}`}>
              <div className={`${div.card}`}>
                <h1 className={`${h1.centro} ${h1.cor}`}>Enviar Arquivo</h1>
                <div className={`${div.subCard}`}>
                  <label htmlFor="arquivo" className={`${div.label1}`}>
                    Escolha o video aqui!
                  </label>
                  <input type="file" name="arquivo" id="arquivo" />
                  <input type="number" placeholder="Quantidade de cortes:" />
                  <button type="submit">Enviar Video</button>
                </div>
              </div>
              <div className={`${div.card}`}>
                <h1 className={`${h1.centro} ${h1.cor}`}>Download</h1>
                <div className={`${div.subCard}`}></div>
              </div>
            </div>
          </>
        )}
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
