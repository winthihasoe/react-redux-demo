import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of iceCream: {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice-cream</button>
    </div>
  );
}

// Step 1: if you want to get state from redux in react component create this mapStateToProps function first
const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream, // map the state of the object
  };
};

// Step 2
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()), // map the action creator
  };
};

// Step 3
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
