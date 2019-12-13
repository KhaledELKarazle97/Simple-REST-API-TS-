/* 
Database model file to determine the schema of the database and the fields
*/
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UsersSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true           
    },
    DoB: {
        type: String,
        required:true           
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    date_modified:{
        type:Date,
        default:Date.now
    }
});