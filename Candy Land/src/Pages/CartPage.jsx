import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { toast, ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import CartSection from "../Components/sections/CartSection";
import { globalContext } from "../utils/context";
import { useFirebase } from "../firebase/firebase";
import { getCookie } from "../utils/cookies";
export default function CartPage() {
  let {  cartItems,  updateCart,orderHistory,updateOrderHistory,products,userInfo,setUserInfo,updateWishlist,setLoad,setProducts,setBrands,setCategories} = useContext(globalContext);
  let firebase=useFirebase();
  const retrievedUserInfo = JSON.parse(getCookie('userInfo'));    

  //check if item is in list
  const isItemInList = (list, item) => list.some((x) => x.id == item.id);
  
  //fetching cart items  
  let data = products.filter((item) => {
    return isItemInList(cartItems,item);
  });
  
  //calculating subtotal
  const [subtotal, updateSubtotal] = useState(
    data.reduce((total, item) => {
     let x= [...cartItems].find(q=>q.id==item.id);
     return total + (item.price*x.quantity)
    }, 0)
  );
  
  //delivery cost
  const deliveryCost = 300;
  
  const navigate = useNavigate();
  useEffect(() => {
    async function populateState(userInfo){
      try{
        setLoad(true);
        let userFindings = await firebase.getUserWishlistOrdersAndCart(userInfo.cartId,userInfo.wishlistId,userInfo.orderId);
        updateOrderHistory(userFindings.orders)
        updateCart(userFindings.cart);
        updateWishlist(userFindings.wishlist);
        setLoad(false)
        let categories = await firebase.getAllCategories();
        let brands = await firebase.getAllBrands();
        let products= await firebase.getAllProducts();
        setProducts(products);
        setBrands(brands);
        setCategories(categories);
      }catch(err){
        toast.error('Error Found! please try again later')
      }
    }


    if (!getCookie('ageValidation')||!getCookie('userInfo')) {
      navigate("/");
    }else if(!userInfo){
      const retrievedUserInfo = JSON.parse(getCookie('userInfo'));    
      populateState(retrievedUserInfo);
      setUserInfo(retrievedUserInfo);
    }
  }, []);


  //checkout function
  function checkoutCart(){
    try{
    let newOrders=[...cartItems].map(item=>{
      item.date=new Date().toLocaleDateString();
      return item;
    });
    //adding to order history
    updateOrderHistory([...orderHistory,...newOrders]);
    firebase.addOrder([...orderHistory,...newOrders],retrievedUserInfo.orderId);
    firebase.updateCart(retrievedUserInfo.cartId,[]);
    cartItems.forEach(element => {
      let product=products.find(p=>p.id==element.id);
      firebase.updateProductOrder(element.id , (product.ordered+element.quantity));
    });
    updateCart([]);
    updateSubtotal(0)
  }catch(err){
    console.log(err);
    toast.error('Checking out cart failed, please try again later!  ')
  }
}


  return (
    <>
      <section>
        <ToastContainer />
        <Signup/>
        <Header  prop={{cartPage:true }}/>
        {retrievedUserInfo ? (
          <CartSection prop={{data,subtotal,deliveryCost,checkoutCart,updateSubtotal}}/>
        ) : (
          <h1>Please Login First</h1>
        )}
      </section>
    </>
  );
}

