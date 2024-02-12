const express = require("express");
const cors = require("cors");
const {connectToDatabase} = require("./utils/db-connect");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());





//Route Import
const {userRoute, productRoute} = require("./routes");


//run db connection
connectToDatabase();
// Routes

//users
app.use("/api/users", userRoute);
//products
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
