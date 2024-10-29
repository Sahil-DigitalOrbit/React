import Card from "react-bootstrap/Card";

export default function ProductTile({ prop }) {
  console.log(prop);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://m.media-amazon.com/images/I/61XdlI186PL._SL1500_.jpg"
      />
      <Card.Body>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>
          <p>{prop.price}</p>
          <p>{prop.ratings}</p>
        </Card.Text>
        <button>Add to Cart</button>
      </Card.Body>
    </Card>
  );
}
