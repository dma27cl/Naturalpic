import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./Components/Barra";
import Home from "./Views/Home";
import Favoritos from "./Views/Favoritos";
import MyContext from "./Context/MyContext";
import 'react-icons/fa';

function App() {

  const [fotos, setFotos] = useState([]);
  const estadoGlobal = { fotos, setFotos }

  //llamada de api fotos
  async function getData() {
    const res = await fetch('/fotos.json')
    const data = await res.json();

    setFotos(data.photos);
    console.log(data.photos);
    const fotosMostrar = data.photos.map((f) => {
      return { id: f.id, likes: f.likes, url: f.url }
    })

  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <MyContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Barra></Barra>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>

    </div>
  );
}

export default App;
