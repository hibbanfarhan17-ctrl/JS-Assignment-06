let students = []

let std1 = {
    name : "ALi",
    marks : 80
}

let std2 = {
    name : "Sara",
    marks : 92
}

let std3 = {
    name : "Ahmed",
    marks : 65
}

let std4 = {
    name : "Zain",
    marks : 50
}

students.push(std1, std2, std3, std4)

function findTopper(students) {
    let topper = students[0]

    for (let i = 1; i < students.length; i++) {
        if (students[i].marks > topper.marks) {
            topper = students[i]
        }
    }

    console.log("Topper: " + topper.name);
    console.log("Marks: " + topper.marks);
}

findTopper(students)