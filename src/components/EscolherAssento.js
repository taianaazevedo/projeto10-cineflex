import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


export default function EscolherSessao() {
    const { idSessao } = useParams();
    const [assento, setAssento] = useState(undefined); // informações da sessão


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => setAssento(resposta.data));
        promise.catch((erro) => console.log(erro.response.data));
    }, [])

    if (!assento) return <div>Carregando...</div>

    return (
        <>
        <Body>
            <SelecionarAssento>
                <p>Selecione o(s) assento(s)</p>
            </SelecionarAssento>
            <AssentosDisponiveis>     
                {assento.seats.map((cadeira) => (
                    <Assento id={cadeira.id}>
                        <p>{cadeira.name}</p>
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

            <InfoNome>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome"></input>
            </InfoNome>
            <InfoCpf>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF"></input>
            </InfoCpf>
            <Reservar>
                Reservar assento(s)
            </Reservar>
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
   max-width:450px;
    height: 850px;
    margin: 0px auto 5px auto;
    background-color: #FCFCFC;
    display: flex;
    flex-direction:column;
`
const SelecionarAssento = styled.div`
    max-width:450px;
    min-width:300px;
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
    background-color: #C3CFD9;
    margin: 5px;
    width:25px;
    height: 25px;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #808F9D;
    p{
        font-size: 12px;
    }

`
const Legenda = styled.div`
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
        border: 1px solid #808F9D;
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
        border: 1px solid #808F9D;
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
    margin-left: 30px;
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
    margin-left: 30px;
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
`