const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is up and running' });
  })
  
    // Start the server
  
  app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
  });





// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const colors = require("colors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// //env config
// dotenv.config();

// //router import
// const userRoutes = require("./routes/userRoutes");
// const blogRoutes = require("./routes/blogRoutes");

// //mongodb connection
// connectDB();

// //rest objecct
// const app = express();

// //middelwares
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// //routes
// app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/blog", blogRoutes);

// // Port
// const PORT = process.env.PORT || 8080;
// //listen
// app.listen(PORT, () => {
//   console.log(
//     `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan
//       .white
//   );
// });