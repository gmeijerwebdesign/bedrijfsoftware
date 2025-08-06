

import express from "express";
import cors from "cors";
import testRoutes from "./routes/TestRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/test", testRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
