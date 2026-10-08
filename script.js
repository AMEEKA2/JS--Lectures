
// This is single line comment
/* This is multi-line comment */

// 1. Arithmetic Operators
let a = 5;
let b = 2;

console.log("a =", a, " & b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// 2. Unary Operators
let c = 5;
let d = 2;

console.log("c =", c, " & d =", d);
console.log("c++ =", c++);
console.log("c =", c);
console.log("++c =", ++c);
console.log("d-- =", d--);
console.log("d =", d);
console.log("--d =", --d);

// 3. Assignment Operators
let e = 5;
e += 4;
console.log("e += 4 =", e);
e -= 4;
console.log("e -= 4 =", e);
e *= 4;
console.log("e *= 4 =", e);
e /= 4;
console.log("e /= 4 =", e);
e %= 4;
console.log("e %= 4 =", e);
e **= 4;
console.log("e **= 4 =", e);

// 4. Comparison Operators
let f = 5;
let g = "5"; // string
console.log("f == g =", f == g); // true - only value check
console.log("f === g =", f === g); // false - value + datatype check
console.log("f != g =", f != g);
console.log("f !== g =", f !== g);

// 5. Logical Operators
let h = 6;
let i = 5;
let cond1 = h > i;
let cond2 = h === 6;
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 || cond2 =", cond1 || cond2);
console.log("!(h < i) =", !(h < i));

// 6. Conditional Statements
let age = 25;
if (age >= 18) {
    console.log("you can vote");
}
if (age < 18) {
    console.log("you CANNOT vote");
}

let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);

let age2 = 25;
if (age2 < 18) {
    console.log("junior");
} else if (age2 > 60) {
    console.log("senior");
} else {
    console.log("middle");
}

// 7. Ternary Operator
let age3 = 25;
let result = age3 >= 18 ? "adult" : "not adult";
console.log(result);