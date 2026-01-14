// 1 .import json-server
const jsonServer=require("json-server")

// /2.create server for running json file
const RBServer=jsonServer.create()

// 3.create a middleware
const middleware=jsonServer.defaults()

// 6.import db.json file
const router=jsonServer.router("db.json")

// 4.define port to run the server
const PORT=3000

// 5.use middleware
RBServer.use(middleware)

// 7. use router
RBServer.use(router)
// 8.tell server tp listen for client request
RBServer.listen(PORT,()=>{
    console.log(`Blood bank Started at port Number ${PORT}`);
})