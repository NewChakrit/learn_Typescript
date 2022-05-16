process.stdout.write("Hello in Node.js\n");
var firstName = "Metin";
// // Error type
// firstName = 10;
firstName = "New";
console.log(firstName);
// -----  Annotation  -------
function lengthOfString(s) {
    return s.length;
}
console.log(lengthOfString("Hello annotation"));
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var point = {
    x: 5,
    y: 10
};
function showResult(p) {
    console.log("x=".concat(p.x, ", y=").concat(p.y));
}
var result = {
    x: 5,
    y: 10
};
showResult(result);
// let year: number = 2021;
// year = "Twenty Twenty-One";
// //Error : Type 'string' is not assignable to type 'number'.
// let n: number = 10;
// console.log(n.toLocaleLowerCase());
// //Error : Property 'toLocaleLowerCase' does not exist on type 'number'.
// type Point = {
//   x: number;
//   y: number;
// };
// let point: Point = {
//   x: 5,
//   y: 10
// };
// **console.log(point.z);
// // Error :Property 'z' does not exist on type 'Point'.
// -----  Type inferring  -------
// Type inferring คือการประกาศตัวแปรโดยไม่เราไม่จำเป็นต้องระบุประเภทข้อมลที่ต้องการใช้งาน
// แต่ปล่อยให้ TypeScript คาดเดาประเภทข้อมูลให้อัติโนมัติจาก Literal
var siteName = "marcuscode";
// siteName = 10; // Error
console.log(siteName);
function add(a, b) {
    return a + b;
}
var sum = add(2, 3);
console.log(sum);
// เมื่อคุณประกาศตัวแปรโดยไม่ได้กำหนดค่าและประเภทข้อมูลให้กับมัน TypeScript จะใช้ any
// เป็นประเภทข้อมูลของตัวแปรแทน นี่หมายความว่าตัวแปรดังกล่าวจะสามารถใช้เก็บข้อมูลประเภทใดก็ได้
var number;
number = 1;
number = "One";
console.log(number); //one
function greet(name) {
    console.log("Hello ".concat(name, "!"));
}
greet("Chris");
greet(15);
// -----  Compile-time type checking  -------
var a = 10;
var b = 20;
var summary = a + b;
console.log("sum of a and b = ".concat(summary));
var c = 30;
var d = 40;
var summary2 = c + d;
console.log("sum of c and d = ".concat(summary2));
// โปรแกรมประกอบไปด้วย 4 คำสั่ง โดยแต่ละคำสั่งจะจบด้วยเครื่องหมายเซมิโคลอน (;)
var user = {
    id: 1,
    name: "Metin"
};
var colors = ["Red", "Green", "Blie"];
// นอกจากนี้ ในหนึ่งคำสั่งนั้นยังสามารถมีการทำงานได้มากกว่าหนึ่งอย่าง โดยเราสามารถแยกการทำงานภายในคำสั่งได้ด้วยเครื่องหมายคอมมา (,) เช่น
var id = 1, name2 = "Matin";
// ------- Block --------
// บล็อค (Block) เป็นการกำหนดขอบเขตการทำงานของโปรแกรมโดยการรวมหลายคำสั่งเข้าด้วยกันให้อยู่ในระหว่างวงเล็บปีกกา {} ที่เรียกว่าขอบเขตของบล็อค
// ในภาษา TypeScript นั้นบล็อคสามารถสร้างได้จากหลายวิธี รูปแบบของบล็อคที่ง่ายที่สุดคือการสร้างบล็อคแบบไม่ระบุชื่อ
console.log("Top level");
{
    var name_1 = "Martin";
    console.log("Hello ".concat(name_1));
}
{
    var name_2 = "Block2";
    console.log("Hello from ".concat(name_2));
}
// สำหรับการสร้างบล็อคที่พบได้ในการเขียนโปรแกรมทั่วไปคือการสร้างบล็อคจากคำสั่งควบคุมประเภทต่างๆ
// ในภาษา TypeScript เช่น คำสั่ง if for while หรือ do while
// นี่เป็นตัวอย่างการสร้างบล็อคด้วยคำสั่ง if else สำหรับตรวจสอบคะแนนในตัวแปร
var score = 70;
if (score > 50) {
    console.log("Your score is ".concat(score));
    console.log("It's greater than 50");
}
else {
    console.log("Your score is unacceptable");
}
function fn1() {
    console.log("fn1 working...");
}
function fn2() {
    console.log("fn2 working...");
}
fn2();
// นอกจากนี้ บล็อคสามารถที่จะซ้อนกันได้ มันเป็นเรื่องปกติที่ในการเขียนโปรแกรมคุณจะพบว่าบล็อคอาจจะซ้อนกันเป็นจำนวนมาก
for (var i_1 = 1; i_1 <= 10; i_1++) {
    console.log(i_1);
    if (i_1 % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
// ตัวแปรที่ประกาศในบล็อคจะสามารถใช้งานได้เพียงแค่ในบล็อคดังกล่าวเท่านั้น เราจะไม่สามารถใช้งานที่ภายนอกของบล็อคได้ ยกตัวอย่างเช่น
var n = 10;
if (n == 10) {
    var message = "n is ten";
    console.log(message);
}
// Cannot use message here
// --------- Expressions -----------
// นิพจน์ (Expression) คือการทำงานร่วมกันของตัวดำเนินการและตัวถูกดำเนินการเพื่อทำให้เกิดผลลัพธ์ใหม่ขึ้น
// โดยที่ตัวถูกดำเนินการสามารถเป็นได้ทั้ง Literal ตัวแปร หรือออบเจ็คทุกประเภทในภาษา TypeScript
//  นี่เป็นตัวอย่างของ Expression อย่างง่ายในภาษา TypeScript
3 + 5;
1 < 10;
true && false;
4 >> 2;
"marcus" + "code";
!5;
// Expression เหล่านี้เกิดจากการทำงานร่วมกันของตัวดำเนินการและตัวถูกดำเนินการ
// และส่งผลให้เกิดค่าใหม่ขึ้น โดยปกติแล้วแค่ Expression เพียงอย่างเดียวยังไม่สมบูรณ์ที่จะกำหนดการทำงานของโปรแกรมได้
//  ดังนั้นเราสามารถเก็บ Expression ไว้ในตัวแปร หรือใช้มันร่วมกับคำสั่งอื่นในโปรแกรมได้ ยกตัวอย่างเช่น
// Assign to a variable
var i = 3 + 5;
// Use as condition
if (1 < 10) {
    console.log("Of course! one is less than ten");
}
// Use in function calls
console.log(4 >> 2);
// แบบที่ซับซ้อนก็สามารถสร้างได้เช่นเดียวกัน ในตัวอย่างนี้ เป็นโปรแกรมคำนวณหาด้านที่ยาวที่สุดของสามเหลี่ยมมุมฉาก
// โดยใช้ทฤษฎีบทของปีทากรอรัสที่คุณน่าจะคุ้นเคยในวิชาคณิตศาสตร์
var f = 3;
var g = 4;
var h = Math.sqrt(a * a + b * b);
console.log("h = ".concat(h));
