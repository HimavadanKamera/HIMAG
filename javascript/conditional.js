//example of if, else if, and else
let age = 18;
if(age<18){
    console.log("you are a minor");
}
else if(age>=18 && age < 65){
    console.log("you are an adult");
}
else{
    console.log("you are a senior citizen");
}
console.log("\n");


//switch case
let day = 3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    case 8:
        console.log("Invalid");
}
console.log("\n");


//Loops
// for loop
for(let i=0; i<5; i++){
console.log("iteration", i);
}
console.log("\n");

//while loop
let j=0;
while(j<5){
    console.log(j);
    j++;
}
console.log("\n");

//do while
let k=0;
do{
    console.log(k);
    k++;
}while(k<5);