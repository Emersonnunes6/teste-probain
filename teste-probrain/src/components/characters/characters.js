import { useContext } from "react"
import { useHistory } from 'react-router-dom';
import GlobalStateContext from "../../globalState/globalStateContext"
import { ButtonDetails, Card, CardCategory, DivLoading } from "../styles"
import loading from '../../img/loading.gif'
import { onClickDetailCharacter } from "../../routes/coordinator";

const Characters = () => {
    const history = useHistory()
    const {states} = useContext(GlobalStateContext)

    return (
        <Card>
            {states.characters.length < 1 
            ? 
            <DivLoading>
                <img alt="loading" src={loading} ></img>
                <h2 style={{color: 'yellow'}}>LOADING...</h2>
            </DivLoading>
            :
            states.characters.map((character) => {
                return (
                   <CardCategory key={character.name}>
                        <h3>{character.name}</h3>
                        <ButtonDetails 
                            onClick={() => 
                            {onClickDetailCharacter(history, states.characters.indexOf(character) + 1)}}>
                            DETAILS
                        </ButtonDetails>
                    </CardCategory>  
                )
            })        
            }
        </Card>
    )
}

export default Characters