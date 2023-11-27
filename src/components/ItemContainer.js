import React from "react";
import { connect } from "react-redux";
import { buyCake, buyCoffee, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <p>
        Item container and make items and dispatch combine in one
        mapStateToProps and mapStateToDispatch
      </p>
      <h2>Item: {props.item}</h2>
      <button onClick={props.buy}>Buy Item</button>
      <hr />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let itemNum = null;
  if (ownProps.cake) {
    itemNum = state.cake.numOfCakes;
  } else if (ownProps.iceCream) {
    itemNum = state.iceCream.numOfIceCream;
  } else {
    itemNum = state.coffee.numOfCoffee;
  }
  return { item: itemNum };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let buyItem = null;
  if (ownProps.cake) {
    buyItem = () => dispatch(buyCake(1));
  } else if (ownProps.iceCream) {
    buyItem = () => dispatch(buyIceCream());
  } else {
    buyItem = () => dispatch(buyCoffee());
  }
  return { buy: buyItem };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
