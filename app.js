
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');


app.get( '/', function (req , res){

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    res.render( 'lists' , {day_var : day } );

});

app.listen(3000 , function (){
    console.log("listening at port 3000");
})
