import { useContext } from "react"
import { useHistory } from 'react-router-dom';
import GlobalStateContext from "../../globalState/globalStateContext"
import { Card, CardCategory, ButtonDetails, DivLoading } from "../styles"
import loadingPlanet from '../../img/loadingPlanet.gif'
import { onClickDetailPlanet } from "../../routes/coordinator";

const Planets = () => {
    const history = useHistory()
    const {states} = useContext(GlobalStateContext)

    return (
        <Card>
            {states.planets.length < 1 
            ? 
            <DivLoading>
                <img alt="loading" src={loadingPlanet} ></img>
                <h2 style={{color: 'yellow'}}>LOADING...</h2>
            </DivLoading>
            :
            states.planets.map((planet) => {
                return (
                   <CardCategory key={planet.name}>
                        <h3>{planet.name}</h3>
                        <ButtonDetails 
                            onClick={() => 
                            {onClickDetailPlanet(history, states.planets.indexOf(planet) + 1)}}> 
                            DETAILS</ButtonDetails>
                    </CardCategory>  
                )
            })        
            }
        </Card>
    )
}

export default Planets