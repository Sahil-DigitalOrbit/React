import { Link } from "react-router-dom";
import ProductTile from "./ProductTile";

export default function Template({ head, data ,isProduct}) {
  return (
    <div className="template-section">
      <div className="template-section-header-div"><h2 className="template-section-heading">{head}</h2>
        <Link className="template-section-view-all">View All</Link>
      </div>
      <div className="template-card-section" >
      {data.map((item,idx) => {
        return <ProductTile prop={item} key={idx} />;
      })}
      </div>
    </div>
  );
}
