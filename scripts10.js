$(function(){   
    
    $(".button").click(function(){
	alert("this worked!");
     });
});

function process(){
    var color=document.getElementById("color").value;
    document.body.style.backgroundColor=color;
}
