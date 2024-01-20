import writeData from "../utils/writeData.js";
import readData from "../utils/readData.js";
// LIST ALL
export const listAll = (req, res) => {
  console.log("recipes/all");

  res.send("list all ok");
};

//LIST ONE
export const listOne = (req, res) => {
  console.log("recipes/one");
  res.send("list one ok");
};

//ADD
export const addRecipe = (req, res) => {
  console.log("/add");
//load Array
  const arrayRecipe = readData();
//store new info to array
  arrayRecipe.push(req.body);
//array to file
  writeData(arrayRecipe);

  res.send("add ok");
};

// DELETE
export const deleteRecipe = (req, res) => {
  console.log("/delete/one");
  res.send("delete ok");
};
// EDIT
export const editRecipe = (req, res) => {
  console.log("/edit");
  res.send("edit ok");
};
