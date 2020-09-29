class Card {
    constructor (name, cost ) {
        this.name = name;
        this.cost = cost; 
    }

    play(){
        console.log("Player Summons " + this.name)
    }
}
class UnitCard extends Card{
    constructor(name,cost, power, resilience){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }

    Attack(target){
        target.power -= 3;
        console.log(target.power);
    }
}

class EffectCard extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name, cost)
        this.text= text;
        this.stat=stat;
        this.magnitude=magnitude;
    }

    UseCard(target){
        if (this.stat == "Resilience"){
            target.resilience += this.magnitude;
            console.log(target.resilience)
        }
        else {
            target.power += this.magnitude;
            console.log(target.power)
        }
        
    }
    
}
const Card1 = new UnitCard("Red Belt Ninja" , 3, 3, 4);
const Card2 = new UnitCard("Black Belt Ninja" , 4,5,4);

const HardAlgorithm = new EffectCard("Hard Algorithm ",2,"Increase target's resilience by 3","Resilience",3 )


const Effect2 = new EffectCard("Unhandled Promise Rejection" , 1 ,"reduce target's resilience by 2", "Resilience", -2 )

const Effect3 = new EffectCard("PairProgramming",3,"incease target'spower by 2", "Power",2)




//turn 1
Card1.play();
HardAlgorithm.UseCard(Card1);


//turn2
Card2.play();
Effect2.UseCard(Card1);


//turn2
Effect3.UseCard(Card1);
Card1.Attack(Card2);











