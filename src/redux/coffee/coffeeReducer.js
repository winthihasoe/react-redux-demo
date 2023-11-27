import { BUY_COFFEE } from "./coffeeTypes";

const initialState = {
  numOfCoffee: 30,
};

const CoffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COFFEE:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - 1,
      };

    default:
      return state;
  }
};

export default CoffeeReducer;
