process.stdout.write("Hello in Node.js\n");

let firstName: string = "Metin";
// // Error type
// firstName = 10;

firstName = "New";

console.log(firstName);

// -----  Annotation  -------
function lengthOfString(s: string): number {
  return s.length;
}

console.log(lengthOfString("Hello annotation"));

class User {
  id: number;
  name: string;
}

// อธิบาย type ในclass Point
type Point = {
  x: number;
  y: number;
};
let point: Point = {
  x: 5,
  y: 10,
};

// ^ เมื่อทำงานกับออบเจ็ค Literal เราไม่สามารถกำหนดประเภทข้อมูลให้กับฟิลด์ของออบเจ็คได้โดยตรง
// เนื่องจากเครื่องหมายโคลอนถูกใช้ในการแบ่งแยกระหว่าง Key และ Value ไปแล้ว

type Result = {
  x: number;
  y: number;
};

function showResult(p: Result): void {
  console.log(`x=${p.x}, y=${p.y}`);
}

let result: Result = {
  x: 5,
  y: 10,
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

let siteName = "marcuscode";
// siteName = 10; // Error
console.log(siteName);

function add(a: number, b: number) {
  return a + b;
}
let sum = add(2, 3);
console.log(sum);

// เมื่อคุณประกาศตัวแปรโดยไม่ได้กำหนดค่าและประเภทข้อมูลให้กับมัน TypeScript จะใช้ any
// เป็นประเภทข้อมูลของตัวแปรแทน นี่หมายความว่าตัวแปรดังกล่าวจะสามารถใช้เก็บข้อมูลประเภทใดก็ได้
let number;
number = 1;
number = "One";
console.log(number); //one

function greet(name) {
  console.log(`Hello ${name}!`);
}

greet("Chris");
greet(15);

// -----  Compile-time type checking  -------

let a: number = 10;
let b: number = 20;
let summary: number = a + b;
console.log(`sum of a and b = ${summary}`);

let c: number = 30;
let d: number = 40;
let summary2: number = c + d;
console.log(`sum of c and d = ${summary2}`);
// โปรแกรมประกอบไปด้วย 4 คำสั่ง โดยแต่ละคำสั่งจะจบด้วยเครื่องหมายเซมิโคลอน (;)

let user: User = {
  id: 1,
  name: "Metin",
};

let colors = ["Red", "Green", "Blie"];

// นอกจากนี้ ในหนึ่งคำสั่งนั้นยังสามารถมีการทำงานได้มากกว่าหนึ่งอย่าง โดยเราสามารถแยกการทำงานภายในคำสั่งได้ด้วยเครื่องหมายคอมมา (,) เช่น
let id: number = 1,
  name2: string = "Matin";

// ------- Block --------

// บล็อค (Block) เป็นการกำหนดขอบเขตการทำงานของโปรแกรมโดยการรวมหลายคำสั่งเข้าด้วยกันให้อยู่ในระหว่างวงเล็บปีกกา {} ที่เรียกว่าขอบเขตของบล็อค
// ในภาษา TypeScript นั้นบล็อคสามารถสร้างได้จากหลายวิธี รูปแบบของบล็อคที่ง่ายที่สุดคือการสร้างบล็อคแบบไม่ระบุชื่อ

console.log("Top level");

{
  let name: string = "Martin";
  console.log(`Hello ${name}`);
}

{
  let name = "Block2";
  console.log(`Hello from ${name}`);
}

// สำหรับการสร้างบล็อคที่พบได้ในการเขียนโปรแกรมทั่วไปคือการสร้างบล็อคจากคำสั่งควบคุมประเภทต่างๆ
// ในภาษา TypeScript เช่น คำสั่ง if for while หรือ do while
// นี่เป็นตัวอย่างการสร้างบล็อคด้วยคำสั่ง if else สำหรับตรวจสอบคะแนนในตัวแปร

let score = 70;
if (score > 50) {
  console.log(`Your score is ${score}`);
  console.log("It's greater than 50");
} else {
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

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// ตัวแปรที่ประกาศในบล็อคจะสามารถใช้งานได้เพียงแค่ในบล็อคดังกล่าวเท่านั้น เราจะไม่สามารถใช้งานที่ภายนอกของบล็อคได้ ยกตัวอย่างเช่น

let n: number = 10;
if (n == 10) {
  let message: string = "n is ten";
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
let i: number = 3 + 5;

// Use as condition
if (1 < 10) {
  console.log("Of course! one is less than ten");
}

// Use in function calls
console.log(4 >> 2);

// แบบที่ซับซ้อนก็สามารถสร้างได้เช่นเดียวกัน ในตัวอย่างนี้ เป็นโปรแกรมคำนวณหาด้านที่ยาวที่สุดของสามเหลี่ยมมุมฉาก
// โดยใช้ทฤษฎีบทของปีทากรอรัสที่คุณน่าจะคุ้นเคยในวิชาคณิตศาสตร์

let f: number = 3;
let g: number = 4;

let h = Math.sqrt(a * a + b * b);
console.log(`h = ${h}`);

//  --------- Literals ---------

// Literal คือค่าคงที่ที่แสดงถึงค่าของประเภทข้อมูลพื้นฐานในภาษา TypeScript ซึ่งประกอบไปด้วย ตัวเลข
// ข้อความ Boolean null และ undefined นี่ถือว่าเป็นส่วนที่เล็กที่สุดของข้อมูลที่จะทำให้เกิดข้อมูลประเภทอื่นๆ
// ตามมา เช่น ออบเจ็ค หรืออาเรย์ เป็นต้น

// Numbers
12 - 3;
4.15;
34;
0b100010;
0o42;
0x22;

// String
("A");
("Blue");
("TypeScript");

// Boolean
true;
false;

// Others
null;
undefined;

let age: number = 31;
let sumAge = -2 + 4;
console.log("I love TypeScript");

let username: string = "admin";
let password: string = "secret";

if (username == "admin" && password == "secret") {
  console.log("Login successfully");
  console.log(`You're logged in as ${username}`);
} else {
  console.log("Invalid username or password");
}

console.log("Top Level 2");

function login(username01: string, password01: string) {
  console.log("Logging you in ...");

  if (username01 == "admin" && password01 == "secret") {
    console.log("Loggin successfully");
    console.log(`You're logged in as ${username}`);
  } else {
    console.log("Invalid username or password");
  }
}

let username01: string = "admin";
let password01: string = "secret";

login(username01, password01);

// --------- Delimiters ---------
// ตัวแบ่ง (,) , (:)

let aa: number = 1,
  bb: number = 2;
let languages: string[] = ["Typescript", "Python", "Ruby", "Go"];
let user01 = { id: 1, name: "Matin" };
console.log(a, b, languages, user);

function Add(a: number, b: number) {
  return a + b;
}

let sum01: number = Add(10, 20);
console.log(sum01);

for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

let items: string[] = ["Computers", "Pancake", "Mountain"];
console.log(`I like ${items[0]}`);

// สุดท้ายวงเล็บ () ถูกใช้ในสองวัตุประสงค์คือเพื่อควบคุมลำดับความสำคัญการทำงานของนิพจน์
//  และเพื่อกำหนดส่วนของพารามิเตอร์ของฟังก์ชัน คำสั่งควบคุม หรือคอนสตรัคเตอร์ของคลาส ยกตัวอย่างเช่น
