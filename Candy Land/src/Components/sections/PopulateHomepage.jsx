import { Brands, Categories } from "../../assests/data/Data";
import HomePageTemplate from "./HomePageTemplate";

export default function PopulateHomepage({ prop }) {
    let { bestSellers, popularProducts } = prop;
    return (
      <section className="homepage-section">
        <div className="homepage-advertise-section">
          <img
            className="homepage-advertise-section-img"
            src="https://media.architecturaldigest.com/photos/5dcde00380598800086215f6/16:9/w_2560%2Cc_limit/Osofsky_Oct19-5.jpg"
          />
        </div>
        <HomePageTemplate prop={{ head:"Categories" ,data:Categories}}  />
        <hr></hr>
  
        <HomePageTemplate prop={{ head:"Best Sellers" ,data:bestSellers ,isProduct:true}}/>
        <hr></hr>
        <HomePageTemplate prop={{ head:"Popular" ,data:popularProducts,isProduct:true}}/>
        <hr />
        <HomePageTemplate prop={{ head:"Brands" ,data:Brands}}/>
      </section>
    );
  }
  