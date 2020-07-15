//Few methods in console function:
var var_name= "Bengaluru";
const pi=3.14;
var primes=[2,3,5,7];

//1.console.time() and console.timeEnd()
    /*Both these functions together can be used to determine the amount of time spent by a block of statements.
    time() is given at the starting of the block of stements and timeEnd() is given at the end, 
    but both the functions should have the same label and the time is usually displayed in milliseconds.*/
    console.time('clock');
    //the timeEnd() is at line 

//2.console.group() and console.groupEnd()
   /* Similar to time() and timeEnd() , these are used together but to group a set of statements as one block which will be indented.
   These also work only when both the functions have the same label.*/
   console.group('grouping');
   //the groupEnd() is at line 26

//3.console.log()
    console.log("displaying string");
    console.log(12);
    console.log(var_name);
    console.log(pi);
    console.log(primes);
    /*This is used to just print/display any type of output onto the console.The output can be of any datatype 
    or can also be constants,arrays or objects*/
    console.groupEnd('grouping');

//4.console.error()
    //This generates an error message and displays it on the console.It is usually highlighted with RED
    console.error("This is an error message");

//5.console.warn()
    //This generates an warning and displays it on the console.It is usually highlighted with YELLOW
    console.warn("this is a warning");

//6.console.table()
    //This function displays a input array or object in the form of a neat table.
    console.table(primes);

//7.console.count() 
    //This method is used to count the number that the function was run by this counting method.
    for(let i=0;i<5;i++)
    { 
        console.count(i); 
    }
    
//8.custom console logs
    /*We can use the console.log() function and add CSS sytles to the output text using %c before the output text and adding styles attributes to it*/
    console.log('%c custom message in js file with css ','color:green');

//TimeEnd() function ref:line7
    console.timeEnd('clock');

//9.console.clear()
    //This clears the console screen 
    console.clear();
