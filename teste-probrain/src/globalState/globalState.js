import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'
import { BASE_URL } from './baseURL'

const GlobalState = (props) => {

    const [characters, setCharacters] = useState([])
    const [starships, setStarships] = useState([])
    const [planets, setPlanets] = useState([])
    const [detailsCharacter, setDetailsCharacter] = useState([])
    const [detailsStarship, setDetailsStarship] = useState([])
    const [detailsPlanet, setDetailsPlanet] = useState([])

    const getCharacters = () => {
        axios.get(BASE_URL+"people/")
        .then((res) => {
            setCharacters(res.data.results)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const getStarships = () => {
        axios.get(BASE_URL+"starships/")
        .then((res) => {
            setStarships(res.data.results)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const getPlanets = () => {
        axios.get(BASE_URL+"planets/")
        .then((res) => {
            setPlanets(res.data.results)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const getCharacterDetails = (id) => {
        axios.get(BASE_URL+`people/${id}`)
        .then((res) => {
            setDetailsCharacter(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const getStarshipDetails = (id) => {
        axios.get(BASE_URL+`starships/${id}/`)
        .then((res) => {
            setDetailsStarship(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const getPlanetDetails = (id) => {
        axios.get(BASE_URL+`planets/${id}`)
        .then((res) => {
            setDetailsPlanet(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }
    
    const requests = {getCharacters, getStarships, getPlanets, getCharacterDetails, getStarshipDetails, getPlanetDetails}
    const states = {characters, starships, planets, detailsCharacter, detailsStarship, detailsPlanet}

    const data = {requests, states}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState