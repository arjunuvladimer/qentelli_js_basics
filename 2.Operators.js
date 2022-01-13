// Arithematic Operator
//[+,-,%,/,*,++,--]

// Relational Operator
// [<,>,<=,>=,!=,===,==]

let a = 10
let b = "10"
if(a === b){
    console.log(true)
}

// Logical Operators
//[&&, ||, !]

// Bitwise Operators
// [&, |, ^, ~, <<,>> ,>>>]

let c = 10 // => 1010
let d = 11 // => 1011
//--------------------
//               1010 => & 
//               1011 => |
//               0001 => ^
// 0001 0000 => 16

let e = c & d
console.log(e)

e = c | d
console.log(e)

e = c ^ d
console.log(e)

e = ~c
console.log(e)

// 1010
// 0010 1000
e = c<<2
console.log(e)

// 1011
// 0010
e = d>>2
console.log(e)

// Assignment Operators
// [=,+=,-=,*=,%=,/=,&=,|=,<<=,>>=]

f = 10
g = 11

// f = f + g
f += g
console.log(f)

// Miscelleaneous 
// [typeof,...,? ]

var h = [1,2,3]
console.log(typeof(h))

var i = 10

var k = i == 10 ? "equals 10": "not equals 10"
console.log(k)