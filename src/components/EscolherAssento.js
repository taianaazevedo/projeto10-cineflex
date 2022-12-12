import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EscolherSessao({setPedido}) {
    const { idSessao } = useParams();
    const [assento, setAssento] = useState(undefined); // informações da sessão
    const [assentoSelecionado, setAssentoSelecionado] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => setAssento(resposta.data));
        promise.catch((erro) => console.log(erro.response.data));
    }, [])

    if (assento === undefined){
        return <div>Carregando...</div>  
    }   
  
  
    function escolheAssento(assento) {
      if (assento.isAvailable === false) {
        alert("Esse assento não está disponível");
        return;
      }
      if (!assentoSelecionado.includes(assento)) {
        const listaAssento = [...assentoSelecionado, assento]
        setAssentoSelecionado(listaAssento); 
        return;
  
      } else {
        const filtraAssento = assentoSelecionado.filter((cadeira) => !(cadeira.id === assento.id));
        setAssentoSelecionado([...filtraAssento]);
        return;
      }
    }

    function reservarAssento(e){
        e.preventDefault();
        if(assentoSelecionado.length === 0){
            alert("Você deve selecionar pelo menos um assento");
            return;
        }
        const infos = {
            ids: assentoSelecionado.map((e) => e.id) , 
            name, 
            cpf
        }
        const url = ("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many")
        const promise = axios.post(url, infos);
        promise.then((resposta) => {
            const detalhes = {
                name, 
                cpf, 
                assentoSelecionado,
                assento
            }
            setPedido(detalhes)
            navigate("/sucesso")
        });
        promise.catch((erro) => alert("Por favor, tente reservar seus assentos novamente."))
     }
   

    return (
        <>
            <Body>
                <SelecionarAssento>
                    <p>Selecione o(s) assento(s)</p>
                </SelecionarAssento>
                <AssentosDisponiveis>
                    {assento.seats.map((assento) => (
                        <Assento key={assento.id} 
                        data-test="seat"
                        onClick={() => escolheAssento(assento)} 
                        corBorda={assentoSelecionado.includes(assento) ? "#0E7D71" : (!assento.isAvailable ? "#F7C52B" : "#7B8B99")}
                        cor={assentoSelecionado.includes(assento) ? "#1AAE9E" : (!assento.isAvailable ? "#FBE192" : "#C3CFD9")}>
                            <p>{assento.name}</p>
                        </Assento>
                    ))}
                </AssentosDisponiveis>

                <Legenda>
                    <Selecionado>
                        <div></div>
                        <p>Selecionado</p>
                    </Selecionado>
                    <Disponivel>
                        <div></div>
                        <p>Disponível</p>
                    </Disponivel>
                    <Indisponivel>
                        <div></div>
                        <p>Indisponível</p>
                    </Indisponivel>

                </Legenda>
                <form onSubmit={reservarAssento}>
                    <InfoNome>
                        <p>Nome do comprador:</p>
                        <input placeholder="Digite seu nome" 
                        data-test="client-name"
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        required>
                        </input>
                    </InfoNome>
                    <InfoCpf>
                        <p>CPF do comprador:</p>
                        <input placeholder="Digite seu CPF" 
                        data-test="client-cpf"
                        value={cpf} 
                        onChange={e => setCpf(e.target.value)} 
                        required
                        maxLength="11"
                        minLength="11"
                        >
                        </input>
                    </InfoCpf>
                        <Reservar type="submit" data-test="book-seat-btn">
                            Reservar assento(s)
                        </Reservar>
                </form>
            </Body>
            <Rodape data-test="footer">
                <div>
                    <img src={assento.movie.posterURL} alt={assento.movie.title} />
                </div>
                <div>
                    <p>{assento.movie.title}</p>
                    <p>{assento.day.weekday}: {assento.name}</p>
                </div>
            </Rodape>
        </>

    )
}
const Body = styled.div`
    max-width: 375px;
    height: 850px;
    margin: 0px auto 5px auto;
    background-color: #FCFCFC;
    display: flex;
    flex-direction:column;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const SelecionarAssento = styled.div`
    width:100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px auto 0px auto;
 p {        
     font-weight: 400;
     font-size: 25px; 
     color: #293845;        
 }
`
const AssentosDisponiveis = styled.div`
   max-width:375px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-left:auto;
    margin-right:auto;
`
const Assento = styled.div`
    background-color: ${props => props.cor};
    margin: 5px;
    width:25px;
    height: 25px;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.corBorda};
    cursor:pointer;
    p{
        font-size: 12px;
    }

`
const Legenda = styled.div`
    min-width: 375px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
`
const Selecionado = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    div{
        background-color: #1AAE9E;
        margin: 5px;
        width:25px;
        height: 25px;
        border-radius:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #0E7D71;
    }
    p{
        font-size: 12px;
    }
`
const Disponivel = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
      div{
        background-color: #C3CFD9;
        margin: 5px;
        width:25px;
        height: 25px;
        border-radius:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #808F9D;
    }
    p{
        font-size: 12px;
    }
`
const Indisponivel = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
      div{
        background-color: #FBE192;
        margin: 5px;
        width:25px;
        height: 25px;
        border-radius:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #F7C52B;
    }
    p{
        font-size: 12px;
    }
`
const Rodape = styled.div`
    width:100%;
    height: 115px;
    background-color: #C3CFD9;
    position:fixed;
    bottom:0px;    
    display: flex;
    align-items: center;
    
    div:nth-child(1){
        margin-left: 15px;
        width:65px;
        height: 90px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width:50px;
            height: 75px;
            border-radius:3px;
        }
    }
    div:nth-child(2){
        margin-left: 10px;
        display:block;
    
    p{
        font-weight: 400;
        font-size: 22px;
        color: #293845;
    }
}
`
const InfoNome = styled.label`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    p{
        color:#293845;
        font-size: 18px;
    }
    input {
        border: 1px;
        border-radius:5px;
        margin-top: 5px;
        width:325px;
        height: 40px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`
const InfoCpf = styled.label`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom:15px;
    p{
        color:#293845;
        font-size: 18px;
    }
    input {
        border: 1px;
        border-radius:5px;
        margin-top: 5px;
        width:325px;
        height: 40px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`
const Reservar = styled.button`
    margin-left:auto;
    margin-right:auto;
    margin-top: 70px;
    width:225px;
    height:45px;
    background-color:#E8833A;
    border: none;
    border-radius:10px;
    color: white;
    font-size:15px;
    cursor:pointer;
`