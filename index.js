import express from "express";
import bodyParser from "body-parser";
import { dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render(__dirname + "/public/welcome_page.ejs");
});



app.post("/submit", (req,res) => {
    const { name, email, description } = req.body;
    res.redirect("/home");
})

app.get("/home", (req,res) => {
    res.render(__dirname + "/public/home_page.ejs");
});

app.listen(port, () => {
    console.log(`Server is running at ${port}.`);
})