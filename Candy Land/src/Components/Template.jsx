import { useNavigate } from "react-router-dom";
import ProductTile from "./ProductTile";

export default function Template({ prop }) {
  const navigate = useNavigate();
  const {
    head,
    data,
    wishlistItems,
    updateWishlist,
    cartItems,
    updateCart,
    isProduct,
  } = prop;

  const handleViewAll = () => {
    navigate("/products", { state: { heading: head } });
  };
  return (
    <div className="template-section">
      <div className="template-section-header-div">
        <h2 className="template-section-heading">{head}</h2>
        <button className="template-section-view-all" onClick={handleViewAll}>
          View All
        </button>
      </div>
      <div className="template-card-section">
        {data.map((item, idx) => {
          return (
            <ProductTile
              prop={{ item,isProduct,wishlistItems,updateWishlist,cartItems,updateCart}}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
