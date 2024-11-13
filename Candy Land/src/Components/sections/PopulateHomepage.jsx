import { Brands, Categories } from "../../assests/data/Data";
import HomePageTemplate from "./HomePageTemplate";

export default function PopulateHomepage({ prop }) {
    let { bestSellers, popularProducts,wishlistItems,updateWishlist ,cartItems,updateCart } = prop;
    return (
      <section className="homepage-section">
        <div className="homepage-advertise-section">
          <img
            className="homepage-advertise-section-img"
            src="https://media.architecturaldigest.com/photos/5dcde00380598800086215f6/16:9/w_2560%2Cc_limit/Osofsky_Oct19-5.jpg"
          />
        </div>
        <HomePageTemplate prop={{ head:"Categories" ,data:Categories, wishlistItems,updateWishlist ,cartItems,updateCart}}  />
        <hr></hr>
  
        <HomePageTemplate prop={{ head:"Best Sellers" ,data:bestSellers, wishlistItems,updateWishlist ,cartItems,updateCart ,isProduct:true}}/>
        <hr></hr>
        <HomePageTemplate prop={{ head:"Popular" ,data:popularProducts,  wishlistItems,updateWishlist ,cartItems,updateCart,isProduct:true}}/>
        <hr />
        <HomePageTemplate prop={{ head:"Brands" ,data:Brands, wishlistItems,updateWishlist ,cartItems,updateCart}}/>
      </section>
    );
  }
  