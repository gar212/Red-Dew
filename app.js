var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({exteneded: false}));
app.use(bodyParser.json());

app.get ("/", function(req,res){
	res.render("home.ejs");
});

// Static folder
app.use(express.static(__dirname + "/public"));

// app.listen(3000, () => {
//   console.log('Red Dew listening on port 3000!');
// });

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Red Dew Server Has Started!");
});