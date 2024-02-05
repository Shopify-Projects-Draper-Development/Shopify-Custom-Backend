// const express = require("express");
// const dotenv = require("dotenv");
// const userRoutes = require("./routes/userRoutes.js");

// const app = express();

// // Load environment variables from .env
// dotenv.config();

// // Middleware to parse JSON requests, we will likely use this 
// // to parse the response we get from Shopify GraphQL response
// app.use(express.json());

// // Use routes
// app.use("/api", userRoutes);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })



// ALL OF THIS came from ChatGPT (except after the comma on 
// line 10). We will need to refactor, we don't have express 
// installed yet