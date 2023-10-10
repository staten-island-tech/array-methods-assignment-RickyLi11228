const students = [{
    firstname: "Hairy", 
    lastname: "Li", 
    intelligent: false, 
    graduating: true, 
    siblings: ["Brain", "Brairy"] 
},{
    firstname: "Ty", 
    lastname: "Yippee", 
    intelligent: false, 
    graduating: false, 
    siblings: ["Tap","Yap"],
},{
    firstname: "Devin", 
    lastname: "Chen", 
    intelligent: false, 
    graduating: false,
    siblings: ["none"],
}]
students.forEach((student)=> console.log(student.siblings))
students.forEach((student)=> console.log(student.firstname))
const graduates = students.filter((student) => student.graduating === true)
console.log(graduates)