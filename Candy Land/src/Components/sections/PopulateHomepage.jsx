import { useContext } from "react";
import HomePageTemplate from "./HomePageTemplate";
import { globalContext } from "../../utils/context";
import Coursel from "../coursel";

export default function PopulateHomepage({ prop }) {
    let { bestSellers, popularProducts } = prop;
    let {brands,categories}=useContext(globalContext);
    return (
      <section className="homepage-section">
        <Coursel/>
        <HomePageTemplate prop={{ head:"Categories" ,data:categories}}  />
        <hr></hr>
  
        <HomePageTemplate prop={{ head:"Best Sellers" ,data:bestSellers ,isProduct:true}}/>
        <hr></hr>
        <HomePageTemplate prop={{ head:"Popular" ,data:popularProducts,isProduct:true}}/>
        <hr />
        <HomePageTemplate prop={{ head:"Brands" ,data:brands}}/>
      </section>
    );
  }
  