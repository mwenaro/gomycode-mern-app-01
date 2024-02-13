async function userSeeder(users) {
    const UserModel = require('../models/UserModel');
  
    try {
      // Check if users collection is empty
      const count = await UserModel.countDocuments();
      if (count === 0) {
        // Create users only if the collection is empty
        await UserModel.create(users);
        console.log('Users seeded successfully!');
      } else {
        console.log('Users collection is not empty. Skipping seeding.');
      }
    } catch (error) {
      console.error('Error seeding users:', error);
    }
  }
  



async function productSeeder(products) {
  const ProductModel = require('../models/ProductModel');
  try {
    // Check if products collection is empty
    const count = await ProductModel.countDocuments();
    if (count === 0) {
      // Create products only if the collection is empty
      await ProductModel.create(products);
      console.log('Products seeded successfully!');
    } else {
      console.log('Products collection is not empty. Skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}


  module.exports = {userSeeder, productSeeder};
  