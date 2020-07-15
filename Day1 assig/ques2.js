// var let and const 

//var
    /* var stands for variable. in JS we can allocate memory locations with a specific label(variable name) and content(value) to it. this value can be changed during the run time or by the user  */
    var city= "Bengaluru";
    console.log(city);
    city='Mysuru';
    console.log(city);

//const 
    /* const stands for constant . this also, similar to var allocates a memory locations with a specific name but the value remains constant throughout the program and cant be changed, but in arrays we can append a new element only(value cant be changed ) */
    const pi=3.14;
    console.log(pi);
    //pi=3;----> will give an error
    const primes=[2,3,5,7,11];
    console.log(primes);
    primes.push('13');
    console.log(primes);

//let 
    /* let function temporayly can localise a variable and change it value only in the scope of a function but the original value of the variable will be the same as before    */
    {
    let city ="Delhi";
    console.log("using let :",city);
    // changing the value of city only here in these curly braces 
    }
    console.log(city);
    //previous value restored