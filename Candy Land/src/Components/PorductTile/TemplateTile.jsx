import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faCheck, faHeart as filledHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function TemplatePageTile({ item, isItemInList, toggleItem, wishlistItems, cartItems, updateWishlist, updateCart,isProduct,handleViewAll,handlePoductPage }) {
  return (
    <div onClick={isProduct?handlePoductPage:handleViewAll} className="template-tile product-card">
      <div className="template-image-div">
        <img src='https://m.media-amazon.com/images/I/61XdlI186PL._SL1500_.jpg' alt={item.name} className="template-image" />
        
        {isProduct&&<span className="position-absolute card-rating-div">
            <FontAwesomeIcon icon={faStar} /> {item.ratings}
          </span>}
        </div>
      <div className={!isProduct?'d-flex justify-content-center align-items-center template-details': "template-details"}>
        {isProduct&&(
            <span className="template-details-product-header">
                <p>{item.brand}</p>
                <p>{item.weight}</p>
            </span>)}
        <p className='card-name'>{item.name}</p>
            
        {isProduct&&(<div className="template-details-product-bottom">
            
            <span className="card-price">
              <FontAwesomeIcon icon={faDollar} /> {item.price}
            </span>
            <div className="template-details-product-bottom-buttons">
            <button  className="mx-1" onClick={(e) => {
                e.stopPropagation();
                toggleItem(wishlistItems, updateWishlist);
                }}>
              <FontAwesomeIcon icon={isItemInList(wishlistItems) ? filledHeart : faHeart} />
            </button>
            <button onClick={(e) => {
                e.stopPropagation();
                toggleItem(cartItems, updateCart)
            }}>
              {isItemInList(cartItems) ? <FontAwesomeIcon icon={faCheck} /> : "+ Add"}
            </button>
            </div>
        </div>)}
        
      </div>
    </div>
  );
}
