//We imported the code for readline which read the input from the user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

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

readline.question('Please enter your marks from 0 to 100: ', (studentMarks) => {
    studentMarks = Number(studentMarks); // Convert the input to a number

    if (studentMarks >= 0 && studentMarks <= 100) {
        const grade = getStudentGrade(studentMarks);
        console.log(`Your grade is: ${grade}`);
    } else {
        console.log('Invalid marks. Please enter marks between 0 and 100.');
    }

    readline.close();
});
