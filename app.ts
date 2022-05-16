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

// ---------- DataTypes ----------

// ภาษา TypeScript เป็นภาษาที่มีประเภทข้อมูลเป็นแบบคงที่ (Static typing) ซึ่งตรงกันข้ามกับภาษา JavaScript
// ที่มีรูปแบบประเภทข้อมูลเป็นไดนามิกส์ (Dynamic typing) ดังนั้นในการประกาศตัวแปรในภาษา TypeScript
// เราจะต้องกำหนดประเภทข้อมูลให้กับตัวแปรด้วยเสมอ นี่สามารถช่วยลดความผิดพลาดในการใช้งานข้อมูลผิดประเภทในระหว่างที่พัฒนาโปรแกรมได้

// Boolean

let done: boolean = true;

if (done) {
  console.log("My work is done.");
} else {
  console.log("Not done yet.");
}

// มาดูอีกตัวอย่างในการใช้งาน Boolean ในตัวอย่างนี้ เราประกาศตัวแปร Boolean เพื่อเก็บสถานะของหลอดไฟว่ามันเปิดหรือปิดอยู่
// และในโค้ดได้กำหนดค่าให้เป็น false ซึ่งหมายถึงไฟถูกปิดอยู่ นี่เป็นตัวอย่างของโปรแกรม

let lightOn: boolean = false;
console.log("The light is on: " + lightOn);

console.log("Turn on the light");
lightOn = true;
console.log("The light is on: " + lightOn);

// Number

// Number หรือตัวเลข เป็นประเภทข้อมูลที่ใช้เก็บค่าที่สามารถนับหรือสามารถแสดงได้ในเชิงปริมาณและมีชื่อของประเภทข้อมูลคือ
// number ค่าของตัวเลขสามารถเป็นได้ทั้งจำนวนเต็มและทศนิยม ซึ่งในภาษา TypeScript นั้นตัวเลขจะไม่มีการแบ่งแยกระหว่าง
// Integer กับ Float เหมือนในบางภาษา เช่น ภาษา C# หรือ Java โดยทั้งหมดถือว่าเป็นข้อมูลในประเภท number

let apple: number = 2;
let banana: number = 3;

let money: number = 37.5;
let distance: number = 1.6;

let sumfruit: number = apple + banana;

console.log(sumfruit);

// นอกจากนี้ ตัวเลขยังสามารถแสดงได้ทั้งจำนวนเต็มบวก จำนวนเต็มลบ และศูนย์ ยกตัวอย่างเช่น
// การใช้เก็บค่าของอุณหภูมิที่ต่ำกว่าจุดเยือกแข็งในองศาเซลซิเซียลที่มีค่าเป็นจำนวนเต็มลบ

let celsius = -10;
console.log(`Temperature outside is ${celsius} Celsius`);

// ต่อไปเป็นตัวอย่างการใช้งานประเภทข้อมูลตัวเลข มาเขียนโปรแกรมสำหรับคำนวณหาราคาของสินค้าที่กำลังลดราคา
// คอมพิวเตอร์เครื่องหนึ่งติดราคาไว้ที่ 18,000 บาทพร้อมกับส่วนลด 20% ถ้าคุณซื้อมันในตอนนี้
// ให้เขียนโปรแกรมเพื่อหาราคาที่ต้องจ่ายหลังจากหักส่วนลดออกไปแล้ว นี่เป็นตัวอย่างของโปรแกรมนี้

let price: number = 18000;
let discount: number = 20; // percent
let reduced = (discount / price) * 100;
let actualCost: number = price - reduced;

console.log(`Computer price is ${price} THB`);
console.log(`Buy now get ${discount}% discount`);
console.log(`Avtual coat for this computer is ${actualCost}`);

// ภาษา TypeScript สนับสนุนตัวเลขในช่วงต่างๆ สำหรับตัวเลขที่มีขนาดใหญ่หรือเล็กมากๆ ที่ต้องใช้ในการเขียนโปรแกรม
// คุณสามารถเขียนมันในรูปแบบสัญยากรณ์วิยาศาสตร์ได้ นี่ช่วยอำนวยความสะดวกในการเขียนและทำให้โค้ดอ่านง่ายมากขึ้น ยกตัวอย่างเช่น

let plancklength: number = -1.616255e-35;
let sunMass: number = 1.989e30;

