const productReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) }
        case 'CHANGE_QTY':
            return {...state, cart: state.cart.filter(c => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty)}
        default:
            return state
    }
}

const filterReducer = (state, action) => {

    switch (action.type) {
        case 'SORT_FILTER':
            return {...state, sort: action.payload}
        case 'RATE_FILTER':
            return { ...state, byRating: action.payload }
        case 'SEARCH_FILTER':
            return {...state, bySearchQuery: action.payload}
        case 'CLEAR_FILTER':
            return { sort: "", byRating: 0, bySearchQuery: "" }
        default:
            return {...state}
    }
}

export {productReducer, filterReducer}