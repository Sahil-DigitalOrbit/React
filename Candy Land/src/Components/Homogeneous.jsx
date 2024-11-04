import {
  faChevronDown,
  faSliders,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import ProductTile from "./ProductTile";
import { Brands, Categories } from "../Data/Data";

export default function Homogeneous({ prop, heading, isProduct }) {
  const [data, setData] = useState([...prop]);
  const [sortState, setSortState] = useState(false);
  const [dropWeight, setDropWeight] = useState(false);
  const [dropBrands, setDropBrand] = useState(false);
  const [dropCategory, setDropCategory] = useState(false);
  const [weights, setWeights] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  function sortByPrice() {
    const sortedData = [...data].sort((a, b) =>
      sortState ? a.price - b.price : b.price - a.price
    );
    setData(sortedData);
    setSortState(!sortState);
  }

  function sortByPopularity() {
    const sortedData = [...data].sort((a, b) =>
      sortState ? a.ratings - b.ratings : b.ratings - a.ratings
    );
    setData(sortedData);
    setSortState(!sortState);
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
    let filteredData = [...prop];

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
  }, [weights, brands, categories, prop]);

  function clearFilter() {
    setWeights([]);
    setBrands([]);
    setCategories([]);
    setSortState(false);
    setData([...prop]);
  }

  return (
    <div className="p-5 m-3 homogeneous-section">
      <h1 className="text-start">{heading}</h1>

      {isProduct ? (
        <>
          <div className="d-flex justify-content-between align-items-center homogeneous-controller">
            <div>
              Filter By <FontAwesomeIcon icon={faSliders} />
            </div>
            <div className="d-flex justify-content-around align-items-center col-6 homo-sorting-buttons">
              <span>Sort By: </span>
              <button
                onClick={sortByPrice}
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
                    icon={sortState ? faSortUp : faSortDown}
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
          </div>

          <div className="homogeneous-body d-flex">
            <div className="homogeneous-filter-controls col-2 text-start">
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
                  {Object.keys(Brands).map((brandKey, idx) => (
                    <button
                      key={idx}
                      value={Brands[brandKey].name}
                      onClick={filterBrand}
                      className={
                        brands.includes(Brands[brandKey].name)
                          ? "active-filter"
                          : ""
                      }
                    >
                      {Brands[brandKey].name}
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
                  {Object.keys(Categories).map((categoryKey, idx) => (
                    <button
                      key={idx}
                      value={Categories[categoryKey].name}
                      onClick={filterCategory}
                      className={
                        categories.includes(Categories[categoryKey].name)
                          ? "active-filter"
                          : ""
                      }
                    >
                      {Categories[categoryKey].name}
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
    </div>
  );
}
