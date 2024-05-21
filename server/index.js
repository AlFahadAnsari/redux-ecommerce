const express = require('express')
let app=express()
let cors = require('cors')
const { default: mongoose } = require('mongoose')
let port =3000


app.use(cors())
app.use(express.json())


try {
    mongoose.connect("mongodb+srv://ansari:alfahad@practice.0osi4ns.mongodb.net/Ecom-redux")
    console.log('connect hogya hai');
   } catch (error) {
      console.log('error',error);
   }

app.listen(port, ()=>{console.log(`port run on ${port}`);})