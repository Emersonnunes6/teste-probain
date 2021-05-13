import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'
import { BASE_URL } from './baseURL'

const GlobalState = (props) => {

    const [characters, setCharacters] = useState([])
    const [starships, setStarships] = useState([])
    const [planets, setPlanets] = useState([])

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

    console.log(characters)
    
    const requests = {getCharacters, getStarships, getPlanets}
    const states = {characters, starships, planets}

    const data = {requests, states}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState