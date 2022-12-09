import EscolherFilme from "./components/EscolherFilme";
import EscolherSessao from "./components/EscolherSessao";
import EscolherAssento from "./components/EscolherAssento";
import FecharPedido from "./components/FecharPedido"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EscolherFilme />} />
          <Route path="/sessoes/:idFilme" element={<EscolherSessao />} />
          <Route path="/assento/:idSessao" element={<EscolherAssento />} />
          <Route path="/sucesso" element={<FecharPedido/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;