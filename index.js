import express from "express"; 
import recipesRoutes from "./routes/recipesRoutes.js";


const app = express(); 
app.use(express.json());
//for recipes 

app.use("/recipes", recipesRoutes)



app.listen(5000, ()=> console.log("Server is up and running"));




