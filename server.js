const express = require('express')
const app = express()
const port = 3005

const cors = require('cors')
app.use(cors())

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://service-account:bigpassword@cluster0-azpf6.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {
//   const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  
//   collection
//     .find()
//     .limit(5)
//     .toArray()
//     .then(data => console.log(data))

//   // perform actions on the collection object
//   client.close();
// });


app.get('/getSogetiEmployees', (req, res) => {
  const data = [
    {
      firstName: "Joel",
      lastName: "Mercurio",
      from: "Cincinnati",
      image: "https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg",
      phone: "1-555-5555"
    },
    {
      firstName: "Subha",
      lastName: "Mojumder",
      from: "Baltimore",
      image: "https://thenypost.files.wordpress.com/2019/12/cat.jpg?quality=80&strip=all",
      phone: "1-555-5555"
    },
    {
      firstName: "Carson",
      lastName: "Funk",
      from: "Kansas-Missouri",
      image: "https://static01.nyt.com/images/2019/09/04/business/04chinaclone-01/merlin_160087014_de761d9a-4360-402d-a15b-ddeff775760d-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      phone: "1-555-5555"
    },
    {
      firstName: "Soheila",
      lastName: "Escobar",
      from: "Baltimore",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/25/11/istock-1069317442.jpg?w968h681",
      phone: "1-555-5555"
    },
    {
      firstName: "Francisco",
      lastName: "Olmos",
      from: "Dallas",
      image: "https://www.thesprucepets.com/thmb/jbD_0GJnIVGmnLve7QDe9hCDbPU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp33a24e10lxw100_Medium_214761-5af9d6d7875db900360440a7.jpg",
      phone: "1-555-5555"
    }
  ]

  res.send(JSON.stringify(data))
})

app.listen(port, () => console.log(`server running on ${port}`))