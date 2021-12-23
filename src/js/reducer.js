export const initialState = {
	basket: [],
	user: null
};

export const ADD_TO_Basket = "ADD_TO_Basket";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

export const getBasketTotal = basket => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TO_Basket:
			return { ...state.basket, basket: [...state.basket, ...payload] };
		case REMOVE_FROM_BASKET: {
			const i = state.basket.findIndex(basketItem => basketItem.id === payload);
			let newBasket = [...state.basket];
			if (i >= 0) {
				newBasket.splice(i, 1);
				newBasket = [...newBasket];
			} else {
				console.warn(`Cant remove product (id: ${payload}) as its not in Basket`);
			}
			return { ...state, basket: newBasket };
		}

		case SET_USER:
			return {
				...state,
				user: payload
			};
		case LOGOUT:
			return {
				...state,
				user: null
			};

		default:
			return state;
	}
};

export default reducer;
