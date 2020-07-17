let marks = Number(prompt("Enter yor marks out of hundred",0));
// if else if ladder
console.log('Using if else if ladder');
if (marks>=90){
    console.log(`Marks are ${marks} and grade is A1`);
}
else if (marks>=80 && marks <90){
    console.log(`Marks are ${marks} and grade is A`);
}
else if (marks>=70 && marks <80){
    console.log(`Marks are ${marks} and grade is B`);
}
else if (marks>=60 && marks <70){
    console.log(`Marks are ${marks} and grade is C`);
}
else if (marks>=50 && marks <60){
    console.log(`Marks are ${marks} and grade is D`);
}
else if (marks>=40 && marks <50){
    console.log(`Marks are ${marks} and grade is E`);
}
else {
    console.log(`Marks are ${marks} and grade is F`);
}

// Using Switch case
console.log("Using switch case");
switch(true){
    case (marks>=90):{
        console.log(`Marks are ${marks} and grade is A1`);
        break;
    }
    case (marks>=80 && marks <90):{
        console.log(`Marks are ${marks} and grade is A`);
        break;
    }
    case (marks>=70 && marks <80):{
        console.log(`Marks are ${marks} and grade is B`);
        break;
    }
    case (marks>=60 && marks <70):{
        console.log(`Marks are ${marks} and grade is C`);
        break;
    }
    case (marks>=50 && marks <60):{
        console.log(`Marks are ${marks} and grade is D`);
        break;
    }
    case (marks>=40 && marks <50):{
        console.log(`Marks are ${marks} and grade is E`);
        break;
    }
    default:
        console.log(`Marks are ${marks} and grade is F`);
}