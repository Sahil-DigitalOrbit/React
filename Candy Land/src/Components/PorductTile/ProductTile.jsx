import AccountPageTile from "./AccountPageTile";
import ProductPageTile from "./ProductPageTile";
import TemplatePageTile from "./TemplateTile";
import { useNavigate } from "react-router-dom";

export default function ProductTile({ prop }) {
  const {
    item,
    isProduct,
    wishlistItems,
    updateWishlist,
    cartItems,
    updateCart,
    isAccountPage,
    showRateProductSection,
    isProductPage,
    allRatingReviews,
  } = prop;
  
  const navigate = useNavigate();
  const handleViewAll = () =>
    navigate("/products", { state: { heading: item.name, type: "aslk" } });
  
  const handlePoductPage = () =>
    navigate("/about-product", { state: { item } });

  const toggleItem = (list, updateFunc) =>
    updateFunc(list.includes(item.id) ? list.filter(c => c !== item.id) : [...list, item.id]);
  
  const isItemInList = (list) => list.includes(item.id);

  if (isAccountPage) {
    return (
      <AccountPageTile
        item={item}
        wishlistItems={wishlistItems}
        updateWishlist={updateWishlist}
        cartItems={cartItems}
        updateCart={updateCart}
        showRateProductSection={showRateProductSection}
        isItemInList={isItemInList}
        toggleItem={toggleItem}
        handlePoductPage={handlePoductPage}
      />
    );
  }

  if (isProductPage) {
    return (
      <ProductPageTile
        item={item}
        wishlistItems={wishlistItems}
        updateWishlist={updateWishlist}
        cartItems={cartItems}
        updateCart={updateCart}
        isItemInList={isItemInList}
        toggleItem={toggleItem}
        allRatingReviews={allRatingReviews}
      />
    );
  }

  return (
    <TemplatePageTile
      item={item}
      wishlistItems={wishlistItems}
      updateWishlist={updateWishlist}
      cartItems={cartItems}
      updateCart={updateCart}
      isItemInList={isItemInList}
      toggleItem={toggleItem}
      isProduct={isProduct}
      handlePoductPage={handlePoductPage}
      handleViewAll={handleViewAll}
    />
  );
}
