export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((item) => item.mainId !== payload.id),
            };
        case 'ADD_GOOD': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );

            let newOrder = null;

            if (itemIndex < 0) {
                const newGood = { ...payload, quantity: 1 };
                newOrder = [...state.order, newGood];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName,
            }
        };
        case 'PLUS_QUANTITY': {
            const newOrder = state.order.map((item) => {
                if (item.mainId === payload.id) {
                    const newQuantity = item.quantity + payload.n;
                    return {
                        ...item,
                        quantity: newQuantity >= 0 ? newQuantity : 0,
                    };
                } else {
                    return item;
                }
            });
            return {
                ...state,
                order: newOrder,
            }
        };
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };

        default:
            return state; // не один вариант из swich не выполнился
    }
}