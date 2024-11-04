import {
  faChevronDown,
  faSliders,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ProductTile from "./ProductTile";

export default function Homogeneous({ prop, heading, isProduct }) {
  let [data, updateData] = useState([...prop]);
  let [sortState, setSortState] = useState(false);
  let [dropWeight, showWeight] = useState(false);

  function sortByPrice() {
    const sortedData = [...data].sort((a, b) =>
      sortState ? a.price - b.price : b.price - a.price
    );
    updateData(sortedData);
    setSortState(!sortState);
  }

  function sortByPopularity() {
    const sortedData = [...data].sort((a, b) =>
      sortState ? a.ratings - b.ratings : b.ratings - a.ratings
    );
    updateData(sortedData);
    setSortState(!sortState);
  }

  function filterWeight(e) {
    const newData = [...prop].filter((item) => item.weight === e.target.value);
    updateData(newData);
  }

  function clearFilter() {
    updateData([...prop]);
    setSortState(false);
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
              <span>Sort By : </span>
              <button
                onClick={sortByPrice}
                className="d-flex justify-content-center align-items-center"
              >
                Price
                <span className="button-span">
                  <FontAwesomeIcon className="sort-fontawesome" icon={faSortUp} />
                  <FontAwesomeIcon className="sort-fontawesome" icon={faSortDown} />
                </span>
              </button>
              <button
                onClick={sortByPopularity}
                className="d-flex justify-content-center align-items-center"
              >
                Popularity
                <span className="button-span">
                  <FontAwesomeIcon className="sort-fontawesome" icon={faSortUp} />
                  <FontAwesomeIcon className="sort-fontawesome" icon={faSortDown} />
                </span>
              </button>
              <button className="d-flex justify-content-center align-items-center">
            Recently Added
            <span className="button-span ">
              <FontAwesomeIcon className="sort-fontawesome" icon={faSortUp} />
              <FontAwesomeIcon className="sort-fontawesome" icon={faSortDown} />
            </span>
          </button>
              <button onClick={clearFilter} className="btn btn-danger">
                Clear All
              </button>
            </div>
          </div>

          <div className="homogeneous-body d-flex">
            <div className="homogeneous-filter-controls col-2 text-start ">
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Weights</span>
                  <FontAwesomeIcon
                    className={dropWeight ? 'hide-drop-icon-active' : 'hide-drop-icon'}
                    onClick={() => showWeight(!dropWeight)}
                    icon={faChevronDown}
                  />
                </h5>
                <span className={dropWeight ? "homo-dropDown-weight activeDrop" : "homo-dropDown-weight"}>
                  <button value="1gm" onClick={filterWeight}>1gm</button>
                  <button value="2gm" onClick={filterWeight}>2gm</button>
                  <button value="4gm" onClick={filterWeight}>4gm</button>
                  <button value="10gm" onClick={filterWeight}>10gm</button>
                </span>
              </div>
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Brand</span>
                  <FontAwesomeIcon className="hide-drop-icon" icon={faChevronDown} />
                </h5>
              </div>
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Category</span>
                  <FontAwesomeIcon className="hide-drop-icon" icon={faChevronDown} />
                </h5>
              </div>
            </div>
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
