const express = require("express");

const app = express();

// CREATE A SERVER
app.get("/", (req, res) => {
	console.log("hello from express");
	res.status(200);
	res.json({ message: "hello world " });
});

module.exports = app;
