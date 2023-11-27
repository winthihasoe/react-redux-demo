import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceCreamReducer from "./iceCream/iceCreamReducer";
import CoffeeReducer from "./coffee/coffeeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  coffee: CoffeeReducer,
  user: userReducer,
});

export default rootReducer;
