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


  function escolheAssento(assento) {
    if (assento.isAvailable === false) {
      alert("Esse assento não está disponível");
      return;
    }
    if (!assentoSelecionado.includes(assento)) {
      const listaAssento = [...assentoSelecionado, assento]
      setAssentoSelecionado(listaAssento);
      console.log(listaAssento);   

    } else {
      const filtraAssento = assentoSelecionado.filter((s) => !(s.id === assento.id));
      setAssentoSelecionado([...filtraAssento]);
      return;
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