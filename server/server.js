import app from "./app.js";

const port = 5234;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.on("error", (err) => {
  console.error("Server failed to start:", err);
});

server.on("listening", () => {
  console.log("Server is now listening");
});
