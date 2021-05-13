import { useContext } from "react"
import GlobalStateContext from "../../globalState/globalStateContext"
import { ButtonDetails, Card, CardCategory } from "../styles"
import loading from '../../img/loading.gif'

const Characters = (props) => {
    const {states} = useContext(GlobalStateContext)

    return (
        <Card>
            {states.characters === [] 
            ? 
            <img alt="loading" src={loading} ></img>
            :
            states.characters.map((character) => {
                return (
                   <CardCategory key={character.name}>
                        <h3>{character.name}</h3>
                        <ButtonDetails>DETAILS</ButtonDetails>
                    </CardCategory>  
                )
            })        
            }
        </Card>
    )
}

export default Characters