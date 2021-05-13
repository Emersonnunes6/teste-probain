import { IconsDiv, Icon } from './styles'
import deathStar from '../../img/deathstar.png'
import darthVader from '../../img/darthvader.png'
import planet from '../../img/planet.png'
import { useContext } from 'react'
import GlobalStateContext from '../../globalState/globalStateContext'

const IconsButtons = (props) => {
    const {requests} = useContext(GlobalStateContext)

    const onClickCharacter = () => {
        if(props.openWindow === ""){
            requests.getCharacters()
            props.setOpenWindow("characters")
        }else if(props.openWindow !== "characters" && props.openWindow !== ""){
            props.setOpenWindow("characters")
        }
        else if(props.openWindow === "characters"){
            props.setOpenWindow("")
        }
    }

    const onClickStarship = () => {
        if(props.openWindow === ""){
            requests.getStarships()
            props.setOpenWindow("starships")
        }else if(props.openWindow !== "starships" && props.openWindow !== ""){
            props.setOpenWindow("starships")
        }
        else if(props.openWindow === "starships"){
            props.setOpenWindow("")
        }
    }

    const onClickPlanet = () => {
        if(props.openWindow === ""){
            requests.getPlanets()
            props.setOpenWindow("planets")
        }else if(props.openWindow !== "planets" && props.openWindow !== ""){
            props.setOpenWindow("planets")
        }
        else if(props.openWindow === "planets"){
            props.setOpenWindow("")
        }
    }

    return (
        <IconsDiv>
            <Icon onClick={onClickCharacter}>
                <img alt={"darth-vader"} src={darthVader}></img>
                <p>Characters</p>
            </Icon>
            <Icon onClick={onClickStarship}>
                <img alt={"death-star"} src={deathStar}></img>
                <p>Starships</p>
            </Icon>
            <Icon onClick={onClickPlanet}>
                <img alt={"planet"} src={planet}></img>
                <p>Planets</p>
            </Icon>
        </IconsDiv>
    )
}

export default IconsButtons