console.log(`Length of the Planck: ${plancklength} Meters`);
console.log(`Mess of the sun: ${sunMass} Kilograms`);

// ในตัวอย่างที่ผ่านมาทั้งหมด การกำหนดค่าของตัวเลขให้กับตัวแปรถูกทำในฐาน 10 นอกจากนี้
// ในภาษา TypeScript นั้นยังสนับสนุนการกำหนดค่าของตัวเลขในรูปแบบเลขฐาน 2 ฐาน 8 และฐาน 16 ได้
// ยกตัวอย่างเช่น

let dec: number = 1534;
let bin: number = 0b10111111110;
let oct: number = 0o2776;
let hex: number = 0x5fe;

console.log(`dec: ${dec}`);
console.log(`bin: ${bin}`);
console.log(`oct: ${oct}`);
console.log(`hex: ${hex}`);

// นี่เป็นการกำหนดค่าให้กับตัวแปรในรูปแบบของเลขฐาน 2 ฐาน 8 ฐาน 16 และฐาน 10 ตามลำดับ
// ซึ่งทั้งหมดนี้มีค่าเท่ากับ 1534 ในเลขฐาน 10 และแต่ละเลขฐานจะขึ้นต้นด้วยตัวอักษรพิเศษต่อไปนี้

// ฐาน 2 ขึ้นต้นด้วย 0b
// ฐาน 8 ขึ้นต้นด้วย 0o
// ฐาน 16 ขึ้นต้นด้วย 0x
// ฐาน 10 ไม่มี

// String

let fname: string = "Metteo";
let lname: string = "Crisco";
console.log(fname + " " + lname);

// เนื้อหาของ String สามารถที่จะมีได้ตั้งแต่หนึ่งตัวอักษร ว่างเปล่า หรือมีความยาวเป็นย่อหน้าก็ได้
// ซึ่งความยาวของ String ที่สามารถเก็บได้ในภาษา TypeScript นั้นแทบจะไม่จำกัดความยาว

let ch: string = "A";
let color: string = "Blue";
let phrase: string =
  "The Lord is near to the brokenhearted and saves the crushed in spirit.";

// BigInt

// BigInt คือประเภทข้อมูลที่ใช้เก็บตัวเลขขนาดใหญ่เกินกว่าประเภทข้อมูล number จะสามารถเก็บได้
// ซึ่งชื่อของประเภทข้อมูลนี้คือ bigint ในการกำหนดค่าของตัวเลข BigInt
// นั้นสามารถทำได้สองวิธีคือจาก Number literal หรือจากฟังชันคอนสตรัคเตอร์ BigInt ยกตัวอย่างเช่น

// let maxSafeInteger: bigint = 9007199254740991n;
let hugeNumber: bigint = BigInt(9007199254740991);
let hugeString: bigint = BigInt("9007199254740991");

// ในการกำหนดค่าของ BigInt สามารถทำได้โดยต่อท้าย Literal ของตัวเลขด้วย n หรือสามารถระบุค่าเป็นตัวเลขหรือ
// String ผ่านคอนสตรัคเตอร์ได้ ตัวเลขประเภท BigInt ไม่ค่อยได้ใช้บ่อยนักในการเขียนโปรแกรมทั่วไป

// Symbol
// Symbol เป็นประเภทข้อมูลพื้นฐานที่สร้างจากฟังก์ชันคอนสรัคเตอร์ Symbol และมีชื่อประเภทข้อมูลเป็น
// symbol ทุก Symbol ที่ถูกสร้างขึ้นจะเป็นเอกลักษณ์เสมอและ Symbol มักจะถูกใช้เป็น Key
// ของออบเจ็คเพื่อป้องกันการเปลี่ยนแปลงค่าของ Key โดยไม่ได้ตั้งใจหรือจากโปรแกรมภายนอก
// นี่เป็นตัวอย่างของการสร้าง Symbol ในภาษา TypeScript

let sym1: symbol = Symbol();
let sym2: symbol = Symbol("symbol");
let sym3: symbol = Symbol("matin");

// เพื่อสร้าง Symbol เราจะต้องทำผ่านฟังก์ชันคอนสรัคเตอร์ Symbol ฟังก์ชันนี้ให้เราสามารถส่ง String
// สำหรับอธิบาย Symbol ที่สร้างขึ้นได้ ซึ่งค่าดังกล่าวนี้ไม่มีผลใดๆ กับการทำงานของ Symbol

