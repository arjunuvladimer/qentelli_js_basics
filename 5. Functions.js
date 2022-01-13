// General Function

function genericFunction(a){
    console.log("Hello world")
    return a
} // Function Definition

console.log(genericFunction()) // Functional Call

var b = genericFunction(1231)

console.log(b)

// Rest Parameterized Function

function restParameter(...a){
    console.log(a[0])
}

restParameter(1,2,3,4,5);

// Anonymous Function

(
    function (a,b){
        console.log("Anonymous Function")
        var c = a + b
        console.log(c)
    }// Function Definition
)(1,2) // Function Call // IIFE(Imediately Invoked Function Expression)

const subtract = function (){
    console.log("Anonymous Function with Variable")
}// Function Definition

subtract()

// Lambda Function

const lambdaFunction = (a,b) => {
    console.log("Lambda Function")
    console.log(a - b)
    return a-b
}

var carry = lambdaFunction('5','6')

console.log(carry)








