//arithmetic operators
let a = 10;
let b = 5;
console.log("Arithmetic operators");
console.log("a=",a,",b=",b); 
let sum=a+b;
let difference = a-b;
let product = a*b;
let quotient = a/b;
let remainder = a%b;
let exponent = a**b;
console.log("Arithmetic operators");
console.log("sum:",sum);
console.log("difference:",difference);
console.log("product:",product);
console.log("quotient:",quotient);  
console.log("remainder:",remainder);
console.log("exponent:",exponent)  


//Assignment operators
let x = 10;
x += 5;//(x=x+5(x=10+5))
x -= 3;
x *= 2;
x /= 4;
x %= 3;
console.log("Assignment operators:");
console.log("x after assignment:", x);
console.log("\n"); // add new line




//3.comparison opeartors
let isEqual = (a==b);
let isStrictEqual = (a === b);
let isNotEqual = (a!=b);
let isStrictNotEqual = (a !==b );
let isGreaterThan = (a>b);
let isLessThan = (a<b);
let isGreaterThanOrEqual = (a>=b);
let isLessThanOrEqual = (a<=b);
console.log("Comaprison operators:");
console.log("is equal:",isEqual);
console.log("is strictequal:", isStrictEqual);
console.log("isnoteuqal:",isNotEqual);
console.log("isstrictnotequal:",isStrictNotEqual)
console.log("isgreaterthan:",isGreaterThan)
console.log("islessthan:",isLessThan)
console.log("isgreaterthanorequal:",isGreaterThanOrEqual)
console.log("islessthanorequal:",isLessThanOrEqual)
console.log("\n");





//Logical operators
let andOperator = (a > 0 && b > 0);
let orOperator = (a > 0 || b < 0);
let notOperator = !(a < b);
console.log("Logical Opeartors");
console.log("And Operator:",andOperator);
console.log("OR Operator:",orOperator);
console.log("NOT Operator:",notOperator);
console.log("\n");


//Bitwise operators
let bitwiseAnd = a % b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftshift = a<<1;
let rightshift = a>>1; 
console.log("Bitwise operators");
console.log("bitwiseAnd",bitwiseAnd);
console.log("bitwiseOr",bitwiseOr);
console.log("bitwiseXor",bitwiseXor);
console.log("bitwiseNot",bitwiseNot);
console.log("leftshift",leftshift);
console.log("rightshift",rightshift);
console.log("\n");


//ternary operator
//a shorthand conditional operator, often called the conditional operator, that allows for concisely expressing if-else statements in a single line of code.
let age = 18;
let eligibility = (age>= 18) ? "Eligible to vote":"Not eligible to vote";
console.log("Ternary operator:");
console.log("Eligibility:",eligibility);
console.log("\n");


//Type of operator
let variableType = typeof "a";
console.log("Type of operatot:") ;
console.log("type of variable 'a':",variableType);
console.log("\n");


