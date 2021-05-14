import styled from 'styled-components'

export const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 85vh;
    max-width: 100vw;
    margin: 0;
    background-image: url("https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png");
` 

export const Logo = styled.img`
    margin-top: 2vh;
    height: 15vh;
    width: 25vw;
@media screen and (min-width: 320px) and (max-width: 600px){
    height: 20vh;
    width: 55vw;
}
`

export const CardDetail = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    height: 60vh;
    width: 30vw;
    margin: 2vh;
    padding: 1vh;
    background-color: black;
    border: 2px yellow solid;
h1 {
   color: white;
   margin: 2vh;
}
h3 {
    color: yellow;
}
@media screen and (min-width: 320px) and (max-width: 600px){
    height: 80vh;
    width: 80vw;
}
@media screen and (min-width: 600px) and (max-width: 900px){
    height: 70vh;
    width: 60vw;
}
`

export const ButtonBack = styled.button`
    height: 5vh;
    width: 15vh;
    background-color: black;
    color: white;
    border-radius: 5px;
    border: 2px yellow solid;
    cursor: pointer;
:hover{
    background-color: yellow;
    color: black;
}
@media screen and (min-width: 320px) and (max-width: 600px){
    height: 10vh;
    width: 30vw;
}
`
