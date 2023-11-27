import React from "react";
import { buyCoffee } from "../redux";
import { connect } from "react-redux";

function CoffeeContainer(props) {
  return (
    <div>
      <h3>Coffee stock: {props.numOfCoffee}</h3>
      <button onClick={props.buyCoffee}>Buy Coffee</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCoffee: state.coffee.numOfCoffee,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCoffee: () => dispatch(buyCoffee()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer);
