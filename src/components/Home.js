import React from "react";
import { CartState } from "../context/Context";
function Home() {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return <div>Home</div>;
}

export default Home;
