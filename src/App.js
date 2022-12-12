import EscolherFilme from "./components/EscolherFilme";
import EscolherSessao from "./components/EscolherSessao";
import EscolherAssento from "./components/EscolherAssento";
import FecharPedido from "./components/FecharPedido";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [pedido, setPedido] = useState(null)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EscolherFilme />} />
          <Route path="/sessoes/:idFilme" element={<EscolherSessao />} />
          <Route path="/assento/:idSessao" element={<EscolherAssento 
          setPedido={setPedido}/>} />
          <Route path="/sucesso" element={<FecharPedido 
          pedido={pedido}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;