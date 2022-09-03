class Vehicle {
    name?: string;
    // set _name(){
    //     this.name
    // }
}

function modifyObject<GenericVehicle extends Vehicle> (arg: GenericVehicle): GenericVehicle {
    arg.name = "Lambo";
    return arg;
}

const classTest = modifyObject(new Vehicle());
console.log(classTest);

function anotherObject(arg: Vehicle): Vehicle {
    arg.name = "Ferrari";
    return arg;
}

const anotherClassTest = anotherObject(new Vehicle());
console.log(anotherClassTest);

class MarkExtension extends Vehicle {
    mark?: string;
}

const addMark = modifyObject(new MarkExtension());
console.log(addMark);

const addMarkTest2 = anotherObject({name: "s"});
console.log(addMarkTest2);

type TSTRINGNUMBER = string | number;

function ObjectTypeGeneric<Gen extends TSTRINGNUMBER> (arg: Gen): Gen {
    return arg;
}

function ObjectTypeTest (arg: TSTRINGNUMBER) {
    
}