let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}


// 1
let elements = document.querySelectorAll("#liste-competences>h2")
console.log(elements);
// 2
let i = 0
for (let element in competences) {
    elements[i].innerText = `${element} : ${competences[element]}`
    
    let num = Number(competences[element].replace("%", ""))
    
    if(num < 50){
        elements[i].setAttribute("style", "background-color:red;")
    }
    if(num > 50){
        elements[i].setAttribute("style", "background-color:green; color:white;")
    }
    if(num == 50){
        elements[i].setAttribute("style", "background-color:none;")
    }
    if(num == 100){
        elements[i].setAttribute("style", "background-color:gold; color:black;")
    }
    i++
}
console.log(competences);
// 3
