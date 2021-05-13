import styled from 'styled-components'

export const IconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
    height: 100px;
    width: 100vw;
` 

export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;
    height: 110px;
    width: 110px;
    background-color: grey;
    border-radius: 10px;
    border: 2px yellow solid;
    margin: 5px;
    cursor: pointer;
    
:hover{
    background-color: yellow;
    border: 2px black solid;
}
    
img {
    height: 80px;
    width: 80px;
}
p {
    margin: 2px;
}

`
