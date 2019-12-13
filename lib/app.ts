/* 
This file contain all neccessary configurations like calling the database, the routes folder, etc
*/

//import all needed components
import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import {Routes} from './router';

class App {

    public app: express.Application; //declaring the express app
    public myRoute: Routes = new Routes(); //call the routes
    public mongoUrl: string = 'mongodb://127.0.0.1/inspired'; // declaring the database, please change the URL later for testing


    constructor() {
        //init all the necessary variables and call necessary functions
        this.app = express();
        this.config();
        this.callDB();
        this.myRoute.routes(this.app);
    }

    private callDB(): void {
        mongoose.Promise = global.Promise; 
        mongoose.connect(this.mongoUrl);        //connect to mongo local
        mongoose.set('useFindAndModify', false); //to stop the deprecation warnings
    } 

    private config(): void {
        //allow the app to use the bodyparser to manage JSON formatted data
        this.app.use(bodyParser.json());
        this.app.use("/static", express.static('./static/'));
        this.app.set('view engine','pug'); // to generate a html view
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        
    }

}
export default new App().app;