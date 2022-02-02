const button = document.querySelector(".btn");
const hex = document.getElementById("hex");

button.addEventListener("click", function(){
    let color = "#";
    const symbols = "123456789ABCDEF";

    for(var i = 0; i<6; i++){
        color = color + symbols[Math.floor(Math.random()*16)];
    }
    document.body.style.background = color;
    hex.innerHTML = color;
});

/*function getNewColor(){
    var symbols, color;
    symbols = "0123456789ABCDEF";
    color="#";

    for(var i = 0; i<6; i++){
        color = color + symbols[Math.floor(Math.random()*16)];
    }
    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;
    
}*/
