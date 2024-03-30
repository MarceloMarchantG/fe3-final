
export const globalReducer = (state, action) => {
    let newState
    switch (action.type) {
        case "CHANGE_THEME":
            return { ...state, theme : state.theme === "light" ? "dark" : "light" }
        case "ADD_FAV":
            newState = {...state, favs: [...state.favs, action.payload],};
            localStorage.setItem('favoritos', JSON.stringify(newState.favs));
            return newState;
        case "REMOVE_FAV":
            newState = {...state, favs: state.favs.filter((favorito) => favorito.id !== action.payload.id),};
            localStorage.setItem('favoritos', JSON.stringify(newState.favs));
            return newState;
        case "SET_DENTISTAS":
            return { ...state, dentistas: action.payload }
        default:    
            return state
    }

}


