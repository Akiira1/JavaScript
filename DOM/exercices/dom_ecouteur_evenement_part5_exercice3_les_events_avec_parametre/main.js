// 1
// let ul = document.querySelectorAll("ul")[0].children
// let ul2 = [...ul]


// ul2.forEach(element => {
//     element.addEventListener("click", () => {
//         alert(element.textContent)
//     })
// });

// document.getElementsByTagName("ul")[0].addEventListener("click", sayMyName)




// 2
let ul = document.querySelectorAll("ul")[0].children
let ul2 = [...ul]

function sayMyName() {
    
    ul2.forEach(element => {
        element.addEventListener("click", () => {
            let a = prompt()
            element.textContent = a
        })
    });
}
    
document.getElementsByTagName("ul")[0].addEventListener("dblclick", sayMyName)



// 3


let li1 = document.getElementsByTagName("input")[0]
let li2 = document.getElementsByTagName("input")[1]
let switch1 = document.getElementsByTagName("input")[2]

switch1.addEventListener("click", () => {
    let i = li1.value
    li1.value = li2.value
    li2.value = i
})

console.log(li1.value, li2.value);