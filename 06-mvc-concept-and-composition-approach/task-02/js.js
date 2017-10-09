/**
 * Created by Iryna_Petrenko1 on 7/13/2017.
 */
function Car(name, color, speed, ...types) {
    constructorNew(name, color, speed, ...types);
    return {
        printStates: printState
    }

}
function Boat(name, color, speed, ...types) {
    constructorNew(name, color, speed, ...types);
    return {
        printStates: printState
    }
}
function Hovercraft(name, color, speed, ...types) {
    constructorNew(name, color, speed, ...types);
    return {
        printStates: printState
    }
}
const constructorNew = (name, color, speed, ...types)=> {
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.types = types
};
const canDoSomething = ()=> {
    let str = `Can move on ${this.types.join(" & ")}`;
    return str;
};

const printState = ()=> {
    let res = `${this.name}, color - ${this.color}, speed - ${this.speed}. `;
    let str = canDoSomething();
    console.log(res + str);
};
let someCar = new Car("Car", "red", "87", "land");
someCar.printStates();
let someBoat = new Boat("Boat", "red", "87", "water");
someBoat.printStates();
let someHovercraft = new Car("Hovercraft", "red", "87", "land", "water");
someHovercraft.printStates();
// Car("Car", "red", "87", "land", "water");
// Boat("Boat", "green", "89",  "water");
// Hovercraft("Hovercraft", "red", "7", "land", "water");
