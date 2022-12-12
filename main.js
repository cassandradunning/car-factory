/* Book 2 #5: Car Factory

Your job is to create the following functions. Each function should add a property to the 
chassis. Please use the function names and property names listed.

1. The addWheels() function should have a parameter for the incoming chassis object. 
It should add a new property to that object named wheels with a value of 4. The function 
should return the chassis object.

2.The addEngine() function should have a parameter for the incoming chassis object. 
It should add a new property to that object named engine with a value of "4.8L". 
The function should return the chassis object.

3. The addSteeringWheel() function should have a parameter for the incoming chassis object.
It should add a new property to that object named steeringWheel with a value of "Tilting". 
The function should return the chassis object.

4. The addDriveTrain() function should have a parameter for the incoming chassis object. 
It should add a new property to that object named driveTrain with a value of "Two wheel drive".
 The function should return the chassis object.

*invoke each function!
*store the returned object in a variable
*then console.log to check
*/



/*
	Note in the code below that the object that gets returned from the
	makeChassis() function above is stored in the chassis variable. That
	value is then sent to the addBody() function as that function's input.
*/

// 1.Produce a car chassis (no input, outputs new chassis object) 

// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
};


// 2.Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)

// parameter = newChassisObject
const addWheels = (newChassisObject) => {
    newChassisObject.wheels = 4;

    return newChassisObject;
};
const wheelChassis = addWheels(createChassis);

// 3. Add engine to chassis
const addEngine = (newChassisObject, engineSize) => {
    newChassisObject.engine = engineSize;
    return newChassisObject;
};
const engineChassis = addEngine(wheelChassis, "4.8L");

console.log(engineChassis);

//  4. Add Steering Wheel to Chassis

const addSteeringWheel = (newChassisObject, steeringType) => {
    newChassisObject.steeringWheel = steeringType;
    return newChassisObject;
};
const steeringChassis = addSteeringWheel(engineChassis, "Tilting");
console.log (steeringChassis);


// // 5. Add Body Type to Chassis (example on GitHub)

// 6. Add Drive Train to Chassis

const addDriveTrain = (newChassisObject, driveType) => {
    newChassisObject.driveTrain = driveType;
    return newChassisObject;
};
const driveChassis = addDriveTrain(engineChassis, "Two wheel drive");
console.log(driveChassis);




