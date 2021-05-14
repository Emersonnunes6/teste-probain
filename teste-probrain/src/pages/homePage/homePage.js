import { PrincipalDiv, Logo } from '../styles'
import logoStarWars from '../../img/starWars.png'
import IconsButtons from '../../components/buttons/IconsButtons'
import Characters from '../../components/characters/characters'
import { useState } from 'react'
import Planets from '../../components/planets/planets'
import Starships from '../../components/starships/starships'

const HomePage = () => {
    const [openWindow, setOpenWindow] = useState("")

    const renderWindow = () => {
        switch(openWindow){
            case "characters":
                return <Characters/>
            case "planets":
                return <Planets/>
            case "starships":
                return <Starships/>
            default:
                return
        }
    }

    return (
        <PrincipalDiv>
            <Logo alt={'logo'} src={logoStarWars}/>
            <IconsButtons
                openWindow={openWindow}
                setOpenWindow={setOpenWindow}
            />
            {renderWindow()}
        </PrincipalDiv>
    )
}

export default HomePage