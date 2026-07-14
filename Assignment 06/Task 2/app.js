// Task 2 - Student Grade
function checkGrade(marks) {
    if (marks >= 80) {
        console.log("A Grade");
    } else if (marks >= 70 && marks < 79) {
        console.log("B Grade");
    } else if (marks >= 60 && marks < 69) {
        console.log("C Grade");
    } else if (marks >= 50 && marks < 59) {
        console.log("Pass");
    } else if (marks < 50) {
        console.log("Fail");
    } else {
        console.log("Invalid marks");
    }
}

// Testing
checkGrade(85);
checkGrade(75);
checkGrade(65);
checkGrade(55);
checkGrade(45);