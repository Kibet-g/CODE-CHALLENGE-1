//We imported the code for readline which read the input from the user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//we define a function now that will be able get the student score using a student grade 
function getStudentGrade(score) {
    if (score > 79)
        return 'A';
    else if (score > 69)
        return 'B';
    else if (score > 59)
        return 'C';
    else if (score > 49)
        return 'D';
    else
        return 'E = You failed the exam!!';
}
//we implement the code where the user will input his or her marks from 1 to 100
readline.question('Please enter your marks from 0 to 100: ', (studentMarks) => {
    studentMarks = Number(studentMarks); // We Convert the input to a number
  //we implement the logic where it determines if the user enterered marks between 0 and 100
    if (studentMarks >= 0 && studentMarks <= 100) {
        const grade = getStudentGrade(studentMarks);
        console.log(`Your grade is: ${grade}`);
    } 
    //If the marks is invalid it throws an error to the user
    else {
        console.log('Invalid marks. Please enter marks between 0 and 100.');
    }
//we end the readline here because we are done with the code
    readline.close();
});
