// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        };
    }

    battleCry(){
        return 'Odin Owns You All!';
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);    
    }

    receiveDamage(damage){
        this.health = this.health - damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return 'A Saxon has died in combat';
        };
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    // Armies attack ⚔️

    vikingAttack(){
        // Choose a random viking in the army
        let randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikIndex] ;

        // Choose a random saxon in the army
        let randomSaxIndex =  Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxIndex] ;

        // Make saxon take the attack.
        let saxonDamage = randomSaxon.receiveDamage(randomViking.attack());

        // Remove Sax from Army
        if (randomSaxon.health <= 0) { this.saxonArmy.splice(randomSaxIndex, 1) };
        
        return saxonDamage;
    }

    saxonAttack(){
        // Choose random sax
        let randomSaxIndex =  Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxIndex];
        // Choose random vik
        let randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikIndex];

        let vikingDamage = randomViking.receiveDamage(randomSaxon.attack());

        if (randomViking.health <= 0) { this.vikingArmy.splice(randomVikIndex, 1) };

        return vikingDamage;
    }

    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}  
