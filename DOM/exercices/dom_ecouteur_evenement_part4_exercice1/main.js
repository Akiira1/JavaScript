let h1 = document.querySelector("h1")


function blue() {
    h1 = h1.setAttribute("style", "color: blue;")
}

document.querySelector("h1").addEventListener("click", blue)


