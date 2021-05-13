import styled from 'styled-components'

export const Card = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    min-height: 0vh;
    width: 60vw;
    margin: 2vh;
`

export const CardCategory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 20vh;
    margin: 3vh;
    background-color: black;
    border-radius: 10px;
    border: 2px yellow solid;
h3 {
    color: white;
    font-family: 'Josefin Sans';
}

h5 {
    margin: 0;
    color: white;
}
`

export const ButtonDetails = styled.button`
    height: 5vh;
    width: 10vh;
    background-color: black;
    color: white;
    border-radius: 5px;
    border: 2px yellow solid;
    cursor: pointer;
:hover{
    background-color: yellow;
    color: black;
}
`