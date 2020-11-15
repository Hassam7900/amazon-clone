const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const Stripe  = require('stripe')("sk_test_51Hm5kQAxodsVS4Oq68ZRDz29Vw9woVqCO4XEkPoXLYDTgiqSK2NiLf5EVYZ0NgySD1mydxgZhbFoLzKKXHOld6i600F2naP5FW");



//Api

//App config
const app = express();
//Middleware
app.use(cors({origin:true}));
app.use(express.json());
//API routes
app.get("/",(req,res)=> res.status(200).send("Working!!!!!!!!!"))
app.post("/payment/create", async (req,res)=>{
    const total = req.query.total;
    console.log("worked")
    console.log("requested amount >>>>>>>>> ",total);
    const paymentIntent = await Stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
      });
     console.log("payment key = ",paymentIntent.client_secret)
    res.send({
        clientSecret:paymentIntent.client_secret
    })
})
//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-7a363/us-central1/api
