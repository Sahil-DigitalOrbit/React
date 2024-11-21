import { useNavigate } from "react-router-dom";
import ProductTile from "../PorductTile/ProductTile";

export default function HomePageTemplate({ prop }) {
  const navigate = useNavigate();
  const { head, data, isProduct } = prop;

  const handleViewAll = () => {
    navigate("/products", { state: { heading: head } });
  };
  return (
    <section className="template-section">
      <div className="template-section-header-div">
        <h2 className="template-section-heading">{head}</h2>
        <button className="template-section-view-all" onClick={handleViewAll}>
          View All
        </button>
      </div>
      <div className="template-card-section">
        {data.map((item, idx) => {
          return <ProductTile prop={{ item, isProduct }} key={idx} />;
        })}
      </div>
    </section>
  );
}
