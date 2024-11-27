import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faCheck, faHeart as filledHeart, faStar, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { globalContext } from "../../utils/context";

export default function TemplatePageTile({ item, isItemInList, isProduct,handleViewAll,handlePoductPage }) {
  let{wishlistItems,cartItems,handleToggleItem}=useContext(globalContext);
  return (
    <div onClick={isProduct?handlePoductPage:handleViewAll} className="product-card">
      <div className="template-image-div">
        <img src={isProduct?item.image[0]:item.image} alt={item.name} className="template-image" />
        
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
        <p className='text-start card-name'>{item.name}</p>
            
        {isProduct&&(<div className="template-details-product-bottom">
            
            <span className="card-price">
              <FontAwesomeIcon icon={faDollar} /> {item.price}
            </span>
            <div className="template-details-product-bottom-buttons">
            <button  className="mx-1" onClick={(e) => {
                e.stopPropagation();
                handleToggleItem('wishlist',item);
                }}>
              <FontAwesomeIcon icon={isItemInList(wishlistItems) ? filledHeart : faHeart} />
            </button>
            <button onClick={(e) => {
                e.stopPropagation();
                handleToggleItem('cart', item)
            }}>
              <FontAwesomeIcon icon={isItemInList(cartItems) ? faCheck  : faBagShopping}/>
            </button>
            </div>
        </div>)}
        
      </div>
    </div>
  );
}
