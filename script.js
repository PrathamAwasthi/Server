const express = require('express');
const app = express();
const port = 3000;

const personData = [];

app.listen(port, () => {
  console.log(`Server running at http://192.168.1.37:${port}/`);
});

app.use(express.json());

app.use(express.urlencoded({
  extended:true
}));

//Post API

app.post("/api/add_person",(req, res)=>{
  
  console.log(req.body);
  const pData = {
    "id": personData.length+1,
    "pName":req.body.pName,
    "pPhone":req.body.pPhone,
    "pAge":req.body.pAge,
  }
  personData.push(pData);
  console.log(personData);
  res.status(200).send({
      "Status_code":200,
      "Message":"Person Data Add Successfully",
      "pData":pData
    });
});


app.get("/api/get_person", (req, res)=>{
  if(personData.length>0){
    res.status(200).send(personData);
  }else{
    res.status(200).send(
      {
      "status_code":200,
      "person":[],
      }
    );
  }
});
