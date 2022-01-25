let div = document.getElementById("content");

function logg(e) {
    console.log(e.target); 
    e.target.style.border = "1px solid red"   
}

div.addEventListener("click", logg)