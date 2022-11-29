/* 
    BASICS OF NODE
*/
// const http = require("http");

// // * request, response
// const server = http.createServer((req, res) => {
// 	if (req.method === "GET" && req.url === "/") {
// 		res.statusCode = 200;
// 		res.statusMessage;
// 		console.log("hello from server");
// 		res.end();
// 	}
// });

// server.listen(3000, console.log("Server on http://localhost:3000/"));

const app = require("./server");

app.listen(3000, () => {
	console.log("Running from server");
});
