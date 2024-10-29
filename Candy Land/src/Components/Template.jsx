import ProductTile from "./ProductTile";

export default function Template({ head, data }) {
  return (
    <div className="template-section">
      <h2>{head}</h2>
      <div className="template-card-section" >
      {data.map((item) => {
        return <ProductTile prop={item} />;
      })}
      </div>
    </div>
  );
}
