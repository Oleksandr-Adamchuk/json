// JavaScript File

var obj = {
    name : "Username",
    age : 20,
    salary : 2000,
};

$(document).ready(function(){
   var json = JSON.stringify(obj); 
   
    $("#toJson").click(function(){
        $("#obj").append(json);
    });
    
    var jsObject = JSON.parse(json);
    
    $("#toJSObject").click(function(){
        console.log(jsObject);
});
});
