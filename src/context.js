import { createContext, useReducer } from 'react';
import { reducer } from './reducer.js'

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({ children }) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };
    value.removeFromBacket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
    };
    value.addGood = (good) => {
        dispatch({ type: 'ADD_GOOD', payload: good })
    };
    value.plusQuantity = (itemId, n) => {
        dispatch({ type: 'PLUS_QUANTITY', payload: { id: itemId, n: n } })
    };
    value.handleBasketShow = () => {
        dispatch({ type: 'HANDLE_BASKET_SHOW' });
    };
    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data });
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}