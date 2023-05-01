const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./Data/categories.json");

app.get("/", (req, res) => {
	res.send("The Dragon is coming soon...");
});

app.get("/categories", (req, res) => {
	res.send(categories);
});

app.listen(port, () => {
	console.log(` app listening on port ${port}`);
});
