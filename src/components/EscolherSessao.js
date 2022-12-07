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
            <Rodape>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg" alt=""/>                    
                </div>                
                <p>Titanic</p>                
            </Rodape>
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
const Rodape = styled.div`
    max-width: 375px;
    height: 115px;
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