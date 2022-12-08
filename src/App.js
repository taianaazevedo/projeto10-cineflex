import EscolherFilme from "./components/EscolherFilme";
import EscolherSessao from "./components/EscolherSessao";
import EscolherAssento from "./components/EscolherAssento";
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>      
      <Header />
      <Routes>        
        <Route path="/" element={<EscolherFilme/>} />
        <Route path="/sessoes/:idFilme" element={<EscolherSessao/>}/>
        <Route path="/assento/:idSessao" element={<EscolherAssento />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;