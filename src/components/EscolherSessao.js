import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";


export default function EscolherSessao() {
    // const { idFilme } = useParams();
    // const [filmeSelecionado, setFilmeSelecionado] = useState(undefined); // informações da sessão

    // useEffect(() => {
    //     const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
    //     promise.then(resposta => console.log(resposta.data));
    //     promise.catch(erro => console.log(erro.response.data));
    // }, [])


    return (
        <Body>
            <SelecionarSessao>
                <p>Selecione o horário</p>
            </SelecionarSessao>
            {/* inicio do map */}
            <Dia>
                <p>Quinta-feira: 08/12/2022</p>
            </Dia>
            <div>
                <Horario>
                    <div>
                        <p>20h30</p>
                    </div>
                </Horario>
            </div>
            {/* fim do map */}
            <Rodape>
                <div>
                    <img src="" alt="" />
                </div>
                <p>Titanic</p>
            </Rodape>
        </Body >
    )
}


const Body = styled.div`
    max-width: 100%;
    height: auto;
    margin: 0px auto 5px auto;
    background-color: #FCFCFC;
    div{
        display: flex;
    }
`
const SelecionarSessao = styled.div`
    max-width: 375px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto 0px auto;
    p {        
        font-weight: 400;
        font-size: 25px; 
        color: #293845;        
    }
`
const Dia = styled.div`
    max-width: 375px;
    margin-left: 20px;
    margin-top: 15px;
    p{
        font-size:20px;
        font-weight: 300;
        color: #293845; 
    }
`
const Horario = styled.div`
    margin-top: 20px;
    margin-left:20px;
    margin-bottom: 15px;
    width:80px;
    height: 40px;
    background-color: #E8833A;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:10px;

    p{
        color: white;
        font-size: 18px;
    }
`
const Rodape = styled.div`
    width: 100%;
    height: 115px;
    position: fixed;
    bottom: 0px;
    background-color: #C3CFD9;
    margin-top:300px;
    display: flex;
    align-items: center;    
    div{
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
    p{
        margin-left: 15px;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
    }
`