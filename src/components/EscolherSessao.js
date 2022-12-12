import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";


export default function EscolherSessao() {
    const { idFilme } = useParams();
    const [filme, setFilme] = useState(undefined); // informações da sessão


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promise.then((resposta) => setFilme(resposta.data));
        promise.catch((erro) => console.log(erro.response.data));
    }, [])

    if (!filme) return <div>Carregando...</div>


    return (
        <>
            <Body>
                <SelecionarSessao>
                    <p>Selecione o horário</p>
                </SelecionarSessao>

                {filme.days.map((filme) => (
                    <>
                        <Dia key={filme.id} data-test="movie-day">
                            <p>{filme.weekday}: {filme.date}</p>
                        </Dia>
                        <div>
                            {filme.showtimes.map((horario) => (
                                <Link to={`/assento/${horario.id}`} data-test="showtime">
                                    <Horario key={horario.id}>
                                        <div>
                                            <p>{horario.name}</p>
                                        </div>
                                    </Horario>
                                </Link>
                            ))}
                        </div>
                    </>
                ))}
            </Body >
            <Rodape data-test="footer">
                <div>
                    <img src={filme.posterURL} alt={filme.title} key={filme.id} />
                </div>
                <p>{filme.title}</p>
            </Rodape>
        </>
    )
}

const Body = styled.div`
    min-width: 375px;
    max-width: 600px;
    margin: 0px auto 5px auto;
    background-color: #FCFCFC;
    div{
        display: flex;
    }
`
const SelecionarSessao = styled.div`
    width: 100%;
    height: 80px;
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
const Dia = styled.div`
    max-width: 100%;
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
    cursor:pointer;

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