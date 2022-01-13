// Conditions 
// if, if else, nested if, switch

a = 10
b = 12
if(a === 10){
    console.log(true)
    if(b === 13){
        console.log(true)
    }
}

switch (a) {
    case 10:
        console.log(true)
        break;
    case 11:
        console.log(true)
}

// Loops
// for, while, do while, for in , for of, for each

for(var a =1; a<10; ++a){
    console.log(a)
}

var d = 1
while(d < 10){
    
    ++d
    console.log(d)
}
console.log("DO While")
var e = 2
do{
    
    console.log(e)
    e++
}while(e<1)

obj = {
    name:'arjun',
    lname: 'sn'
}
array2 = ["some", 10]
for(i in array2){
    console.log(array2[i])
}

array1 = [1,2,3,4]

for(i of array1){
    console.log(i)
}