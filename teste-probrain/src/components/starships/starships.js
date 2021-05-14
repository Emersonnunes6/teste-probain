import { Card, CardCategory, DivLoading } from "../styles"
import loadingStarship from '../../img/loadingStarship.gif'
import { useContext } from "react"
import GlobalStateContext from "../../globalState/globalStateContext"

const Starships = () => {
    const {states} = useContext(GlobalStateContext)

    return (
        <Card>
            {states.starships.length < 1 
            ? 
            <DivLoading>
                <img alt="loading" src={loadingStarship} ></img>
                <h2 style={{color: 'yellow'}}>LOADING...</h2>
            </DivLoading>
            :
            states.starships.map((starship) => {
                return (
                   <CardCategory key={starship.name}>
                        <h3>{starship.name}</h3>
                    </CardCategory>  
                )
            })        
            }
        </Card>
    )
}

export default Starships