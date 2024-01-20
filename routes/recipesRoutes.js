import express from "express";
import {
  listAll,
  listOne,
  deleteRecipe,
  addRecipe,
  editRecipe
} from "../controllers/recipesController.js";

const router = express.Router();

//list
router.get("/list/all", listAll);
router.get("/list/one", listOne);

//add recipe
router.post("/add", addRecipe);

//delete
router.delete("/delete/one", deleteRecipe);

//edit
router.put("/edit", editRecipe);

export default router;
