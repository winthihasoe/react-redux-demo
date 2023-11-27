import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

// Step 1: if you want to get state from redux in react component create this mapStateToProps function first
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes, // map the state of the object
  };
};

// Step 2
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake(1)), // map the action creator
  };
};

// Step 3
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
