class Ninja {
    constructor (name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength =3;

    }
    sayName() {
        return this.name;
    }

    showStats(){
        return "Health: " + this.health + " Speed: " + this.speed + " Strength: " + this.strength; 
    }

    drinkSake(){
        return "Health: " + this.health +10
    }
}




const ninja1 = new Ninja("ChrisChou", 100);
console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());