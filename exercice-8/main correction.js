class pokemeon {
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = this.luck
    }

    attackPokemon(pokemeon){
        if(this.isLucky() === true) {
            let damage = this.attack - pokemeon.defense
            pokemeon.hp -= damage
            console.log(this.name + " a attaqué " + pokemeon.name + " pour " + damage + " dégat. Il lui reste " + pokemeon.hp)
        } else {
            console.log(this.name + " a raté son attaque.")
        }
    }

    isLucky(){
        return Math.random < this.luck === true
    }
}

let pikachu = new pokemeon("Pikachu", 12, 15, 200, 0.3);
let lucario = new pokemeon("Lukario", 20, 30, 500, 0.7);

pikachu.attackPokemon(lucario)

console.log(lucario.hp)

while (pikachu.hp >= 0 || lucario.hp >= 0){
    pikachu.attackPokemon(lucario)

    if (lucario.hp <= 0){
        console.log(lucario.name + " est mort.")
        break
    }
    
    lucario.attackPokemon(pikachu)

    if (lucario.hp <= 0){
        console.log(pikachu.name + " est mort.")
        break
    }
    
}

/*luck = Math.random(0-1) 
function isLucky (Pokemon_luck, luck) {
    return (Pokemon_luck < luck);
}*/