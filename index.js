const students = [{
    firstname: "Hairy", 
    lastname: "Li", 
    intelligent: false, 
    friends: true, 
    siblings: ["Brain", "Brairy"] 
},{
    firstname: "Ty", 
    lastname: "Yippee", 
    intelligent: false, 
    friends: false, 
    siblings: ["Tap","Yap"]
},{
    firstname: "Devin", 
    lastname: "Chen", 
    intelligent: false, 
    friends: false,
    siblings: false,
}]

const friendless = students.filter((students) => students.friends === true)
console.log(friendless)
const has_siblings = students.filter((students) => students.siblings !== false)
console.log(has_siblings)
const sibling = students.forEach((students)=> students.siblings.forEach((siblings) => console.log(siblings)));
students.forEach((student)=> console.log(student.firstname))