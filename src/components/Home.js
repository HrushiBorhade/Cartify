import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "../components/SingleProduct";
import "./styles.css";
function Home() {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      {/* <Filters /> */}
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} />;
        })}
      </div>
    </div>
  );
}

export default Home;
