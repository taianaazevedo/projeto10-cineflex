import styled from "styled-components";
import Header from "./Header"

export default function EscolherSessao() {
    return (
        <Body>
            <Header />
            <SelecionarSessao>
                <p>Selecione o horário</p>
            </SelecionarSessao>
            <Dia>
                <p>Quinta-feira: 24/06/2022</p>
            </Dia>
            <div>
                <Horario>
                    <div>
                        <p>20h30</p>
                    </div>
                </Horario>
                <Horario>
                    <div>
                        <p>15h30</p>
                    </div>
                </Horario>
            </div>
        </Body>
    )
}


const Body = styled.div`
    max-width: 375px;
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