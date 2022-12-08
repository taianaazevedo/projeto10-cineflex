import styled from "styled-components";

export default function Head() {
    return (
        <Header>
            <p>CINEFLEX</p>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #C3CFD9;
    position:fixed;
    top:0px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    p {
        font-weight: 700;
        color: #E8833A;
        font-size: 35px;     
    }
`