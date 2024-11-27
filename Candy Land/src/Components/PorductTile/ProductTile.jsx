import AccountPageTile from "./AccountPageTile";
import ProductPageTile from "./ProductPageTile";
import TemplatePageTile from "./TemplateTile";
import { useNavigate } from "react-router-dom";

export default function ProductTile({ prop }) {
  const {  item,  isProduct,  isAccountPage,  showRateProductSection,  isProductPage,head} = prop;
  const navigate = useNavigate();
  const handleViewAll = () =>
    navigate("/products", { state: { heading: item.name, type: head } });
  
  const handlePoductPage = () =>
    navigate("/about-product", { state: { item } });

  const isItemInList = (list) => list.some((x) => x.id === item.id);

  if (isAccountPage) {
    return (
      <AccountPageTile item={item} showRateProductSection={showRateProductSection} isItemInList={isItemInList}  handlePoductPage={handlePoductPage}/>
    );
  }

  if (isProductPage) {
    return (
      <ProductPageTile item={item} isItemInList={isItemInList} />
    );
  }

  return (
    <TemplatePageTile item={item} isItemInList={isItemInList} isProduct={isProduct} handlePoductPage={handlePoductPage} handleViewAll={handleViewAll} />
  );
}
