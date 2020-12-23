var btn = document.getElementById("btn");
var box = document.querySelector(".box");
var textfield = document.getElementById("enter");
var to_do_item = document.createElement("p");
var clearbtn = document.getElementById("clear");



btn.addEventListener("click", function(){
    var to_do_item = document.createElement("p");
    
    clearbtn.addEventListener("click",function(){

        box.removeChild(to_do_item);
    });
    to_do_item.classList.add("todostyle");
    to_do_item.innerHTML = textfield.value;
    box.appendChild(to_do_item);
    textfield.vaule = "";
 
    to_do_item.addEventListener("click", function(){

     to_do_item.classList.add("linethrough");

     

    });
});
