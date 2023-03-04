import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "../components/SingleProduct";
import Filters from "./Filters";
import "./styles.css";
function Home() {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })}
      </div>
    </div>
  );
}

export default Home;
