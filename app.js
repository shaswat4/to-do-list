
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.static("public"));


var items = [];
var workItems = [];

app.get( '/', function (req , res){

    let day = getDay();
    
    res.render( 'list' , {listTitle : day , list_items : items  } );

});

app.listen(3000 , function (){
    console.log("listening at port 3000");
})

app.post( '/' , function (req , res){

    let txt = req.body.newItem ;

    logs( req.body );

    if ( req.body.list === "Work List"){
        workItems.push(txt);
        res.redirect('/work');

    } else{

        items.push(txt);
        logs(items);
        res.redirect('/');
    }
    
    
});

app.get( '/work' , function (req , res) {
    
    res.render( 'list' , {listTitle : "Work List" , list_items : workItems } );
} );

app.post( '/work' , function (req , res) {
    
    let temp = req.body.newItem;
    workItems.push(temp);

    res.redirect('/work');

});


function getDay() {
    
    //const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    //let day = weekday[d.getDay()];

    let options = {
        weekday : "long",
        day : "numeric" , 
        month : "long"
    };

    let temp = d.toLocaleDateString("en-US" , options);
    //console.log(temp);

    return temp;
}

function logs(args) {
    console.log(args);
}
