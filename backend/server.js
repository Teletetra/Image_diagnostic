const express=require('express');
const connectDB=require('./src/config/db')
const app=express();

app.use(express.json())

app.get('/',(req,res)=>{
  res.json({
    Message:"the project is start building"
  })
})

connectDB()
  .then(()=>{
    app.listen(5000,async()=>{
      console.log(`"server is start runnig on http://localhost:5000/" `)
    })
  })
  .catch((error)=>{
    console.log(error,"connection failed");
    process.exit(1)
  })
