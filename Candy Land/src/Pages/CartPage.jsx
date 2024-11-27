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
  let {  cartItems,  updateCart,orderHistory,updateOrderHistory,products} = useContext(globalContext);
  let firebase=useFirebase();
  const retrievedUserInfo = JSON.parse(getCookie('userInfo'));    

  //check if item is in list
  const isItemInList = (list, item) => list.some((x) => x.id == item.id);
  
  //fetching cart items  
  let data = products.filter((item) => {
    return isItemInList(cartItems,item);
  });

  //delivery cost
  const deliveryCost = 300;

  const navigate = useNavigate();
  useEffect(() => {
    if (!getCookie('ageValidation')||!getCookie('userInfo')) {
      navigate("/");
    }
  }, [ navigate]);

  //calculating subtotal
  const [subtotal, updateSubtotal] = useState(
    data.reduce((total, item) => total + item.price, 0)
  );

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

