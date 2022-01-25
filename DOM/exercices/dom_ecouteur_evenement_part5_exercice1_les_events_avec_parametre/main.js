// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// 1

document.querySelectorAll("input")[0].addEventListener("click", () =>{
    document.querySelectorAll("p")[0].textContent = pContent
})


// 2

function logg(e) {
    if(e.target.tagName === "H1"){
    e.target.style.color = theColor 
    e.target.style.backgroundColor = theBackground 
    console.log(e.target); 
    }
}

addEventListener("click", logg)