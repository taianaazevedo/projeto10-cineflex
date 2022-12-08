import styled from "styled-components";


export default function EscolherSessao() {
    return (
        <Body>
            <SelecionarAssento>
                <p>Selecione a(s) poltrona(s)</p>
            </SelecionarAssento>
            <AssentosDisponiveis>
                <Assento>
                    <p>01</p>
                </Assento>               
            </AssentosDisponiveis>
            <Rodape>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg" alt="" />
                </div>
                <div>
                    <p>Titanic</p>
                    <p>Quinta-feira: 15h30</p>
                </div>
            </Rodape>
        </Body>
    )
}
const Body = styled.div`
    width: 100%;
    height: auto;
    margin: 0px auto 5px auto;
    background-color: #FCFCFC;
`
const SelecionarAssento = styled.div`
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
const AssentosDisponiveis = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

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

const Rodape = styled.div`
    width: 100%;
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