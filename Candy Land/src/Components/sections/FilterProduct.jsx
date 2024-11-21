import {
  faChevronDown,
  faSliders,
  faSortDown,
  faSortUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useContext } from "react";
import ProductTile from "../PorductTile/ProductTile";
import { globalContext } from "../../utils/context";

export default function Homogeneous({ prop }) {
let{allData, isProduct, heading,setModalStatus}=prop;
let {brands:gBrands,categories:gCategories}=useContext(globalContext);  

  const [data, setData] = useState([...allData]);
  const [sortState, setSortState] = useState(false);
  const[sortPopularity,setSortPopularity]=useState(false);
  const [dropWeight, setDropWeight] = useState(false);
  const [dropBrands, setDropBrand] = useState(false);
  const [dropCategory, setDropCategory] = useState(false);
  const [dropSort, setDropSort] = useState(false);
  const [showFilterCell,setFilterCell]=useState(false);
  const [weights, setWeights] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  function sortByPrice() {
    const sortedData = [...data].sort((a, b) =>
      sortState ? a.price - b.price : b.price - a.price
    );
    setSortState(!sortState);
    setData(sortedData);
  }
  
  function sortByPriceDirection(direction){
    setSortState(direction);
    setData((prevData) => {
    const sortedData = [...prevData].sort((a, b) =>
      direction ? a.price - b.price : b.price - a.price
    );
    return sortedData;
  });
}

  function sortByPopularity() {
    const sortedData = [...data].sort((a, b) =>
      sortPopularity ? a.ratings - b.ratings : b.ratings - a.ratings
    );
    setData(sortedData);
    setSortPopularity(!sortPopularity);
  }

  function filterWeight(e) {
    const value = e.target.value;
    const updatedWeights = weights.includes(value)
      ? weights.filter((w) => w !== value)
      : [...weights, value];
    setWeights(updatedWeights);
  }

  function filterBrand(e) {
    const value = e.target.value;
    const updatedBrands = brands.includes(value)
      ? brands.filter((b) => b !== value)
      : [...brands, value];
    setBrands(updatedBrands);
  }

  function filterCategory(e) {
    const value = e.target.value;
    const updatedCategories = categories.includes(value)
      ? categories.filter((c) => c !== value)
      : [...categories, value];
    setCategories(updatedCategories);
  }

  useEffect(() => {
    let filteredData = [...allData];

    if (weights.length > 0) {
      filteredData = filteredData.filter((item) =>
        weights.includes(item.weight)
      );
    }

    if (brands.length > 0) {
      filteredData = filteredData.filter((item) => brands.includes(item.brand));
    }

    if (categories.length > 0) {
      filteredData = filteredData.filter((item) =>
        categories.includes(item.category)
      );
    }

    setData(filteredData);
  }, [weights, brands, categories, allData]);

  function clearFilter() {
    setWeights([]);
    setBrands([]);
    setCategories([]);
    setSortState(false);
    setData([...allData]);
  }

  function hideFilterSectionCell(){
    setModalStatus(false);
    setFilterCell(false)
  }

  return (
    <section className="homogeneous-section">
      
      <h1 className="text-start">{heading}</h1>

      {isProduct ? (
        <>
          <div className="d-flex justify-content-between align-items-center homogeneous-controller">
            <div className="for-cell" onClick={()=>{
              setFilterCell(!showFilterCell);
              setModalStatus(true)
            }}>
              Filter By <FontAwesomeIcon icon={faSliders} />
            </div>
              <div className="for-desktop">
              Filter By <FontAwesomeIcon icon={faSliders} />

              </div>
            <div className=" homo-sorting-buttons">
              <span>Sort By: </span>
              <button
                onClick={()=>sortByPrice()}
                className="d-flex justify-content-center align-items-center"
              >
                Price
                <span className="button-span">
                  <FontAwesomeIcon
                    className="sort-fontawesome"
                    icon={sortState ? faSortUp : faSortDown}
                  />
                </span>
              </button>
              <button
                onClick={sortByPopularity}
                className="d-flex justify-content-center align-items-center"
              >
                Popularity
                <span className="button-span">
                  <FontAwesomeIcon
                    className="sort-fontawesome"
                    icon={sortPopularity ? faSortUp : faSortDown}
                  />
                </span>
              </button>
              <button className="d-flex justify-content-center align-items-center">
                Recently Added
                <span className="button-span ">
                  <FontAwesomeIcon
                    className="sort-fontawesome"
                    icon={faSortUp}
                  />
                  <FontAwesomeIcon
                    className="sort-fontawesome"
                    icon={faSortDown}
                  />
                </span>
              </button>
              <button onClick={clearFilter} className="btn btn-danger">
                Clear All
              </button>
            </div>
            <div style={dropSort?{backgroundColor:"#FFFDEC"}:{}} className="cell-sort-section">
              <div onClick={()=>setDropSort(!dropSort)}>
                <span>Sort By</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              
            </div>
            
          </div>
          <section className={dropSort?'homo-sort-section-active':'homo-sort-section'}>
                
                <div  onClick={()=>sortByPriceDirection(true)}>
                  <h5 className="homogeneous-filter-controls-head">Price: Low to High</h5>
                </div>
                <div>
                  <h5 onClick={()=>sortByPriceDirection(false)} className="homogeneous-filter-controls-head">Price: High to Low</h5>
                </div>
                <div>
                  <h5 className="homogeneous-filter-controls-head">Recently Added</h5>
                </div>
                <div>
                  <h5 onClick={sortByPopularity} className="homogeneous-filter-controls-head">Popularity</h5>
                </div>
              </section>

          <div className="homogeneous-body d-flex">
            <div className={showFilterCell?'homogeneous-filter-controls-active homogeneous-filter-controls col-2 text-start':"homogeneous-filter-controls col-2 text-start"}>
              <div className="filter-controls-header-cell"><span>Filter By <FontAwesomeIcon icon={faSliders} /></span><span  onClick={hideFilterSectionCell}><FontAwesomeIcon icon={faXmark}/></span></div>
              {/* Weight Filter */}
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Weights</span>
                  <FontAwesomeIcon
                    className={
                      dropWeight ? "hide-drop-icon-active" : "hide-drop-icon"
                    }
                    onClick={() => setDropWeight(!dropWeight)}
                    icon={faChevronDown}
                  />
                </h5>
                <span
                  className={
                    dropWeight
                      ? "homo-dropDown-weight activeDrop"
                      : "homo-dropDown-weight"
                  }
                >
                  {["1gm", "2gm", "4gm", "10gm"].map((weight) => (
                    <button
                      key={weight}
                      value={weight}
                      onClick={filterWeight}
                      className={
                        weights.includes(weight) ? "active-filter" : ""
                      }
                    >
                      {weight}
                    </button>
                  ))}
                </span>
              </div>

              {/* Brand Filter */}
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Brand</span>
                  <FontAwesomeIcon
                    className={
                      dropBrands ? "hide-drop-icon-active" : "hide-drop-icon"
                    }
                    onClick={() => setDropBrand(!dropBrands)}
                    icon={faChevronDown}
                  />
                </h5>
                <span
                  className={
                    dropBrands
                      ? "homo-dropDown-weight activeDrop"
                      : "homo-dropDown-weight"
                  }
                >
                  {Object.keys(gBrands).map((brandKey, idx) => (
                    <button
                      key={idx}
                      value={gBrands[brandKey].name}
                      onClick={filterBrand}
                      className={
                        brands.includes(gBrands[brandKey].name)
                          ? "active-filter"
                          : ""
                      }
                    >
                      {gBrands[brandKey].name}
                    </button>
                  ))}
                </span>
              </div>

              {/* Category Filter */}
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Category</span>
                  <FontAwesomeIcon
                    className={
                      dropCategory ? "hide-drop-icon-active" : "hide-drop-icon"
                    }
                    onClick={() => setDropCategory(!dropCategory)}
                    icon={faChevronDown}
                  />
                </h5>
                <span
                  className={
                    dropCategory
                      ? "homo-dropDown-weight activeDrop"
                      : "homo-dropDown-weight"
                  }
                >
                  {Object.keys(gCategories).map((categoryKey, idx) => (
                    <button
                      key={idx}
                      value={gCategories[categoryKey].name}
                      onClick={filterCategory}
                      className={
                        categories.includes(gCategories[categoryKey].name)
                          ? "active-filter"
                          : ""
                      }
                    >
                      {gCategories[categoryKey].name}
                    </button>
                  ))}
                </span>
              </div>
              {/* Best Seller Filter */}
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  Best Sellers
                </h5>
                <span></span>
              </div>
              {/* Most Popular Filter */}
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  Most Popular
                </h5>
                <span></span>
              </div>
            </div>

            {/* Product Tiles */}
            <div className="homogeneous-body-content">
              {data.map((item, idx) => (
                <div key={idx}>
                  <ProductTile prop={{ item, isProduct }} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="homogeneous-body-content">
          {data.map((item, idx) => (
            <div key={idx}>
              <ProductTile prop={{ item, isProduct }} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
