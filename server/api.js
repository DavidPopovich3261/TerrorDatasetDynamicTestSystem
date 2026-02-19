import express from "express"
import cors from "cors"
import csv from "async-csv"
import { promises as fs } from "fs";
 

const app = express()
app.use(express.json())
app.use(cors())



const load=async() => {
  const csvString = await fs.readFile('../server/db/terrorData.csv', 'utf-8');
   const data= await csv.parse(csvString, { columns: true });
   const sendData=[]
   for (let i =1;i<=50;i++){
       let y = Math.floor(Math.random()*(4000-1+1))+1
       sendData.push(data[y])
   }
   return(sendData);
}



app.get("/lodeData",async(req,res)=>{
    const data = await load()    
    res.json({data})
})


app.listen(8000,()=>{
    console.log("server run ...");
    
})