let playlist = ["Anissa", "Musique B", "Musique C", "Musique D", "Musique E"]

class personnage {
    constructor(name, pv){
        this.name = name
        this.pv = pv
    }

    trajet(personnage){
        let nbtaxi = 0
        let nbFeu = 0
        while(nbFeu <= 30 && this.pv >= 0) {
            nbFeu++
            console.log("Feu numéro : " + nbFeu)
            let random = Math.floor(Math.random() * playlist.length)
            console.log("Nom de la musique à la radio " + playlist[random])
            if (playlist[0] === random){
                this.pv -= 1
                nbtaxi++
                console.log("Feu numéro : " + nbFeu)
                console.log("Il reste " + this.pv + " à " + this.name)
            }else if (this.pv === 0){
                console.log(this.name + " a explosé...")
                break  
            }else if (nbFeu === 30){
                console.log(this.name + " est arrivé !")
                break
            }
        }
    }
}

let john = new personnage("John", 10)
console.log(john)
john.trajet()
