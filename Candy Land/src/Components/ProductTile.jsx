import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faStar } from "@fortawesome/free-regular-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";

export default function ProductTile({ prop }) {
  return (
    <Card style={{ marginRight: "1rem", border:"none",height:"25rem", minWidth: "15rem" }}>
      <div className="position-relative border h-75 card-image-div">
        <Card.Img className="card-image"
          variant="top"
          src="https://m.media-amazon.com/images/I/61XdlI186PL._SL1500_.jpg"
        />
        <span className="position-absolute card-rating-div"><FontAwesomeIcon icon={faStar}/>{prop.ratings}</span>
      </div>
      <Card.Body className="p-0">
        <div>
          <Card.Text>{prop.brand}</Card.Text>
          <Card.Title>{prop.name}</Card.Title>
          
        </div>

        
        <div className="product-card-bottom-div">
          <span className="d-inline-flex align-items-center col card-price-div">
            <FontAwesomeIcon icon={faDollar} className="m-1"/>
            {prop.price}
          </span>
          <button className="col-2 m-1">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="col-3 m-1">+Add</button>
        </div>
      </Card.Body>
    </Card>
  );
}
