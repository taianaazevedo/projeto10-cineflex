import styled from "styled-components";

export default function Head() {
    return (
        <Header>
            <p>CINEFLEX</p>
        </Header>
    )
}

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