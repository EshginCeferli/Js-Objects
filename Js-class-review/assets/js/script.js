// let stu1 = {
//     name: "Togrul",
//     surname: "Quluzade",
//     age: 23,
//     phoneNumbers: [212121, 323232],
//     groups: [
//         {
//             name: "P130",
//             room: "Sirius",
//             teachers: [
//                 {
//                     name: "Cavid",
//                     age: "28"
//                 },
//                 {
//                     name: "Rovshen",
//                     age: "22"
//                 }
//             ]
//         },
//         {
//             name: "Dl210",
//             room: "Pluton",
//             teachers: ["Cavid", "Gulnar"]
//         }
//     ],
// }

// for (const item of stu1.phoneNumbers) {
//     if (item==212121) {
//         console.log(stu1.name);
//     }
// }

// let isExist = stu1.phoneNumbers.includes(21121)
// if (isExist) {
//     console.log("exst");
// }
// else {
//     console.log("no");
// }

// for (const item of stu1.groups) {
//     if (item.room=="Sirius") {
//         console.log(item.name);
//     }    
// }

// for (const item of stu1.groups) {
//     if (item.name=="P130") {
//         console.log(item.teachers);
//     }    
// }

// for (const item of stu1.groups) {
//     if (item.name=="P130") {
//         for (const teacher of item.teachers) {
//             console.log(teacher.name);
//         }
//     }    
// }

// let teacherFullData = () => {
//     for (const item of stu1.groups) {
//         if (item.name == "P130") {
//             for (const teacher of item.teachers) {
//                 if (teacher.name == "Cavid") {
//                     return(`${teacher.name} ${teacher.age}`);
//                 }
//             }
//         }
//     }
// }
// console.log(teacherFullData());





// let stu2 ={
//     name:"Seid",
//     surname:"Nureliyev",
//     age: 33,
//     phoneNumbers: [212121,323232],
//     groups:[
//         {
//             name:"P130",
//             room:"Sirius",
//             teacher:["Cavid","Ulker"]
//         }

//     ],
// }

// let stu3 ={
//     name:"Mirsamir",
//     surname:"Ezimzade",
//     age: 22,
//     phoneNumbers: [212121,323232],
//     groups:[
//         {
//             name:"P130",
//             room:"Sirius",
//             teacher:["Cavid","Ulker"]
//         }
//     ],
// }

// let groups = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addStudent: function (stu) {
//         if (this.students.length != this.capacity) {
//             this.students.push(stu)
//             return;
//         }
//         console.log("Group is full");
//     }
// }
// groups.addStudent("Orxan");
// groups.addStudent("Togrul");
// groups.addStudent("Seid");
// groups.addStudent("Cavidan");
// groups.addStudent("Sadiq");
// groups.addStudent("Nermin");
// groups.addStudent("Sadiq");
// groups.addStudent("Nermin");

// console.log(groups.students);

// let stu1 = {
//     id: 1,
//     name: "Ramil",
//     surname: "Binnatov"
// }


// let stu2 = {
//     id: 2,
//     name: "Togrul",
//     surname: "Quluzade"
// }

// let stu3 = {
//     id: 3,
//     name: "Emil",
//     surname: "Abdullayev"
// }

// let stu4 = {
//     id: 4,
//     name: "Seadet",
//     surname: "Murseliyeva"
// }


// let group = {
//     name: "P130",
//     capacity: 4,
//     students: [],

//     addStudent: function (stu) {

        // find method alternative 
//         let student = this.students.filter(m=>m.id == stu.id);
//         if (student != 0 ) { 
//             console.log("Already exist");
//             return;
//         }
//         if (this.students.length != this.capacity) {
//             this.students.push(stu);
//             return;
//         }
//         console.log("Qrupda bosh yer yoxdur");
//     }
// }
           
//             let student = this.students.find(m=>m.id == stu.id);
//         if (student != undefined ) { 
//             console.log("Already exist");
//             return;
//         }
//         if (this.students.length != this.capacity) {
//             this.students.push(stu);
//             return;
//         }
//         console.log("Qrupda bosh yer yoxdur");
//     }
// }

 

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);
// group.addStudent(stu4);

