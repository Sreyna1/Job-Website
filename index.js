var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/jobWeb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

// app.post("/sign_up",(req,res)=>{
    // var name = req.body.name;
    // var email = req.body.email;
    // var phno = req.body.phno;
    // var password = req.body.password;

    // var data = {
    //     "name": name,
    //     "email" : email,
    //     "phno": phno,
    //     "password" : password
    // }

//     db.collection('JobWeb').insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully");
//     });

//     return res.redirect('signup.html')
// }),

// app.get("/sign_in", (req, res)=>{
//     res.render("signin");
// }),
app.post("/sign_up",(req,res)=>{
    const {name,email,phno, password} = req.body
    // var name = req.body.name;
    // var email = req.body.email;
    // var phno = req.body.phno;
    // var password = req.body.password;

    console.log(req.body)

    var data = {
        name,
        email,
        phno,
        password,
    }

    db.collection('JobWeb').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('/Find-Job-Website/Index.html')
}),

app.get("/sign_in", (req, res)=>{
    res.render("signin");
}),


//login check
app.post("/sign_in", async(req, res)=>{
    try{
        var email = req.body.email;
        var password = req.body.password;

        console.log(`${email} and password is ${password}`)
    }catch(err){
        res.status(400).send("invalid Email")
    }
}),

//log in fb
//app.post('/login-with-facebook', async (req, res) => {
   // const { accessToken, userID } = req.body

    //const response = await fetch(`https://graph.facebook.com/v3.1/me?access_token=${accessToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`)
   // const json = await res.json()

   // if(json.userID === userID){

   // }else{

   // }
    

    app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('./public/index.html');
}).listen(3000);



console.log("Listening on PORT 3000");

