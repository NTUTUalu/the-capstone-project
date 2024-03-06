import express from "express";
// import { PORT  } from "./";
import mongoose, { Mongoose } from "mongoose";
import https from "https";
//below we import the schema
import User from "./model/user.js";
import Transport from "./model/transport.js";
import Supplier from "./model/supplier.js";
import Product from "./model/product.js";
import Order from "./model/order.js";
import bcrypt from "bcryptjs";
import cors from "cors";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
// import "dotenv/config";
// import 'dotenv';
config();

const app = express();

//this is middleware for parsing request body
//it helps us to send data to the server in a json format that can be understood by the browser
app.use(express.json());
app.use(cors());

const verifyToken = (req, res, next) => {
  // Check for the Authorization header
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header is missing" });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token is missing" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET); // Replace 'your_secret_key' with your actual secret key
    req.user = decoded; // Attach the decoded payload to the request object for further use
    next(); // Call next middleware
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).json("welcome to Poultry plus");
}); //to help us retrieve data from a server

//Route to saving a new book
// since working with mongoose is an async process we use "async"
app.post("/signup", async (request, response) => {
  try {
    if (
      !request.body.mobileNumber ||
      !request.body.password ||
      !request.body.name
    ) {
      return response.status(400).send({
        message: "send all required fields: mobileNumber, password, name ",
      });
    }

    //below we are going to hash the password
    const hashedPassword = await bcrypt.hash(request.body.password, 5);

    //below we create a variable for your new book
    const newUser = {
      name: request.body.name,
      mobileNumber: request.body.mobileNumber,
      password: hashedPassword,
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
//checking if we are logged in or not
app.post("/become-supplier", verifyToken, async (request, response) => {
  try {
    if (
      !request.body.businessName ||
      !request.body.selectedCheckboxes ||
      !request.body.bankName ||
      !request.body.accountNumber ||
      !request.body.email ||
      !request.body.location
    ) {
      return response.status(400).send({
        message: "send all required fields* ",
      });
    }
    console.log(request.body.bankName);
    //below we are going to hash the password
    //  const hashedPassword = await bcrypt.hash(request.body.password, 5);
    //  const hashedConfirmPassword = await bcrypt.hash(request.body.confirmPassword,5);

    //below we create a variable for your new book
    const newSupplier = {
      businessName: request.body.businessName,
      products: request.body.selectedCheckboxes,
      bankName: request.body.bankName,
      accountNumber: request.body.accountNumber,
      location: request.body.location,
      email: request.body.email,
      userId: new mongoose.Types.ObjectId(request.user.id),
    };

    //await user user and check if they exit
    const suppliers = await Supplier.create(newSupplier);

    //create subaccount
    const data = await createPaystackAccount({

      businessName: request.body.businessName,
      bankName: request.body.bankName,
      accountNumber: request.body.accountNumber,
      email: request.body.email,

    })
    console.log(data)
    return response.status(201).send(suppliers);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

const createPaystackAccount = async (body) => {
  try {
    const params = JSON.stringify({
      business_name: body.businessName,
      settlement_bank: body.bankName,
      account_number: body.accountNumber,
      percentage_charge: 5.5,
      primary_contact_email: body.email 
    });
    console.log(params)
    const options = {
      hostname: "api.paystack.co",
      port: 443,
      path: "/subaccount",
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.PAYSTACK_SECRET_KEY,
        "Content-Type": "application/json",
      },
    };

    const paystackReq = https.request(options, (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        const responseData = JSON.parse(data);

        if (responseData.status) {
          const transactionData = responseData.data;
          console.log(transactionData);
        } else {
          console.log(responseData);
        }
      });
    });

    paystackReq.on("error", (error) => {
      console.log(error.message);
    });

    paystackReq.write(params);
    paystackReq.end();
  } catch (error) {
    console.log(error);
  }
};

app.get("/get-suppliers", async (request, response) => {
  try {
    const suppliers = await Supplier.find();

    return response.status(201).json(suppliers);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//register Transport
app.post("/become-transporter", verifyToken, async (request, response) => {
  try {
    if (
      !request.body.deliveryProvince ||
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
      deliveryProvince: request.body.deliveryProvince,
      transportType: request.body.transportType,
      availabilityStatus: request.body.availabilityStatus,
      userId: new mongoose.Types.ObjectId(request.user.id),
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
app.post("/CreateProduct", async (request, response) => {
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
    const products = await Product.create(newProduct);

    return response.status(201).send(products);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get products from the database
// the code below is for getting books in respect to the year they were published
app.get("/products/:productId", async (request, response) => {
  try {
    const { productId } = request.params;
    const products = await Product.find({
      _id: new mongoose.Types.ObjectId(productId),
    });

    return response.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.get("/supplier/:supplierId", async (request, response) => {
  try {
    const { supplierId } = request.params;
    const suppliers = await Supplier.find({
      _id: new mongoose.Types.ObjectId(supplierId),
    });

    return response.status(200).json(suppliers[0]);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get all books from the database
app.get("/products", async (request, response) => {
  try {
    const products = await Product.find({});

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
    const result = await Product.findOneAndUpdate(
      { productName: productName },
      updatedData,
      { new: true }
    );

    if (!result) {
      return response.status(404).json({ message: "Product not found" });
    }

    return response.status(200).send({
      message: "Product updated successfully",
      updatedProduct: result,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//if a product exists then we will just delete
app.delete("/DeleteProduct/product/:productName", async (request, response) => {
  try {
    const { productName } = request.params;

    const result = await Product.findOneAndDelete({ productName: productName });

    if (!result) {
      return response.status(404).json({ message: "Product not found" });
    }

    return response
      .status(200)
      .send({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Delete products by category
app.delete("/DeleteProduct/category/:category", async (request, response) => {
  try {
    const { category } = request.params;

    // Delete products that match the given category
    const result = await Product.deleteMany({ category });

    if (result.deletedCount === 0) {
      return response
        .status(404)
        .json({ message: "No products found for the specified category" });
    }

    return response
      .status(200)
      .json({ message: "Products deleted successfully" });
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
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "12h" }
    );
    //check  if they have supplier or transporter account
    const supplier = await Supplier.findOne({
      userId: new mongoose.Types.ObjectId(user._id),
    });
    let responseObject = { ...user._doc };

    if (supplier) {
      responseObject = { ...responseObject, supplier: supplier };
    }
    //if they are not supplier we check if they are a transporter
    if (!supplier) {
      const transport = await Transport.findOne({
        userId: new mongoose.Types.ObjectId(user._id),
      });
      if (transport) {
        responseObject = { ...responseObject, transporter: transport };
      }
    }
    return response.status(200).json({
      message: "Login successful",
      data: { ...responseObject, token: token },
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

app.post("/orders/create", async (request, response) => {
  try {
    if (
      !request.body.supplierId ||
      !request.body.productId ||
      !request.body.clientName ||
      !request.body.clientAddress ||
      !request.body.clientEmail
    ) {
      return response.status(400).send({
        message: "send all required fields* ",
      });
    }
    const product = await Product.findOne({
      _id: new mongoose.Types.ObjectId(request.body.productId),
    });
    //create new order
    const newOrder = {
      clientName: request.body.clientName,
      clientAddress: request.body.clientAddress,
      clientEmail: request.body.clientEmail,

      productId: new mongoose.Types.ObjectId(request.body.productId),
      supplierId: new mongoose.Types.ObjectId(request.body.supplierId),
      totalAmount: product.itemCost * request.body.quantity,
    };

    const order = await Order.create(newOrder);

    return response.status(201).send(order);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//FETCHING ALL ORDERS FOR A CERTAIN SUPPLIER
app.get("/orders/supplier/:supplierId",
  verifyToken,
  async (request, response) => {
    try {
      const { supplierId } = request.params;
      const orders = await Order.find({
        supplierId: new mongoose.Types.ObjectId(supplierId),
      }).populate("productId");

      if (!orders) {
        return response
          .status(404)
          .json({ message: "Orders not found for the supplier ID provided." });
      }

      console.log(orders);

      return response.status(200).json(orders);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  }
);

app.post("/orders/update/:orderId", verifyToken, async (request, response) => {
  try {
    const { orderId } = request.params;
    const updateOrder = await Order.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(orderId) },
      { status: request.body.status },
      { new: true }
    );

    return response.status(200).json(updateOrder);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.post("/updated/:orderId", verifyToken, async (request, response) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
      const updatedOrder = await Order.findOneAndUpdate(
          { orderId },
          { status },
          { new: true }
      );

      if (!updatedOrder) {
          return res.status(404).json({ message: "Order not found" });
      }

      return res.status(200).json(updatedOrder);
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
  }
});



//mongoose will help us establish connection to the database
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGODB_URL)
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
