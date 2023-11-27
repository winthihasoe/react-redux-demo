import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h6>React hook</h6>
      <h2>Num of cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake(1))}>Buy Cake</button>
      <hr />
    </div>
  );
}

export default HooksCakeContainer;
