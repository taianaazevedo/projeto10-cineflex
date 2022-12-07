import styled from "styled-components";
import Header from "./Header"

export default function EscolherSessao() {
    return (
        <Body>
            <Header />
            <SelecionarAssento>
                <p>Selecione a(s) poltrona(s)</p>
            </SelecionarAssento>
        </Body>
    )
}
 const Body = styled.div`
    max-width: 375px;
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