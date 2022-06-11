//#region import backend files
import app from "./app";
import "./database";
import {PORT} from './config'
//#endregion

app.listen(PORT);
console.log("Server on port", PORT);
