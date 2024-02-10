import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
//below we import the schema
import User from "./models/signUpModel.js";
import Transport from "./models/registerMotor.js";
import BecomeSupplier from "./models/becomeSupplier.js";
import Products from "./models/products.js";
import bcrypt from "bcryptjs";
import cors from "cors";

const app = express();

//this is middleware for parsing request body
//it helps us to send data to the server in a json format that can be understood by the browser
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).json("welcome to Poultry plus");
}); //to help us retrieve data from a server

//Route to saving a new book
// since working with mongoose is an async process we use "async"
app.post("/Signup", async (request, response) => {
  try {
    if (
      !request.body.mobileNumber ||
      !request.body.password ||
      !request.body.confirmPassword
    ) {
      return response.status(400).send({
        message:
          "send all required fields: mobileNumber, password, confirmPassword ",
      });
    }

    //below we are going to hash the password
    const hashedPassword = await bcrypt.hash(request.body.password, 5);
    const hashedConfirmPassword = await bcrypt.hash(
      request.body.confirmPassword,
      5
    );

    //below we create a variable for your new book
    const newUser = {
      mobileNumber: request.body.mobileNumber,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
    };

    //await user user and check if they exit
    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//register Transport
app.post("/BecomeSupplier", async (request, response) => {
  try {
    if (
      !request.body.businessName ||
      !request.body.mobileNumber ||
      !request.body.selectedCheckboxes ||
      !request.body.bankName ||
      !request.body.accountNumber ||
      !request.body.location
    ) {
      return response.status(400).send({
        message: "send all required fields* ",
      });
    }

    //below we are going to hash the password
    //  const hashedPassword = await bcrypt.hash(request.body.password, 5);
    //  const hashedConfirmPassword = await bcrypt.hash(request.body.confirmPassword,5);

    //below we create a variable for your new book
    const newSupplier = {
      businessName: request.body.businessName,
      mobileNumber: request.body.mobileNumber,
      products: request.body.selectedCheckboxes,
      bankName: request.body.bankName,
      accountNumber: request.body.accountNumber,
      location: request.body.location,
    };

    //await user user and check if they exit
    const suppliers = await BecomeSupplier.create(newSupplier);
    return response.status(201).send(suppliers);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//register Transport
app.post("/TransportRegister", async (request, response) => {
  try {
    if (
      !request.body.names ||
      !request.body.mobileNumber ||
      !request.body.deliveryProvinces ||
      !request.body.transportType ||
      !request.body.availabilityStatus
    ) {
      return response.status(400).send({
        message: "send all required fields* ",
      });
    }

    //below we are going to hash the password
    //  const hashedPassword = await bcrypt.hash(request.body.password, 5);
    //  const hashedConfirmPassword = await bcrypt.hash(request.body.confirmPassword,5);

    //below we create a variable for your new book
    const newTransport = {
      names: request.body.names,
      mobileNumber: request.body.mobileNumber,
      deliveryProvinces: request.body.deliveryProvinces,
      transportType: request.body.transportType,
      availabilityStatus: request.body.availabilityStatus,
    };

    //await user user and check if they exit
    const transport = await Transport.create(newTransport);

    return response.status(201).send(transport);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//create product
app.post("/EditProduct", async (request, response) => {
  try {
    if (
      !request.body.category ||
      !request.body.imageName ||
      !request.body.productName ||
      !request.body.itemCost ||
      !request.body.deliveryTime
    ) {
      return response.status(400).send({
        message: "send all required fields* ",
      });
    }

    //below we are going to hash the password
    //  const hashedPassword = await bcrypt.hash(request.body.password, 5);
    //  const hashedConfirmPassword = await bcrypt.hash(request.body.confirmPassword,5);

    //below we create a variable for your new book
    const newProduct = {
      category: request.body.category,
      imageName: request.body.imageName,
      productName: request.body.productName,
      itemCost: request.body.itemCost,
      deliveryTime: request.body.deliveryTime,
    };

    //await user user and check if they exit
    const products = await Products.create(newProduct);

    return response.status(201).send(products);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get products from the database
// the code below is for getting books in respect to the year they were published
app.get("/EditProduct/:productName", async (request, response) => {
  try {
    const { productName } = request.params;
    const products = await Products.find({ productName: productName });

    return response.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

 //get all books from the database
 app.get("/EditProduct", async (request, response) => {
  try {
    const products = await Products.find({});

    return response.status(200).json({
      // count: books.length,
      data: products,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//if a product exists then we will just update

app.put("/EditProduct/:productName", async (request, response) => {
  try {
    // const { productName } = request.params;
    const { category, imageName, productName, itemCost, deliveryTime } =
      request.body;

    // Define the updated data object
    const updatedData = {
      category: request.body.category,
      imageName: request.body.imageName,
      productName: request.body.productName,
      itemCost: request.body.itemCost,
      deliveryTime: request.body.deliveryTime,
      // Add other fields here
    };

    // Assuming productName is the unique identifier for products
    const result = await Products.findOneAndUpdate(
      { productName: productName },
      updatedData,
      { new: true }
    );

    if (!result) {
      return response.status(404).json({ message: "Product not found" });
    }

    return response
      .status(200)
      .send({
        message: "Product updated successfully",
        updatedProduct: result,
      });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//if a product exists then we will just delete
app.delete("/EditProduct/product/:productName", async (request, response) => {
  try {
    const { productName } = request.params;

    const result = await Products.findOneAndDelete({ productName: productName });

    if (!result) {
      return response.status(404).json({ message: "Product not found" });
    }

    return response.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Delete products by category
app.delete("/EditProduct/category/:category", async (request, response) => {
  try {
    const { category } = request.params;

    // Delete products that match the given category
    const result = await Products.deleteMany({ category });

    if (result.deletedCount === 0) {
      return response.status(404).json({ message: "No products found for the specified category" });
    }

    return response.status(200).json({ message: "Products deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


//create a route to get all books from a database
app.post("/login", async (request, response) => {
  const { mobileNumber, password } = request.body;
  try {
    const user = await User.findOne({ mobileNumber });
    if (!mobileNumber) {
      return response.status(401).send({
        message: "user does not exist ",
      });
    }

    //
    const validUser = bcrypt.compare(password, user.password);
    if (!validUser)
      return response.status(401).send({
        message: "Invalid credentials ",
      });

    return response.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

//mongoose will help us establish connection to the database
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to the database");

    //we put the line below here because we want the server to run only when we have connection to the database
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
