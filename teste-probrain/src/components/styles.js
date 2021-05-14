import styled from 'styled-components'

export const Card = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    min-height: 0vh;
    width: 60vw;
    margin: 2vh;
@media screen and (min-width: 320px) and (max-width: 700px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;
}
@media screen and (min-width: 700px) and (max-width: 800px){
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
}
@media screen and (min-width: 800px) and (max-width: 1000px){
    grid-template-columns: auto auto auto;
}
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
    cursor: pointer;
h3 {
    color: white;
    font-family: 'Josefin Sans';
}
:hover{
    background-color: grey;
    border: 2px black solid;
h3 {
    color: black;
}
button {
    background-color: yellow;
    color: black;
}
}
@media screen and (min-width: 320px) and (max-width: 800px){
    height: 30vh;
    width: 30vh;
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
@media screen and (min-width: 320px) and (max-width: 800px){
    width: 25vw;
    height: 8vh;
}
`

export const DivLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`