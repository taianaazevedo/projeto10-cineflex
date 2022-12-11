import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


export default function EscolherSessao(props) {
    const { nome, setNome, cpf, setCpf, escolheAssento, corAssento, assentoSelecionado } = props
    const { idSessao } = useParams();
    const [assento, setAssento] = useState(undefined); // informações da sessão


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => setAssento(resposta.data));
        promise.catch((erro) => console.log(erro.response.data));
    }, [])

    if (assento === undefined) return <div>Carregando...</div>

    function reservarAssento(e){
        
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
                        onClick={() => escolheAssento(assento)} 
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
                        value={nome} 
                        onChange={e => setNome(e.target.value)} 
                        required>
                        </input>
                    </InfoNome>
                    <InfoCpf>
                        <p>CPF do comprador:</p>
                        <input placeholder="Digite seu CPF" 
                        value={cpf} 
                        onChange={e => setCpf(e.target.value)} 
                        required>
                        </input>
                    </InfoCpf>
                    <Link to="/sucesso">
                        <Reservar type="submit">
                            Reservar assento(s)
                        </Reservar>
                    </Link>
                </form>
            </Body>
            <Rodape>
                <div>
                    <img src={assento.movie.posterURL} alt={assento.movie.title} />
                </div>
                <div>
                    <p>{assento.movie.title}</p>
                    <p>{assento.day.weekday}: {assento.day.date}</p>
                </div>
            </Rodape>
        </>

    )
}
const Body = styled.div`
   max-width:400px;
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
    width:400px;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width:400px;
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
    border: 1px solid ${props => props.cor};
    cursor:pointer;
    p{
        font-size: 12px;
    }

`
const Legenda = styled.div`
    width: 400px;
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
const InfoNome = styled.div`
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
const InfoCpf = styled.div`
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