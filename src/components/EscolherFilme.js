import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function EscolherFilme() {

    const [filme, setFilme] = useState(undefined)

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(resposta => setFilme(resposta.data))
        promise.catch(erro => console.log(erro.response.data))
    }, [])

    if (filme === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <>
            <Body>
                <SelecionarFilme>
                    <p>Selecione o filme</p>
                </SelecionarFilme>
                <ListaFilmes>
                    {filme.map((filme) => (
                         <Filme key={filme.id}>
                            <Link to={`/sessoes/${filme.id}`}>
                            <img src={filme.posterURL} alt={filme.title} />
                            </Link>
                        </Filme>))}
                </ListaFilmes>
            </Body>
        </>
    )
}

const Body = styled.div`
    max-width: 400px;
    height: 800px;
    margin: 0px auto 5px auto;
    background-color: #FCFCFC;
`
const SelecionarFilme = styled.div`
   
    width:100%;
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
const ListaFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width:100%;
    margin: 10px auto 0px auto;
`
const Filme = styled.div`
    margin-bottom: 15px;
    width: 150px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;
    img {
        width: 130px;
        height: 185px;  
        border-radius: 3px;      
    }
`