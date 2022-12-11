import EscolherFilme from "./components/EscolherFilme";
import EscolherSessao from "./components/EscolherSessao";
import EscolherAssento from "./components/EscolherAssento";
import FecharPedido from "./components/FecharPedido";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [assentoSelecionado, setAssentoSelecionado] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  // const [corAssento, setCorAssento] = useState("#C3CFD9");


  function escolheAssento(cadeira) {
    if (cadeira.isAvailable === false) {
      alert("Esse assento não está disponível");
      return;
    }

    if (!assentoSelecionado.includes(cadeira)) {
      const listaAssento = [...assentoSelecionado, cadeira]
      setAssentoSelecionado(listaAssento);
      console.log(listaAssento);
     

    }




  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EscolherFilme />} />
          <Route path="/sessoes/:idFilme" element={<EscolherSessao />} />
          <Route path="/assento/:idSessao" element={<EscolherAssento
            assentoSelecionado={assentoSelecionado}
            // corAssento={corAssento}
            escolheAssento={escolheAssento}
            nome={nome}
            setNome={setNome}
            cpf={cpf}
            setCpf={setCpf} />} />
          <Route path="/sucesso" element={<FecharPedido
            assentoSelecionado={assentoSelecionado}
            setAssentoSelecionado={setAssentoSelecionado}
            nome={nome}
            setNome={setNome}
            cpf={cpf}
            setCpf={setCpf} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;