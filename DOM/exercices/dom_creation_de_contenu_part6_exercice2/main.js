// 1
let btn = document.getElementsByTagName("input")[0]
let btn2 = document.getElementsByTagName("input")[1]
let btn3 = document.getElementsByTagName("input")[2]
let ul = document.getElementsByTagName("ul")[0]

btn.addEventListener("click", () => {
    ul.removeChild(ul.firstElementChild)
})

// 2
btn2.addEventListener("click", () => {
    ul.removeChild(ul.lastElementChild)
})

// 3
btn3.addEventListener("click", () => {
    let randomN = Math.floor(Math.random() * (ul.children.length - 1))
    console.log(randomN);
    ul.removeChild(ul.children[randomN])
})

// 4
let li = document.createElement('li');
let listdeux = document.getElementsByTagName('ul')[1];
let body = document.body;
let btnexo4 = document.getElementsByTagName('input')[3];
body.appendChild(li);
li.textContent = "Bonjour";

btnexo4.addEventListener('click', () => {
    listdeux.replaceChild(li, listdeux.children[1])
})

// 5
let btn5 = document.getElementsByTagName("input")[5]
let liste2 = document.getElementsByTagName ("ul")[1]

btn5.addEventListener("click", () => {
    let Insert2 = document.getElementById("replaceValue")
    let liInsert2 = document.createElement("li")
    console.log(Insert2.value);
    liInsert2.textContent = Insert2.value

    liste2.replaceChild(liInsert2, liste2.children[2])

})

