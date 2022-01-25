// 1
let div = document.getElementsByTagName("div")[2]
console.log(div.firstElementChild)

// 2
console.log(div.lastElementChild)

// 3
console.log(div.lastElementChild.previousElementSibling.children[0])

// 4
console.log(div.lastElementChild.children[0])


// 5
console.log(div.lastElementChild.previousElementSibling)

// 6
console.log(div.lastElementChild)

// 7
console.log(div.firstElementChild.nextElementSibling);