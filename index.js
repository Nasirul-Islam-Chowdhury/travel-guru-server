const express = require("express")
const cors = require("cors")
const app = express();
const port = process.env.Port || 5000;
app.use(cors());


app.get('/', (req, res)=>{
    res.send("running in 5000")
})
const hotels = require("./Data/hotels.json");

app.get('/hotels', (req, res)=>{
    res.send(hotels);
})

app.get('/hotels/:id', (req, res)=>{
    const id = req.params.id;
    const hotel = hotels.find(ht=> ht.id == id);
    res.send(hotel);
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})