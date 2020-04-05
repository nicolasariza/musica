import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cancion from "./components/Cancion";
import Informacion from "./components/Informacion";

function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({});

  const [letra, setLetra] = useState("");

  const [informacion, setInformacion] = useState({});

  const { artista, cancion } = busquedaLetra;
  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      // El promise ayuda a que la consulta a ambas apis sea al tiempo
      const [letra, informacion] = await Promise.all([
        axios.get(url),
        axios.get(url2),
      ]);
      setLetra(letra.data.lyrics);
      setInformacion(informacion.data.artists[0]);
    };

    consultarApiLetra();
  }, [busquedaLetra, informacion]);
  return (
    <Fragment>
      <Formulario setBusquedaLetra={setBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion informacion={informacion} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
