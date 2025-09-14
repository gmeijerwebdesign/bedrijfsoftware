import express from "express";
import cors from "cors";
import organisationRoute from "./routes/OrganisationRoute.js";
import userRoute from "./routes/UserRoute.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", organisationRoute);
app.use("/api", userRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
