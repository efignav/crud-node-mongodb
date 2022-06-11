//#region middleware and server packages
import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
//#endregion

const app = express();

app.set("views", path.join(__dirname + "/views"));
// handlebars config
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views") + "/layouts"),
    partialsDir: path.join(app.get("views") + "/partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

export default app;
