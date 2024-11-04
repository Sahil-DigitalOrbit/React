import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";

export default function ProductTile({ prop }) {
  let { item, isProduct, goTo } = prop;

  return (
    <Card className="template-card"
      style={{
        marginBottom:'3rem',
        marginRight: "1rem",
        border: "none",
        height: "25rem",
        minWidth: "13rem",
        maxWidth:'13rem'
      }}
    >
      <div className="position-relative border h-75 card-image-div">
        <Card.Img
          className="card-image"
          variant="top"
          src="https://m.media-amazon.com/images/I/61XdlI186PL._SL1500_.jpg"
        />
        {isProduct ? (
          <span className="position-absolute card-rating-div">
            <FontAwesomeIcon icon={faStar} />
            {item.ratings}
          </span>
        ) : (
          ""
        )}
      </div>
      {isProduct ? (
        <Card.Body className="p-0">
          <div>
            <Card.Text className="d-flex justify-content-between"><span>{item.brand}</span><span>{item.weight}</span></Card.Text>
            <Card.Title className="text-start">{item.name}</Card.Title>
          </div>

          <div className="product-card-bottom-div">
            <span className="d-inline-flex align-items-center col card-price-div">
              <FontAwesomeIcon icon={faDollar} className="m-1" />
              {item.price}
            </span>
            <button className="col-2 m-1">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="col-3 m-1">+Add</button>
          </div>
        </Card.Body>
      ) : (
        <Card.Body className="p-0 d-flex justify-content-center align-items-center">
            <Card.Title>{item.name}</Card.Title>
          
        </Card.Body>
      )}
    </Card>
  );
}
