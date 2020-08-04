const express = require("express");
const hubsRouter = require("./hubs/hubs-router");
const clientsRouter = require("./routers/clientsRouter");
const productsRouter = require("./routers/productsRouter");
const orderRouter = require("./routers/orderRoutes");
const suppliersRouter = require("./routers/suppliersRouter");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});
server.use("/api/hubs", hubsRouter);
server.use("/clients", clientsRouter);
server.use("/products", productsRouter);
server.use("/orders", orderRouter);
server.use("/suppliers", suppliersRouter);

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
