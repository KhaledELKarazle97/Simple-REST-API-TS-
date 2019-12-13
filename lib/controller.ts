/* 
This file is a controller to carry out all the CRUD operations
*/
import * as mongoose from 'mongoose';
import { UsersSchema} from './dbModel';
import {Request,Response} from 'express';
//call the table schema
const User = mongoose.model('User', UsersSchema);
//controller to manage the CRUD operations
export class UsersController {
    //to get all users
    public getAllUsers(req: Request, res: Response) {
        User.find({}, (err, users) => {
            if (err) {
                //res.send(200);
                res.send(err);
            } else {
               // res.json(users)
               res.render('index',{
                    users:users
               });

            }
        })
    }

    // go to create a user page
    public createUser(req:Request, res:Response){
        res.render('create');
    }      

    // to add new users
    public addNewUser(req: Request, res: Response) {
        let newUser = new User(req.body);
        User.find({email:newUser['email']},function(err,doc){
            if(doc.length){
                res.send("User Already Exist");
            }else{
                if(newUser['fullName'] =='' || newUser['email'] == '' || newUser['DoB'] == ""){
                    res.send("Some fields are empty");
                }else{
                    newUser.save((err) => {
                        if (err) {
                            res.send(err);
                        }
                        res.redirect('/')
                    });
                }
            }
        }) 
    }
        //go to edit a user
       public editUser(req:Request,res:Response){
        User.findById(req.params.userID, function (err, users){res.render('edit',{users:users})});
     }

    // to update a current user
    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({
                _id: req.params.userID
            }, {
                $set: req.body,
                date_modified: Date.now()
            },
            
            (err, response) => {
                if (err) {
                    res.send(err);
                }
                res.redirect('/');
            }); 
    }
    //to delete a current user
    public deleteUser(req: Request, res: Response) {
        User.remove({
            _id: req.params.userID
        }, (err, response) => {
            if (err) {
                res.send(err);
            }
            res.json({
                message: 'User Deleted'
            });
        });
    }
}