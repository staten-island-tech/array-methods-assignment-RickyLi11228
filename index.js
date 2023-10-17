const students = [{
    firstname: "Hairy", 
    lastname: "Li",  
    friends: true, 
    siblings: ["Brain", "Brairy"] 
},{
    firstname: "Ty", 
    lastname: "Yippee", 
    friends: false, 
    siblings: ["Tap","Yap"]
},{
    firstname: "Devin", 
    lastname: "Chen", 
    friends: false,
    siblings: false,
}]

const friendless = students.filter(((students) => students.friends === true))
console.log("Students with friends:")
friendless.forEach((student)=> console.log(student.firstname))
const has_siblings = students.filter((students) => students.siblings !== false)
console.log("Students with siblings:")
has_siblings.forEach((student)=> console.log(student.firstname))
console.log("Student's siblings:")
const sibling = students.forEach((students)=> students.siblings.forEach((siblings) => console.log(siblings)))
