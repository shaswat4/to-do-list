
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');


app.get( '/', function (req , res){

    var day = getDay();
    
    res.render( 'list' , {day_var : day } );

});

app.listen(3000 , function (){
    console.log("listening at port 3000");
})


function getDay() {
    
    //const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    //let day = weekday[d.getDay()];

    var options = {
        weekday : "long",
        day : "numeric" , 
        month : "long"
    };

    var temp = d.toLocaleDateString("en-US" , options);
    console.log(temp);

    return temp;
}
