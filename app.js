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
//  --------- Literals ---------
// Literal คือค่าคงที่ที่แสดงถึงค่าของประเภทข้อมูลพื้นฐานในภาษา TypeScript ซึ่งประกอบไปด้วย ตัวเลข
// ข้อความ Boolean null และ undefined นี่ถือว่าเป็นส่วนที่เล็กที่สุดของข้อมูลที่จะทำให้เกิดข้อมูลประเภทอื่นๆ
// ตามมา เช่น ออบเจ็ค หรืออาเรย์ เป็นต้น
// Numbers
12 - 3;
4.15;
34;
34;
34;
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
var age = 31;
var sumAge = -2 + 4;
console.log("I love TypeScript");
var username = "admin";
var password = "secret";
if (username == "admin" && password == "secret") {
    console.log("Login successfully");
    console.log("You're logged in as ".concat(username));
}
else {
    console.log("Invalid username or password");
}
console.log("Top Level 2");
function login(username01, password01) {
    console.log("Logging you in ...");
    if (username01 == "admin" && password01 == "secret") {
        console.log("Loggin successfully");
        console.log("You're logged in as ".concat(username));
    }
    else {
        console.log("Invalid username or password");
    }
}
var username01 = "admin";
var password01 = "secret";
login(username01, password01);
// --------- Delimiters ---------
// ตัวแบ่ง (,) , (:)
var aa = 1, bb = 2;
var languages = ["Typescript", "Python", "Ruby", "Go"];
var user01 = { id: 1, name: "Matin" };
console.log(a, b, languages, user);
function Add(a, b) {
    return a + b;
}
var sum01 = Add(10, 20);
console.log(sum01);
for (var i_2 = 0; i_2 < 10; i_2++) {
    console.log(i_2);
}
var items = ["Computers", "Pancake", "Mountain"];
console.log("I like ".concat(items[0]));
// สุดท้ายวงเล็บ () ถูกใช้ในสองวัตุประสงค์คือเพื่อควบคุมลำดับความสำคัญการทำงานของนิพจน์
//  และเพื่อกำหนดส่วนของพารามิเตอร์ของฟังก์ชัน คำสั่งควบคุม หรือคอนสตรัคเตอร์ของคลาส ยกตัวอย่างเช่น
// ---------- DataTypes ----------
// ภาษา TypeScript เป็นภาษาที่มีประเภทข้อมูลเป็นแบบคงที่ (Static typing) ซึ่งตรงกันข้ามกับภาษา JavaScript
// ที่มีรูปแบบประเภทข้อมูลเป็นไดนามิกส์ (Dynamic typing) ดังนั้นในการประกาศตัวแปรในภาษา TypeScript
// เราจะต้องกำหนดประเภทข้อมูลให้กับตัวแปรด้วยเสมอ นี่สามารถช่วยลดความผิดพลาดในการใช้งานข้อมูลผิดประเภทในระหว่างที่พัฒนาโปรแกรมได้
// Boolean
var done = true;
if (done) {
    console.log("My work is done.");
}
else {
    console.log("Not done yet.");
}
// มาดูอีกตัวอย่างในการใช้งาน Boolean ในตัวอย่างนี้ เราประกาศตัวแปร Boolean เพื่อเก็บสถานะของหลอดไฟว่ามันเปิดหรือปิดอยู่
// และในโค้ดได้กำหนดค่าให้เป็น false ซึ่งหมายถึงไฟถูกปิดอยู่ นี่เป็นตัวอย่างของโปรแกรม
var lightOn = false;
console.log("The light is on: " + lightOn);
console.log("Turn on the light");
lightOn = true;
console.log("The light is on: " + lightOn);
// Number
// Number หรือตัวเลข เป็นประเภทข้อมูลที่ใช้เก็บค่าที่สามารถนับหรือสามารถแสดงได้ในเชิงปริมาณและมีชื่อของประเภทข้อมูลคือ
// number ค่าของตัวเลขสามารถเป็นได้ทั้งจำนวนเต็มและทศนิยม ซึ่งในภาษา TypeScript นั้นตัวเลขจะไม่มีการแบ่งแยกระหว่าง
// Integer กับ Float เหมือนในบางภาษา เช่น ภาษา C# หรือ Java โดยทั้งหมดถือว่าเป็นข้อมูลในประเภท number
var apple = 2;
var banana = 3;
var money = 37.5;
var distance = 1.6;
var sumfruit = apple + banana;
console.log(sumfruit);
// นอกจากนี้ ตัวเลขยังสามารถแสดงได้ทั้งจำนวนเต็มบวก จำนวนเต็มลบ และศูนย์ ยกตัวอย่างเช่น
// การใช้เก็บค่าของอุณหภูมิที่ต่ำกว่าจุดเยือกแข็งในองศาเซลซิเซียลที่มีค่าเป็นจำนวนเต็มลบ
var celsius = -10;
console.log("Temperature outside is ".concat(celsius, " Celsius"));
// ต่อไปเป็นตัวอย่างการใช้งานประเภทข้อมูลตัวเลข มาเขียนโปรแกรมสำหรับคำนวณหาราคาของสินค้าที่กำลังลดราคา
// คอมพิวเตอร์เครื่องหนึ่งติดราคาไว้ที่ 18,000 บาทพร้อมกับส่วนลด 20% ถ้าคุณซื้อมันในตอนนี้
// ให้เขียนโปรแกรมเพื่อหาราคาที่ต้องจ่ายหลังจากหักส่วนลดออกไปแล้ว นี่เป็นตัวอย่างของโปรแกรมนี้
var price = 18000;
var discount = 20; // percent
var reduced = (discount / price) * 100;
var actualCost = price - reduced;
console.log("Computer price is ".concat(price, " THB"));
console.log("Buy now get ".concat(discount, "% discount"));
console.log("Avtual coat for this computer is ".concat(actualCost));
// ภาษา TypeScript สนับสนุนตัวเลขในช่วงต่างๆ สำหรับตัวเลขที่มีขนาดใหญ่หรือเล็กมากๆ ที่ต้องใช้ในการเขียนโปรแกรม
// คุณสามารถเขียนมันในรูปแบบสัญยากรณ์วิยาศาสตร์ได้ นี่ช่วยอำนวยความสะดวกในการเขียนและทำให้โค้ดอ่านง่ายมากขึ้น ยกตัวอย่างเช่น
var plancklength = -1.616255e-35;
var sunMass = 1.989e30;
console.log("Length of the Planck: ".concat(plancklength, " Meters"));
console.log("Mess of the sun: ".concat(sunMass, " Kilograms"));
// ในตัวอย่างที่ผ่านมาทั้งหมด การกำหนดค่าของตัวเลขให้กับตัวแปรถูกทำในฐาน 10 นอกจากนี้
// ในภาษา TypeScript นั้นยังสนับสนุนการกำหนดค่าของตัวเลขในรูปแบบเลขฐาน 2 ฐาน 8 และฐาน 16 ได้
// ยกตัวอย่างเช่น
var dec = 1534;
var bin = 1534;
var oct = 1534;
var hex = 0x5fe;
console.log("dec: ".concat(dec));
console.log("bin: ".concat(bin));
console.log("oct: ".concat(oct));
console.log("hex: ".concat(hex));
// นี่เป็นการกำหนดค่าให้กับตัวแปรในรูปแบบของเลขฐาน 2 ฐาน 8 ฐาน 16 และฐาน 10 ตามลำดับ
// ซึ่งทั้งหมดนี้มีค่าเท่ากับ 1534 ในเลขฐาน 10 และแต่ละเลขฐานจะขึ้นต้นด้วยตัวอักษรพิเศษต่อไปนี้
// ฐาน 2 ขึ้นต้นด้วย 0b
// ฐาน 8 ขึ้นต้นด้วย 0o
// ฐาน 16 ขึ้นต้นด้วย 0x
// ฐาน 10 ไม่มี
// String
var fname = "Metteo";
var lname = "Crisco";
console.log(fname + " " + lname);
// เนื้อหาของ String สามารถที่จะมีได้ตั้งแต่หนึ่งตัวอักษร ว่างเปล่า หรือมีความยาวเป็นย่อหน้าก็ได้
// ซึ่งความยาวของ String ที่สามารถเก็บได้ในภาษา TypeScript นั้นแทบจะไม่จำกัดความยาว
var ch = "A";
var color = "Blue";
var phrase = "The Lord is near to the brokenhearted and saves the crushed in spirit.";
// BigInt
// BigInt คือประเภทข้อมูลที่ใช้เก็บตัวเลขขนาดใหญ่เกินกว่าประเภทข้อมูล number จะสามารถเก็บได้
// ซึ่งชื่อของประเภทข้อมูลนี้คือ bigint ในการกำหนดค่าของตัวเลข BigInt
// นั้นสามารถทำได้สองวิธีคือจาก Number literal หรือจากฟังชันคอนสตรัคเตอร์ BigInt ยกตัวอย่างเช่น
// let maxSafeInteger: bigint = 9007199254740991n;
var hugeNumber = BigInt(9007199254740991);
var hugeString = BigInt("9007199254740991");
// ในการกำหนดค่าของ BigInt สามารถทำได้โดยต่อท้าย Literal ของตัวเลขด้วย n หรือสามารถระบุค่าเป็นตัวเลขหรือ
// String ผ่านคอนสตรัคเตอร์ได้ ตัวเลขประเภท BigInt ไม่ค่อยได้ใช้บ่อยนักในการเขียนโปรแกรมทั่วไป
// Symbol
// Symbol เป็นประเภทข้อมูลพื้นฐานที่สร้างจากฟังก์ชันคอนสรัคเตอร์ Symbol และมีชื่อประเภทข้อมูลเป็น
// symbol ทุก Symbol ที่ถูกสร้างขึ้นจะเป็นเอกลักษณ์เสมอและ Symbol มักจะถูกใช้เป็น Key
// ของออบเจ็คเพื่อป้องกันการเปลี่ยนแปลงค่าของ Key โดยไม่ได้ตั้งใจหรือจากโปรแกรมภายนอก
// นี่เป็นตัวอย่างของการสร้าง Symbol ในภาษา TypeScript
var sym1 = Symbol();
var sym2 = Symbol("symbol");
var sym3 = Symbol("matin");
// เพื่อสร้าง Symbol เราจะต้องทำผ่านฟังก์ชันคอนสรัคเตอร์ Symbol ฟังก์ชันนี้ให้เราสามารถส่ง String
// สำหรับอธิบาย Symbol ที่สร้างขึ้นได้ ซึ่งค่าดังกล่าวนี้ไม่มีผลใดๆ กับการทำงานของ Symbol
// ทุก Symbol ที่สร้างขึ้นจะมีค่าไม่ซ้ำกันหรือเป็นเอกลักษณ์เสมอ ชื่อที่เรากำหนดให้กับ Symbol
// นั้นเป็นเพียงคำอธิบายสำหรับโปรแกรมเมอร์เพื่อจดจำมันเท่านั้น
var a01 = Symbol();
var b01 = Symbol();
var c01 = Symbol("my_symbol");
var d01 = Symbol("my_symbol");
console.log("a === b", a01 === b01);
console.log("c === d", c01 === d01);
// จะเห็นว่าแม้ว่า String ที่ใช้อธิบาย Symbol มีค่าเหมือนกัน แต่ผลลัพธ์ของการเปรียบเทียบ Symbol
// คือจะแตกต่างกันเสมออย่างที่เราบอกไว้ในตอนต้น ซึ่งนี่เป็นวิธีการทำงานพื้นฐานของ Symbol
// Undefined
// Undefined เป็นค่าที่แสดงถึงค่าที่ยังไม่ได้ถูกกำหนด อย่างไรก็ตาม เราสามารถใช้ค่าคงที่ undefined ในการอ้างถึงค่าของมันได้
// Undefined สามารถกำหนดให้กับตัวแปรของประเภทข้อมูลทุกประเภท นั่นเป็นเพราะว่าเมื่อคุณประกาศตัวแปรและยังไม่ได้กำหนดค่า
// ค่าเริ่มต้นของมันจะเป็น undefined ยกตัวอย่างเช่น
var a02;
var b02 = undefined;
console.log(a02);
console.log(b02);
function getUser(id) {
    if (id == 1) {
        return {
            id: 1,
            name: "Metin",
            introduce: function () {
                console.log("My name is ".concat(this.name));
            }
        };
    }
    return null;
}
var user02 = getUser(1);
user02.introduce();
// ในตัวอย่างนี้ เป็นการแสดงการใช้งานของค่า null ที่ทำงานร่วมกับข้อมูลประเภทอื่น เราได้ประกาศฟังก์ชัน getUser ที่ส่งค่ากลับเป็นออบเจ็คของ
// User หรืออาจจะเป็น null และอย่างที่คุณเห็น เราได้ประกาศค่าส่งกลับของฟังก์ชันและประเภทของตัวแปร user เป็น User
// และมันสามารถใช้สำหรับเก็บค่าที่เป็น null ได้
// โค้ดในตัวอย่างนั้นทำงานได้เนื่องจากเมื่อพารามิเตอร์ที่ส่งไปยังฟังก์ชัน getUser เป็น 1 ส่งค่ากลับเป็นออบเจ็คของ User
// แต่นี่จะเปลี่ยนไปเมื่อเราส่งพารามิเตอร์ที่ส่งค่ากลับเป็น null ยกตัวอย่างเช่น
// let user03: User01 = getUser(2);
// user03.introduce();
// Array
var numbers = [10, 20, 30, 40, 50];
console.log("Length of array: ".concat(numbers.length));
numbers.forEach(function (value, index) {
    console.log("numbers[".concat(index, "] = ").concat(value));
});
// ในการประกาศอาเรย์ เราระบุเครื่องหมาย [] หลังประเภทข้อมูลพื้นฐาน ในตัวอย่างนี้เราประกาศตัวแปร numbers
// สำหรับเก็บข้อมูลของตัวเลขในรูปแบบของอาเรย์ โดยระบุประเภทข้อมูลให้กับตัวแปรเป็น number[]
// Object
var user04 = {
    id: 1,
    name: "metin",
    isAdmin: true
};
console.log(user.id);
var user05 = {
    id: 1,
    name: "Metin",
    isAdmin: true
};
// และจากนั้นเราสามารถนำประเภทข้อมูลที่สร้างขึ้น User ไปใช้ในตัวประกาศตัวแปรแทน
// ดังนั้นค่าที่กำหนดให้กับตัวแปรนี้จะต้องปฏิบัติตามโครงสร้างที่ระบุโดย type User ที่เราได้ประกาศขึ้นมา
// Function
// ฟังก์ชัน (Function) เป๋็นอีกประเภทข้อมูลที่เก็บโค้ดที่เขียนขึ้นเพื่อเรียกใช้งานในภายหลัง เนื่องจากฟังก์ชันสามารถเก็บไว้ในตัวแปร
//  ส่งผ่านพารามิเตอร์ หรือฟิลด์ของออบเจ็คได้ ดังนั้นจึงมีประเภทข้อมูลสำหรับฟังก์ชันในภาษา TypeScript คือ Function
//  (ที่เริ่มต้นด้วยตัวพิมพ์ใหญ่) นี่เป็นตัวอย่างการประกาศฟังก์ชัน
var greet01 = function (name) {
    console.log("Hello ".concat(name));
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
var name02 = "John";
var age02 = 30;
console.log("".concat(name02, " is ").concat(age02, " years old"));
var year = 2021;
console.log("This year " + year);
number = 2022;
console.log("Next year " + year);
var favoriteFood = "Pad Thai";
var commentCount = 10;
var dateOfBirth = new Date("2021-07-03");
var favorite_food = "Pad Thai";
var comment_count = 10;
var date_of_birth = new Date("2021-07-03");
// let 2you: string; // Error
// let my.name: string; // Error
function greet02(name) {
    //no need 'let' ^
    console.log("Hi ".concat(name));
}
var user06 = {
    id: 1,
    name: "Metin"
};
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var myDog = new Dog();
myDog.name = "Bruce";
myDog.color = "Brown";
console.log(user);
console.log(myDog);
