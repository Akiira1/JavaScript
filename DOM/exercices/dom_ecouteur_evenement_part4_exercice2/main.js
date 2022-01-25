let h1 = document.querySelector("h1")

function red() {
    h1 = h1.setAttribute("style", "color: white; background-color: red;")
}
document.querySelector("h1").addEventListener("dblclick", red)





let h3 = document.querySelector("h3")

function cut() {
    h3.innerHTML = h3.innerHTML.substring(0, h3.innerText.length - 1)
}
document.querySelector("h3").addEventListener("mouseover", cut)




let p = document.querySelector("p")

function gold() {
    if (p.style.color === "gold") {
        p.style.color = "black"
        p.style.backgroundColor = ""
    }
    else{
        p.style.color = "gold"
        p.style.backgroundColor = "blue"
    }
}


console.log(p.style);
document.querySelector("p").addEventListener("click", gold)

