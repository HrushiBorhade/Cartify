import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title style={{ fontSize: "25px", textAlign: "center" }}>
            {prod.name}
          </Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span style={{ fontSize: "20px" }}>
              ₹ {prod.price.split(".")[0]}
            </span>

            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>

          {/* <Button variant="danger">Remove from Cart</Button> */}

          <Button
            // variant="warning"
            disabled={!prod.inStock}
            style={{ width: "100%", color: "white", fontWeight: "bold" }}
          >
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
