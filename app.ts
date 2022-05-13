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
