import {createContext, useReducer} from 'react'
import {reducer} from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvaider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromBasket = (id) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: id}})
    }

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    value.incrementQuantity = (id) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: id}})
    }

    value.decrementQuantity = (id) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: id}})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}