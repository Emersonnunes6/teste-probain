import { CardDetail, Logo, PrincipalDiv, ButtonBack } from "../styles"
import logoStarWars from '../../img/starWars.png'
import { useContext, useEffect } from "react"
import { useParams, useHistory } from 'react-router-dom';
import GlobalStateContext from "../../globalState/globalStateContext"
import { onClickBack } from "../../routes/coordinator";

const DetailPlanet = () => {
    const {requests, states} = useContext(GlobalStateContext)
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        requests.getPlanetDetails(params.idPlanet)
    }, [])

    return (
        <PrincipalDiv>
            <Logo alt="logo" src={logoStarWars}/>
            <CardDetail>
                <h1>{states.detailsPlanet.name}</h1>
                <h3>Population: {states.detailsPlanet.population}</h3>
                <h3>Climate: {states.detailsPlanet.climate}</h3>
                <h3>Diameter: {states.detailsPlanet.diameter}</h3>
                <h3>Terrain: {states.detailsPlanet.terrain}</h3>
                <ButtonBack onClick={() => {onClickBack(history)}}>BACK TO HOMEPAGE</ButtonBack>
            </CardDetail>
        </PrincipalDiv>
    )
}

export default DetailPlanet