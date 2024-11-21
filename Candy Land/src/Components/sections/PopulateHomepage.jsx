import { useContext } from "react";
import HomePageTemplate from "./HomePageTemplate";
import { globalContext } from "../../utils/context";

export default function PopulateHomepage({ prop }) {
    let { bestSellers, popularProducts } = prop;
    let {brands,categories}=useContext(globalContext);
    return (
      <section className="homepage-section">
        <div className="homepage-advertise-section">
          <img
            className="homepage-advertise-section-img"
            src="https://media.architecturaldigest.com/photos/5dcde00380598800086215f6/16:9/w_2560%2Cc_limit/Osofsky_Oct19-5.jpg"
          />
        </div>
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
  