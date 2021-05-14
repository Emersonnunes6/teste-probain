import { CardDetail, Logo, PrincipalDiv, ButtonBack } from "../styles"
import { useParams, useHistory } from 'react-router-dom';
import logoStarWars from '../../img/starWars.png'
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../globalState/globalStateContext";
import { onClickBack } from "../../routes/coordinator";

const DetailCharacter = () => {
    const {requests, states} = useContext(GlobalStateContext)
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        requests.getCharacterDetails(params.idCharacter)
    }, [])


    return (
        <PrincipalDiv>
            <Logo alt="logo" src={logoStarWars}/>
            <CardDetail>
                <h1>{states.detailsCharacter.name}</h1>
                <h3>Height: {states.detailsCharacter.height}</h3>
                <h3>Mass: {states.detailsCharacter.mass}</h3>
                <h3>Hair Color: {states.detailsCharacter.hair_color}</h3>
                <h3>Gender: {states.detailsCharacter.gender}</h3>
                <ButtonBack onClick={() => {onClickBack(history)}}>BACK TO HOMEPAGE</ButtonBack>
            </CardDetail>
        </PrincipalDiv>
    )
}

export default DetailCharacter