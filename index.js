const express = require('express');
const app=express()
const port=process.env.PORT || 5000
const cors=require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');

app.get('/',(req,res)=>{
res.send('alaladufgisyuisuhfd8is7ghdlkudhgfiudgfalaalalalall')
});

// midleware
app.use(cors())
app.use(express.json())
// userTalha
// pass:



const uri = "mongodb+srv://userTalha:PdjMrm1toZHLyuPJ@cluster0.z4bsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
  try {
    await client.connect();
    const userCollection = client.db('FoodUser').collection('user');

     // get method=================================
    //  back end e capture kora data back end e show korabo
    // ====================
    app.get('/user', async(req,res)=>{
      const query={};
      const cursor = userCollection.find(query);
   
     const users= await cursor.toArray();

      res.send(users)
      });
   

    // post method   ======================================
    // front end e post korbo and back end e capture kore 
    // ====================
    app.post('/user', async(req,res)=>{
         const newUser=req.body
         console.log("ihdgiudhv",newUser);
const result= await userCollection.insertOne(newUser)
         res.send(result)
    
    })
   
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
 app.listen(port,()=>{
     console.log("ifhdyfg",port);
 })