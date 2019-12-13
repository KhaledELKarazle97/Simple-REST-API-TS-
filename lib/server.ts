/* 
Setup file to configure the server port
*/
//call the app.ts file
import app from "./app";
//assign port 3000 to the server
const PORT = 3000;
//the app listen to port 3000
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})