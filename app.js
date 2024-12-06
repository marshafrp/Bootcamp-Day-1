const studentName = "Marsha"
let studentAge = 22
let studentGrade = undefined

console.log(studentName, studentAge);
console.log(studentAge)

let namaUsiaFormatLama = "Nama :" + studentName + "Usia : " + studentAge
let namaUseFormatBaru = `Nama: ${studentName} Usia: ${studentAge}`

console.log(namaUseFormatBaru)

//string
let courseName = "Javascript 101";
//Number
let score = 95.5;
//Boolean
let isPassing = true;
//Undefined
let nextCourse;
//Null
let CertificateNumber = null;

console.log(courseName)

//Array
let courseModules = ["Variables", "Functions", "Objects", "Arrays"];
//Object
let student = {
    name: "Marsha",
    age: 22,
    grades: [100, 90,91],
    contact: {
        email: "marshandafebrianaputri@gmail.com",
        phone: "081332066166"
    }
};

console.log(courseModules[2]) //Array
//Object
console.log(student)
console.log(student.contact)
console.log(student.contact.phone)

let saldo = 1000
saldo2 = "1000"

/*
if(saldo == saldo2) //hanya membandingkan isi atau nilai, 1000  & "1000"
{
    //true
}

if(saldo === saldo2) //membandingkan isi dan tipe data, 1000  & "1000"
{
    //false
}
*/

let totalScore = 85+90;
let averageScore = totalScore/2;
let bonusPoints = score++;
let penaltyPoints = score--;
let remainder = 10 % 3;

//Assignment operator
let currentScore = 85;
currentScore += 5; 
currentScore -=2;

let isEqual = 5 == "5";
let isStrictEqual = 5 === "5";
let isGreater = 90 > 85;
let isLessOrEqual = 85 <=90;

/*
let homework = 90;
let midterm = 85;
let final = 95;
*/

//logical operator
let hasPassingGrade = score>=60;
let hasAttendance = true;

//AND operator
let willPass = hasPassingGrade && hasAttendance;

//OR operator
let needshelp = (score < 60) || (attendance < 80);

//NOT operator
let isFailing = !hasPassingGrade;