// ทุก Symbol ที่สร้างขึ้นจะมีค่าไม่ซ้ำกันหรือเป็นเอกลักษณ์เสมอ ชื่อที่เรากำหนดให้กับ Symbol
// นั้นเป็นเพียงคำอธิบายสำหรับโปรแกรมเมอร์เพื่อจดจำมันเท่านั้น

let a01: symbol = Symbol();
let b01: symbol = Symbol();

let c01: symbol = Symbol("my_symbol");
let d01: symbol = Symbol("my_symbol");

console.log("a === b", a01 === b01);
console.log("c === d", c01 === d01);

// จะเห็นว่าแม้ว่า String ที่ใช้อธิบาย Symbol มีค่าเหมือนกัน แต่ผลลัพธ์ของการเปรียบเทียบ Symbol
// คือจะแตกต่างกันเสมออย่างที่เราบอกไว้ในตอนต้น ซึ่งนี่เป็นวิธีการทำงานพื้นฐานของ Symbol

// Undefined
// Undefined เป็นค่าที่แสดงถึงค่าที่ยังไม่ได้ถูกกำหนด อย่างไรก็ตาม เราสามารถใช้ค่าคงที่ undefined ในการอ้างถึงค่าของมันได้
// Undefined สามารถกำหนดให้กับตัวแปรของประเภทข้อมูลทุกประเภท นั่นเป็นเพราะว่าเมื่อคุณประกาศตัวแปรและยังไม่ได้กำหนดค่า
// ค่าเริ่มต้นของมันจะเป็น undefined ยกตัวอย่างเช่น

let a02: number;
let b02: number = undefined;
console.log(a02);
console.log(b02);

// Null

// Null เป็นค่าที่แสดงถึงการไม่มีอยู่ของข้อมูลหรือค่าว่างเปล่า null มักจะถูกใช้แทนค่าที่แสดงถึงการไม่มีอยู่ของออบเจ็ค
// และมีประเภทข้อมูลในภาษา TypeScript คือ null; ค่าของ Null สามารถกำหนดให้กับประเภทข้อมูลอื่นได้เหมือนกับ Undefined

// ในการเขียนโปรแกรม เราใช้ null เพื่อแสดงถึงการไม่มีอยู่ของข้อมูล ยกตัวอย่างเช่น เรามีฟังก์ชัน getUser
// ที่สามารถส่งค่ากลับมาเป็นออบเจ็คของ User หรือ null ในกรณีที่ไม่พบ User ได้ นี่เป็นตัวอย่าง

type User01 = {
  id: number;
  name: string;
  introduce: () => void;
};

function getUser(id: number) {
  if (id == 1) {
    return {
      id: 1,
      name: "Metin",
      introduce: function () {
        console.log(`My name is ${this.name}`);
      },
    };
  }
  return null;
}

let user02: User01 = getUser(1);
user02.introduce();

// ในตัวอย่างนี้ เป็นการแสดงการใช้งานของค่า null ที่ทำงานร่วมกับข้อมูลประเภทอื่น เราได้ประกาศฟังก์ชัน getUser ที่ส่งค่ากลับเป็นออบเจ็คของ
// User หรืออาจจะเป็น null และอย่างที่คุณเห็น เราได้ประกาศค่าส่งกลับของฟังก์ชันและประเภทของตัวแปร user เป็น User
// และมันสามารถใช้สำหรับเก็บค่าที่เป็น null ได้

// โค้ดในตัวอย่างนั้นทำงานได้เนื่องจากเมื่อพารามิเตอร์ที่ส่งไปยังฟังก์ชัน getUser เป็น 1 ส่งค่ากลับเป็นออบเจ็คของ User
// แต่นี่จะเปลี่ยนไปเมื่อเราส่งพารามิเตอร์ที่ส่งค่ากลับเป็น null ยกตัวอย่างเช่น

// let user03: User01 = getUser(2);
// user03.introduce();

// Array

let numbers: number[] = [10, 20, 30, 40, 50];
console.log(`Length of array: ${numbers.length}`);
numbers.forEach((value, index) => {
  console.log(`numbers[${index}] = ${value}`);
});

