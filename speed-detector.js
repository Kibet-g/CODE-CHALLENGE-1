const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Here we define the function for our speed detector
function speedDetector(speed) {
    // Declare our variables for the speed limit and the demerit points limit
    const speedLimit = 70;
    const demeritPointsLimit = 12;
    let demeritPoints = 0; // Initialize demeritPoints

    // The conditional statement to evaluate the demerit points using the speed limit
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        // Calculate the demerit points
        demeritPoints = Math.floor((speed - speedLimit) / 5);
    }

    // If the demerit points is above 12, the license should be suspended
    if (demeritPoints >= demeritPointsLimit) {
        return "License suspended";
    }

    // Return the calculated demerit points
    return "Points: " + demeritPoints;
}

// Prompt the user to enter their speed
rl.question("Please enter your speed: ", (input) => {
    const speed = parseInt(input); // Convert input to an integer
    const result = speedDetector(speed); // Call the speedDetector function
    console.log(result); // Output the result
    rl.close(); // Close the readline interface
});
