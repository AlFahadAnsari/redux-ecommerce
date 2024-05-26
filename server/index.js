import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userrouter from './routes/user.router.js'
const app = express();
let port =3000


app.use(cors())
app.use(express.json())


try {
    mongoose.connect("mongodb+srv://ansari:alfahad@practice.0osi4ns.mongodb.net/Ecom-redux")
    console.log('connect hogya hai');
   } catch (error) {
      console.log('error',error);
   }



   app.use('/signup',userrouter)


app.listen(port, ()=>{console.log(`port run on ${port}`);})