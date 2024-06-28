import express from "express"
import { addCollection, deleteCollection, getCollections, updateCollection } from "../controller/collection.controller.js";

const Router = express.Router();


Router.get("/",getCollections)
Router.post("/",addCollection)
Router.put("/",updateCollection)
Router.post("/delete",deleteCollection)


export default Router;