// ในการประกาศอาเรย์ เราระบุเครื่องหมาย [] หลังประเภทข้อมูลพื้นฐาน ในตัวอย่างนี้เราประกาศตัวแปร numbers
// สำหรับเก็บข้อมูลของตัวเลขในรูปแบบของอาเรย์ โดยระบุประเภทข้อมูลให้กับตัวแปรเป็น number[]

// Object

let user04: object = {
  id: 1,
  name: "metin",
  isAdmin: true,
};

console.log(user.id);

// ในภาษา TypeScript เราสามารถสร้าง type สำหรับอธิบายโครงสร้างของออบเจ็คได้ ในตัวอย่างนี้เป็นการประกาศประเภทข้อมูล User
// เพื่อกำหนด Key และประเภทข้อมูลที่แต่ละ Key ที่ออบเจ็คสามารถมีได้

type User02 = {
  id: number;
  name: string;
  isAdmin: boolean;
};

let user05: User02 = {
  id: 1,
  name: "Metin",
  isAdmin: true,
};

// และจากนั้นเราสามารถนำประเภทข้อมูลที่สร้างขึ้น User ไปใช้ในตัวประกาศตัวแปรแทน
// ดังนั้นค่าที่กำหนดให้กับตัวแปรนี้จะต้องปฏิบัติตามโครงสร้างที่ระบุโดย type User ที่เราได้ประกาศขึ้นมา

// Function

// ฟังก์ชัน (Function) เป๋็นอีกประเภทข้อมูลที่เก็บโค้ดที่เขียนขึ้นเพื่อเรียกใช้งานในภายหลัง เนื่องจากฟังก์ชันสามารถเก็บไว้ในตัวแปร
//  ส่งผ่านพารามิเตอร์ หรือฟิลด์ของออบเจ็คได้ ดังนั้นจึงมีประเภทข้อมูลสำหรับฟังก์ชันในภาษา TypeScript คือ Function
//  (ที่เริ่มต้นด้วยตัวพิมพ์ใหญ่) นี่เป็นตัวอย่างการประกาศฟังก์ชัน

let greet01: Function = function (name) {
  console.log(`Hello ${name}`);
};

greet("John");

// ในตัวอย่างนี้่ เราได้ประกาศตัวแปร greet สำหรับเก็บค่าที่เป็นฟังก์ชันเพื่อแสดงคำกล่าวทักทายชื่อที่ส่งเข้ามาออกทางหน้าจอ
// ในกรณีนี้ เมื่อตัวแปรมีค่าเป็นฟังก์ชันนั่นทำให้เราสามารถใช้มันเพื่อเรียกใช้เหมือนกับฟังก์ชันได้

// ตัวแปรที่กำหนดประเภทข้อมูลเป็น Function สามารถเก็บฟังก์ชันที่มีรูปแบบพารามิเตอร์และการส่งกลับเป็นแบบไหนก็ได้ ในภาษา TypeScript
// เราสามารถสร้างประเภทข้อมูลของฟังก์ชันเพื่อกำหนดรูปแบบให้กับพารามิเตอร์และค่าที่ส่งกลับของฟังก์ชันได้ ยกตัวอย่างเช่น

// type fnType = (a: number, b: number) => string;

// let sun: fnType = function (a: number, b: number): number {
//   return a + b;
// };

// Variable in TypeScript

let name02: string = "John";
let age02: number = 30;
console.log(`${name02} is ${age02} years old`);

let year: number = 2021;
console.log("This year " + year);
number = 2022;
console.log("Next year " + year);

let favoriteFood: string = "Pad Thai";
let commentCount: number = 10;
let dateOfBirth = new Date("2021-07-03");

let favorite_food: string = "Pad Thai";
let comment_count: number = 10;
let date_of_birth = new Date("2021-07-03");

// let 2you: string; // Error
// let my.name: string; // Error

function greet02(name: string) {
  //no need 'let' ^
  console.log(`Hi ${name}`);
}

type User03 = {
  id: number;
  name: string;
};

let user06: User03 = {
  id: 1,
  name: "Metin",
};

class Dog {
  name: string;
  color: string;
}

let myDog = new Dog();
myDog.name = "Bruce";
myDog.color = "Brown";

console.log(user);
console.log(myDog);
