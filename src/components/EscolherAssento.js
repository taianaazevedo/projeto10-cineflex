import styled from "styled-components";
import Header from "./Header"

export default function EscolherSessao() {
    return (
        <Body>
            <Header />
            <SelecionarAssento>
                <p>Selecione a(s) poltrona(s)</p>
            </SelecionarAssento>
            <div>
            <Assento>                
                    <p>01</p>                
            </Assento>
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
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
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