import {batcave, zoro, robin, vivi, katana, fleur, couronne, coffre, fruit} from "./_variable.js";

zoro.acheter(katana)
robin.acheter(fleur)
vivi.acheter(couronne)
zoro.acheter(fruit)
vivi.acheter(coffre)
console.log(zoro, robin, vivi)
console.log(katana, fleur, couronne, coffre, fruit)
batcave.personnes.push(zoro)
zoro.deposer(batcave.armoire)
console.log(batcave)
console.log(zoro)