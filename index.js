const express = require('express');
require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json())

// mongoDB



// end
app.get('/', (req, res)=>{
    res.send("its running...")
})
app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})


