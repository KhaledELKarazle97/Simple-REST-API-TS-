/* 
Simple route file to manage all routes
*/

import {UsersController} from './controller';
export class Routes {   
    userController: UsersController = new UsersController();    
    public routes(app): void {          
        //all necessary routes for crud operations
        app.route('/').get(this.userController.getAllUsers);   //get all data on init
        app.route('/createUser').post(this.userController.addNewUser);  //add new user
        app.route('/updateUser/:userID').post(this.userController.updateUser) //update a user
        app.route('/deleteUser/:userID').delete(this.userController.deleteUser) //delete a user
        
        //to manage navigation between pages
        app.route('/new').get(this.userController.createUser);   //go to create user page
        app.route('/edit/:userID').get(this.userController.editUser);   //go to edit user page

    }
}