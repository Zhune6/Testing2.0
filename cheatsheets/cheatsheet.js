
function shrink(){

    var x = document.getElementById("box");innerHTML = x.style.height= "10px";

};

function grow(){

    var y = document.getElementById("box");innerHTML =y.style.height= "250px"

};

function reset(){

    // correct var reset = document.getElementById("box");innerHTML =reset.style.height = "150px"
    document.getElementById("box").style.height = "150px"

};

function changep() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
};


 document.getElementById("colorbtn");addEventListener("click",color)
function color() {
     document.getElementById("box").style.backgroundColor ="red"
};
