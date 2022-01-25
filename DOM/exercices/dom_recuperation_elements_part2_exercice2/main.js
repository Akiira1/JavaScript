// 1
let div = document.getElementsByTagName("div")[0]
console.log(div.firstElementChild)

// 2
let titreN3 = document.getElementsByTagName("h3")[1]
console.log(titreN3);

// 3
console.log(titreN3.previousElementSibling);

// 4
let grandP = document.getElementsByTagName("p")[1]
console.log(grandP.nextElementSibling);

// 5
let ul = document.getElementsByTagName("ul")
console.log(ul);

// 6
console.log(ul[0].firstElementChild);

// 7
let li = document.getElementsByTagName("li")[3]
console.log(li.nextElementSibling);

// 8
let p3 = document.getElementsByTagName("p")[3]
console.log(p3.nextElementSibling.nextElementSibling);

// 9
let span = document.getElementsByTagName("span")[1]
console.log(span.parentElement.nextElementSibling);

// 10
let b = document.getElementsByTagName("b")[2];
console.log(b.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild)

// 11
let grandPara = document.querySelector(".grandParagraphe")
console.log(grandPara);

// 12

let li2 = document.querySelectorAll("li")
console.log(li2);

li2.forEach (element => {
    console.log(element.innerText);
})
