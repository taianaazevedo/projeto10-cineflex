import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FecharPedido({pedido}) {
    
    if(pedido === null){
        alert("Volte para a página inicial e tente novamente");
        return;
    }

    const {assento, assentoSelecionado, name, cpf} = pedido;


    return (
        <Body>
            <Pedido>
                <p>Pedido feito com sucesso!</p>
            </Pedido>
            <DetalheFilme data-test="movie-info">
                <p>Filme e sessão:</p>
                <h1>{assento.movie.title}</h1>
                <h1>{assento.day.date} - {assento.name}</h1>
            </DetalheFilme>
            <DetalheAssento data-test="seats-info">
                <p>Ingressos:</p>
                {assentoSelecionado.map((a) => (
                    <h1 key={a.id}>Assento {a.name}</h1>
                ))}              
                
            </DetalheAssento>
            <DetalheComprador data-test="client-info">
                <p>Comprador:</p>
                <h1>Nome: {name}</h1>
                <h1>CPF: {cpf}</h1>
            </DetalheComprador>
            <Link to="/">
                <Voltar data-test="go-home-btn">
                    Voltar para home
                </Voltar>
            </Link>
        </Body>
    )
}

const Body = styled.div`
    width:400px;
    height: auto;
    margin: 0px auto 5px auto;
    background-color: #FCFCFC;
    display: flex;
    flex-direction:column;
    align-items:center;
   
`
const Pedido = styled.div`
    width:400px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px auto 0px auto;
 p {        
     font-weight: 700;
     font-size: 25px; 
     color: #247A6B;
     letter-spacing: 0.04em;           
 }
`
const DetalheFilme = styled.div`
    width:370px;
    height: 100px;
    margin-left: 30px;
    margin-top:50px;
    p{
        color:#293845;
        font-size:25px;
        font-weight: 400;
    }
    h1{
        margin-top: 15px;
        margin-left: 20px;
        color: #293845;
        font-size:22px;
        font-weight: 300;
    }

`
const DetalheAssento = styled.div`
    width:370px;
    height: auto;
    margin-left: 30px;
    margin-top:50px;
    p{
        color:#293845;
        font-size:25px;
        font-weight: 400;
    }
    h1{
        margin-top: 15px;
        margin-left: 20px;
        color: #293845;
        font-size:22px;
        font-weight: 300;
    }

`
const DetalheComprador = styled.div`
    width:370px;
    height: auto;
    margin-left: 30px;
    margin-top:50px;
    p{
        color:#293845;
        font-size:25px;
        font-weight: 400;
    }
    h1{
        margin-top: 15px;
        margin-left: 20px;
        color: #293845;
        font-size:22px;
        font-weight: 300;
    }

`
const Voltar = styled.button`
    margin-top: 80px;
    margin-bottom:20px;
    width:225px;
    height:45px;
    background-color:#E8833A;
    border: none;
    border-radius:10px;
    color: white;
    font-size:15px;
    cursor:pointer;
`