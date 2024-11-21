import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDoc,
  doc,
  getDocs,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIJ67ai-leyDXXcZ-XHDwwgclQAQprO6A",
  authDomain: "candles-app.firebaseapp.com",
  projectId: "candles-app",
  storageBucket: "candles-app.firebasestorage.app",
  messagingSenderId: "782000041489",
  appId: "1:782000041489:web:f60da6fe72245edc55cbb0",
  databaseURL: "https://candles-app-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
export const FirebaseContext = createContext();
export const useFirebase = () => useContext(FirebaseContext);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = (props) => {
  //signup-----------------------------------------------------------
  const signupUserWithEmailPassword = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error("Error signing up with email and password:", error.message);
      throw error;
    }
  };

  //signup google-----------------------------------------------------
  const signupUserWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      const user = result.user;
      return user;
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  //set user details to firestore------------------
  const setUserSignupDetails = async ( mail,name='user',contact='' ) => {
    try {
      const usersRef = collection(firestore, "users-info");
      const userQuery = query(  usersRef,  where("mail", "==", mail.toLowerCase()));
      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {
        // User already exists
        const existingUser = querySnapshot.docs[0];
        return existingUser.data();
      } else {
        // Create a new user if no match is found
        const cartsRef = collection(firestore, "users-cart");
        const wishlistRef = collection(firestore, "users-wishlist");
        const orderRef = collection(firestore, "orders");

        const cRef = await addDoc(cartsRef, {  cart: [] });
        const wRef = await addDoc(wishlistRef, {  wishlist: [] });
        const oRef = await addDoc(orderRef, {  orders: [] });

        const cartId=cRef.id;
        const wishlistId=wRef.id;
        const orderId=oRef.id;

        const newUserRef = await addDoc(usersRef, {
          mail: mail.toLowerCase(),
          name,
          cartId,
          wishlistId,
          orderId,
          contact,
          createdAt: new Date(),
        });

        // Add the generated ID to the document itself
        await updateDoc(newUserRef, { id: newUserRef.id });
        return { id: newUserRef.id, mail, name, cartId, wishlistId, orderId };
      }
    } catch (error) {
      console.error("Error handling user signup:", error);
      throw error;
    }
  };

  //login---------------------------------------------------------------
  const signinUserWithEmailPassword = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return userCredential.user;
  };
  //logout---------------------------------------------------------------
  const logoutUser = async () => {
    try {
      await signOut(firebaseAuth);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  //update user data-------------------------------------------------
  const updateUserData = async (id, key, value) => {
    const ref = doc(firestore, "users-info", id);
    await updateDoc(ref, {
      [key]: value,
    });
  };

  //get all products
  const getAllProducts = async () => {
    const productsRef = collection(firestore, "products");
    const querySnapshot = await getDocs(productsRef);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  };

  //get cart,ORDER and wishlist--------------------------------------
  const getUserWishlistOrdersAndCart = async (cartId, wishlistId,orderId) => {
    const refWishlist = doc(firestore, "users-wishlist", wishlistId);
    const refCart = doc(firestore, "users-cart", cartId);
    const orderRef = doc(firestore, "orders", orderId);
    const snapshotWishlist = await getDoc(refWishlist);
    const snapshotCart = await getDoc(refCart);
    const snapshotOrder = await getDoc(orderRef);
    let dataObj = {
      wishlist: snapshotWishlist.exists() ? snapshotWishlist.data().wishlist : [],
      cart: snapshotCart.exists() ? snapshotCart.data().cart : [],
      orders:snapshotOrder.exists() ? snapshotOrder.data().orders : []
    };
    return dataObj;
  };

  //update wishlist---------------------------------------------
  const updateWishlist = async (id, newWishlist) => {
    const ref = doc(firestore, "users-wishlist", id);
    await setDoc(ref, { wishlist: newWishlist }, { merge: true });
  };

  //UPDATE CART-------------------------------------------------
  const updateCart = async (id, newCart) => {
    const ref = doc(firestore, "users-cart", id);
    await setDoc(ref, { cart: newCart }, { merge: true });
  };

  //add User Order----------------------------------------------
  const addOrder = async (orderData, orderId) => {
      const ref = doc(firestore, "orders", orderId);
      await setDoc(ref, { orders:orderData },{merge:true});
  };

  //get user Orders---------------------------------------------
  const getUserOrders = async (orderId) => {
    try {
      const orderRef = doc(firestore, "orders", orderId);
      const orderSnapshot = await getDoc(orderRef);

      if (orderSnapshot.exists()) {
        return { id: orderSnapshot.id, ...orderSnapshot.data() };
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      throw error;
    }
  };
  // //update product order
  const updateProductOrder=async(productId,order)=>{
    let ref=doc(firestore,'products',productId);
    await setDoc(ref,{
      ordered:order
    },{merge:true})
  }

  //get all brands---------------------------------------------
  const getAllBrands = async () => {
    const ref = collection(firestore, "brands");
    const querySnapshot = await getDocs(ref);
    const brands = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return brands;
  };

  //get all categories------------------------------------------
  const getAllCategories = async () => {
    const ref = collection(firestore, "categories");
    const querySnapshot = await getDocs(ref);
    const categories = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return categories;
  };
//add product review
const addReview = async (productId,userId,review) => {
  try {
    const reviewDocRef = doc(firestore, "reviews", productId);
    const reviewDoc = await getDoc(reviewDocRef);

    if (reviewDoc.exists()) {
      const existingReviews = reviewDoc.data().reviews || {};
      await updateDoc(reviewDocRef, {
        reviews: {
          ...existingReviews,
          [userId]: review,
        },
      });
    } else {
      await setDoc(reviewDocRef, {
        reviews: {
          [userId]: review,
        },
      });
    }
    console.log("Review added/updated successfully!");
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

const getReviews = async (productId) => {
    // Reference to the document in the reviews collection
    const ref = doc(firestore, "reviews", productId);
    const reviewDoc = await getDoc(ref);
    if (reviewDoc.exists()) {
      const reviews = reviewDoc.data().reviews || {};
      return reviews;
    } else {
      return []; // No reviews found
    }
  
};
  //--------------------------------------------------ADMIN PANEL FUNCTUONS------------------------------------------------
  //add category
  const addCategory = async (categoryData) => {
    try {
      const ref = doc(collection(firestore, "categories"));
      const id = ref.id;
      await setDoc(ref, { ...categoryData, id });
    } catch (error) {
      console.error("Error creating user signup details:", error);
      throw error;
    }
  };
  //add brand
  const addBrand = async (brandData) => {
    try {
      const ref = doc(collection(firestore, "brands"));
      const id = ref.id;
      await setDoc(ref, { ...brandData, id });
    } catch (error) {
      console.error("Error creating user signup details:", error);
      throw error;
    }
  };

  //add products
  const addProduct = async (productData) => {
    try {
      const ref = doc(collection(firestore, "products"));
      const id = ref.id; // Access the generated unique ID
      await setDoc(ref, { ...productData, id });
    } catch (error) {
      console.error("Error creating user signup details:", error);
      throw error;
    }
  };

  


  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailPassword,
        signupUserWithGoogle,
        signinUserWithEmailPassword,
        logoutUser,
        updateUserData,
        updateWishlist,
        updateCart,
        getUserWishlistOrdersAndCart,
        setUserSignupDetails,
        addProduct,
        getAllProducts,
        addOrder,
        getUserOrders,
        addBrand,
        getAllBrands,
        addCategory,
        getAllCategories,
        addReview,getReviews,
        updateProductOrder
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
