import Animale from "./animali.js";

export default class Fattoria {
    constructor() {
    
        if (document.getElementById("btGa") != null) {
            document.getElementById("btGa").addEventListener('click', this.cGallo);
        }

        if (document.getElementById("btMa") != null) {
            document.getElementById("btMa").addEventListener('click', this.cMaiale);
        }

        if (document.getElementById("btMu") != null) {
            document.getElementById("btMu").addEventListener('click', this.cMucca);
        }
    }
//andreoli sei un gallo
    cGallo() {

        var gallo = new Animale("Gallo", "rapace", "2 zampe", "/img/gallo.jpg")
        document.getElementById("idImg").src = gallo.img;
        document.getElementById("idTipo").innerHTML = gallo.tipo;
        document.getElementById("idRazza").innerHTML = gallo.razza;
        document.getElementById("idZampe").innerHTML = gallo.nzampe;
    }
    cMaiale() {
//freeminasi
        var maiale = new Animale("Maiale", "carlozzo", "4 zampe", "/img/download(1).jpg")
        document.getElementById("idImg").src = maiale.img;
        document.getElementById("idTipo").innerHTML = maiale.tipo;
        document.getElementById("idRazza").innerHTML = maiale.razza;
        document.getElementById("idZampe").innerHTML = maiale.nzampe;
    }
    cMucca() {

        var mucca = new Animale("Mucca", "guido", "4 zampe","/img/download(1).jpg")
        document.getElementById("idImg").src = mucca.img;
        document.getElementById("idTipo").innerHTML = mucca.tipo;
        document.getElementById("idRazza").innerHTML = mucca.razza;
        document.getElementById("idZampe").innerHTML = mucca.nzampe;
    }
}