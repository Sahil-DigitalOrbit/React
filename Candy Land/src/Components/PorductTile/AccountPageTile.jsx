import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDollar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { globalContext } from "../../utils/context";

export default function AccountPageTile({ item, showRateProductSection, isItemInList,handlePoductPage}) {
  let{cartItems,handleToggleItem,}=useContext(globalContext);
  return (
    <div  className="account-page-tile" onClick={handlePoductPage}>
      <div className="account-page-tile-image-div"><img src={item.image?item.image[0]:''} alt={item.name} className="account-tile-image" /></div>
      <div className="account-template-details">
            
        <span className="account-card-delivered text-start">
          <p>Delivered:</p><p>{item.date}</p>
        </span>
        <span className="template-details-product-header">
            <p>{item.brand}</p>
            <p>{item.weight}</p>
        </span>
        <p className='card-name text-start'>{item.name}</p>
        <span className="card-price account-card-price text-start">
          <FontAwesomeIcon icon={faDollar} /> {item.price}
        </span>
        <div className="account-template-details-product-bottom">
            <button onClick={(e) => {
              e.stopPropagation();
              showRateProductSection(item)}}>Rate</button>
          <button onClick={(e) => {
            e.stopPropagation();
            handleToggleItem('cart', item)}}>
            {isItemInList(cartItems) ? <FontAwesomeIcon icon={faCheck} /> : "Reorder"}
          </button>
            
        </div>
        
      </div>
      
      </div>
  );
}
