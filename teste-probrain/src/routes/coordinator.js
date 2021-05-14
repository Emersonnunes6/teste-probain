export const onClickDetailCharacter = (history, idCharacter) => {
    history.push(`/details/character/${idCharacter}`)
}

export const onClickDetailStarship = (history, idStarship) => {
    history.push(`/details/starship/${idStarship}`)
}

export const onClickDetailPlanet = (history, idPlanet) => {
    history.push(`/details/planet/${idPlanet}`)
}

export const onClickBack = (history) => {
    history.goBack()
}