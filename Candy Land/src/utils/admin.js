//add product feature
async function addProduct() {
    try {
      for (const element of Products) {
        await firebase.addProduct({
          category: element.category,
          brand: element.brand,
          name: element.name,
          description: element.description,
          image: element.image,
          price: element.price,
          publish: element.publish,
          quantity: element.quantity,
          ratings: element.ratings,
          weight: element.weight,
        });
      }
      console.log("All products added successfully!");
    } catch (err) {
      console.error("Error adding products:", err);
    }
  }



  //add category feature
  async function  addCategory() {
    try {
      for (const element of Categories) {
        await firebase.addCategory({
          name: element.name,
          image: element.image,
        });
      }
      console.log("All Categories added successfully!");
    } catch (err) {
      console.error("Error adding products:", err);
    }
  }
  //add category feature
  async function  addBrands() {
    try {
      for (const element of Brands) {
        await firebase.addBrand({
          name: element.name,
          image: element.image,
        });
      }
      console.log("All Brands added successfully!");
    } catch (err) {
      console.error("Error adding products:", err);
    }
  }