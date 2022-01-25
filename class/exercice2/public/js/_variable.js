import {Appartement, Persos, Produit} from "./_class.js";


let batcave = new Appartement("Batcave", [], [])

let zoro = new Persos("Roronoa", "Zoro", 21, 500, []);
let robin = new Persos("Nico", "Robin", 30, 500, []);
let vivi = new Persos("Nefertari", "Vivi", 18, 500, []);

let katana = new Produit("Katana", 200, "120cm",)
let fleur = new Produit("Fleur", 50, "5cm",)
let couronne = new Produit("Couronne", 400, "50cm", )
let coffre = new Produit("Coffre", 100, "100cm",  )
let fruit = new Produit("Demon-Fruit", 250, "20cm",)


export {batcave, zoro, robin, vivi, katana, fleur, couronne, coffre, fruit}

