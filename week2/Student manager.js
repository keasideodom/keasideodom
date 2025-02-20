const class07Students = [];

function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("You cannot add an empty string to a class.");
        return;
    }
    
    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class.`);
        return;
    }
    
    if (studentName === "Queen") {
        class07Students.push(studentName);
        console.log(`Student ${studentName} added to the class.`);
        return;
    }
    
    if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07.");
        return;
    }
    
    class07Students.push(studentName);
    console.log(`Student ${studentName} added to the class.`);
}

function getNumberOfStudents() {
    return class07Students.length;
}

// Testing different scenarios
addStudentToClass("Alice");
addStudentToClass("Bob");
addStudentToClass("Charlie");
addStudentToClass("David");
addStudentToClass("Eve");
addStudentToClass("Frank");
addStudentToClass("Grace"); // Exceeds the limit

addStudentToClass("Alice"); // Already in class

addStudentToClass("Queen"); // Should always get a spot

console.log(`Number of students in class: ${getNumberOfStudents()}`);
