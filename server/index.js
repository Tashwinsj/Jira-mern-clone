const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 5005; // Choose a port number for your server 
const methods = require('./controllers/auth.js')  
const login = methods.login ; 
const register = methods.register ; 
const mongoose = require('mongoose') 



app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/a' , (req , res)=>{
  res.send("wouking puh chill")
})
app.post('/auth/register' , register) 
app.post('/login' ,login)

const PORT = process.env.PORT || 6001;  
const uri = "mongodb+srv://tashwinsj:d9misgy4jMebcwle@cluster0.qfr3plr.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));




