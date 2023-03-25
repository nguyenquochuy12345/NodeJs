import express from "express";
import routerProduct from "./routes/product.js";
import routerUser from "./routes/user.js";

import dotenv from "dotenv";
import connect  from "./config/db/index.js";


// await connect();
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", routerProduct);
app.use("/api", routerUser);


connect();


export const viteNodeApp = app;


// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port: ${process.env.PORT}`);
// });



/**
 * Step 1: install json-server
 * Step 2: install concurrently
 * Step 3: install axios
 * Step 4: edit package.json
 * Step 5: setting "type": "module" in package.json
 * Step 6: Add method getAll, getDetail, post, put, delete
 */
