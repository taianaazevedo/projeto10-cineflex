import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PaginaInicial() {

    // const [filme, setFilme] = useState(null)

    // useEffect(() => {
    //     const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
    //     promise.then(resposta => setFilme(resposta.data))
    //     promise.catch(erro => console.log(erro.response.data))
    // }, [])

    return (
        <Inicio>
            <Header>
                <p>CINEFLEX</p>
            </Header>
            <SelecionarFilme>
                <p>Selecione o filme</p>
            </SelecionarFilme>
            <ListaFilmes>
                {/* {filme.map((filme) => (
                    <Filme key={filme.id}>
                        <img src={filme.posterURL} alt={filme.title} />
                    </Filme>))} */}
            </ListaFilmes>
        </Inicio>
    )
}

const Inicio = styled.div`
    max-width: 375px;
    height: 800px;
    margin: 0px auto 5px auto;
`
const SelecionarFilme = styled.div`
    max-width: 375px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto 0px auto;
    p {        
        font-weight: 300;
        font-size: 25px;        
    }
`
const Header = styled.div`
    max-width: 375px;
    height: 70px;
    background-color: #C3CFD9;
    margin: 0px auto 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-weight: 700;
        color: #E8833A;
        font-size: 35px;        
    }
`
const ListaFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    max-width: 375px;
    margin: 5px auto 0px auto;
`
const Filme = styled.div`
    margin-bottom: 10px;
    width: 145px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img {
        width: 130px;
        height: 190px;  
        border-radius: 3px;      
    }
`