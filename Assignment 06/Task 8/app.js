// Task 8 - Array of Objects
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

let loopMap = students.map(function(data) {
    return data.name
})

console.log(loopMap);

let loopForEach = students.forEach(function(data) {
    console.log(data.name + " scored " + data.marks + " marks");
})

let arr = ["Apple", "Banana", "Mango", {name : "Usman"}]