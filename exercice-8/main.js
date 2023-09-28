//j'ai essayé d'intégrer la fonction luck, mais elle ne fonctionne pas

class pokemeon {
    constructor(name, attack, defense, hp, /*luck*/){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }
}

/*luck = Math.random(0-1) 
function isLucky (Pokemon_luck, luck) {
    return (Pokemon_luck < luck);
}*/

let poke1 = new pokemeon("Poke1", 75, 25, 100);
console.log(poke1)

let poke2 = new pokemeon("Poke2", 50, 35, 90);
console.log(poke2)

while (poke1.hp > 0 || poke2.hp > 0){
    let degat1 = poke1.attack - poke2.defense
    poke2.hp -= degat1

    if (poke2.hp <= 0){
        console.log("Victoire : " + poke1.name)
        console.log("Defaite : " + poke2.name)
        break
    }else{
        console.log(poke2.name + " : \n Hp : " + poke2.hp)
    }

    let degat2 = poke2.attack - poke1.defense
    poke1.hp -= degat2

    if (poke1.hp <= 0){
        console.log("Victoire : " + poke2.name)
        console.log("Defaite : " + poke1.name)
        break
    }else{
        console.log(poke1.name + " : \n Hp : " + poke1.hp)
    }
}