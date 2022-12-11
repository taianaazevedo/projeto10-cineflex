import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FecharPedido(props) {
    const { nome, setNome, cpf, setCpf, assentoSelecionado, setAssentoSelecionado } = props

    return (
        <Body>
            <Pedido>
                <p>Pedido feito com sucesso!</p>
            </Pedido>
            <DetalheFilme>
                <p>Filme e sessão:</p>
                <h1>Filme</h1>
                <h1>Data</h1>
            </DetalheFilme>
            <DetalheAssento>
                <p>Ingressos:</p>
                <h1>Assento 1</h1>
                <h1>Assento 2</h1>
            </DetalheAssento>
            <DetalheComprador>
                <p>Comprador:</p>
                <h1>Nome: blablabla</h1>
                <h1>CPF: 123456789</h1>
            </DetalheComprador>
            <Link to="/">
                <Voltar>
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