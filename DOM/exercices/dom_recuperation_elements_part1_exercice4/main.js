// 1
let h1 = document.getElementsByTagName("h1")[1]
console.log(h1.innerText);


// 2
let li = document.getElementsByTagName("li")
console.log(li[3].innerText);

// 3
let firstP = document.getElementsByTagName("p")[0]
console.log(firstP.innerText.toUpperCase());

// 4
let li2 = Array.from(li)

li2.forEach (element => {
    console.log(element.innerText.toUpperCase());
})
