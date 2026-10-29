import express from "express"
import { PostsRouter } from "../Routes/post.routes.js"

const port = 3000;
const app = express();

app.use(express.json());
app.use("/posts", PostsRouter);

app.listen (port, ()  =>  {

console.log(`API funcionando em http://localhost:${port}`)

});