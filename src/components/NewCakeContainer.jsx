import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
      <hr />
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
    buyCake: (number) => dispatch(buyCake(number)), // map the action creator
  };
};

// Step 3
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
