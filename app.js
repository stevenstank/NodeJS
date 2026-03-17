require("dotenv").config();
const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRoutes);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});


