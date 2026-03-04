import div from "../div.module.css";
import h1 from "../h1.module.css";

function CorteRapido() {
  return (
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
  );
}

export default CorteRapido;
