import { Link } from "react-router-dom";
import ProductTile from "./ProductTile";

export default function Template({ prop}) {
  let{ head,data, goTo, wishlistItems,updateWishlist ,cartItems,updateCart,isProduct}=prop;

  return (
    <div className="template-section">
      <div className="template-section-header-div"><h2 className="template-section-heading">{head}</h2>
        <Link className="template-section-view-all" to={goTo}>View All</Link>
      </div>
      <div className="template-card-section" >
      {data.map((item,idx) => {
        return <ProductTile prop={{item,isProduct,goTo,wishlistItems,updateWishlist ,cartItems,updateCart}} key={idx} />;
      })}
      </div>
    </div>
  );
}
