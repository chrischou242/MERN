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
        return this.health += 10;
         
    }
}

class SuperNinja extends Ninja {
    constructor(name,health, wisdom){
        super(name);
        this.health = 200;
        this.wisdom = 10;
    }

    speakWisdom(){
        return "Wisdom: " + this.wisdom;
    }
       
    drinkSake2(){
        return this.drinkSake();
    }
}


const ninja1 = new Ninja("ChrisChou", 100);
console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());


const ninja2 = new SuperNinja("ChouChou",100);
console.log(ninja2.sayName());
console.log(ninja2.speakWisdom());
console.log(ninja2.drinkSake2());
