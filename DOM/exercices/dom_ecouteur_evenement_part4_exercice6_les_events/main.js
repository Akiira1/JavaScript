function change (e){
    
    if (e.target.tagName === "DIV") {
        e.target.style.border = "1px solid red"
    }
    if (e.target.tagName === "P"){
        e.target.style.fontWeight ="bolder"
        e.target.style.color = "red"        
    }
    if (e.target.tagName === "H1"){
        e.target.style.textDecoration = "underline" 
    }
    if (e.target.tagName === "H2"){
        e.target.innerHTML = e.target.innerHTML.substring(0, e.target.innerText.length - 1)
    }

}

addEventListener("click", change)



let phrase = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
let sect = document.getElementsByTagName("section")[0]

function change2() {
    sect.children[0].innerText = phrase
}
console.log(sect, phrase);

sect.addEventListener("mouseover", change2)
