alert("This is about methods of strings and arrays" );
var str1="Bengaluru is a great city ";
var str2="It feels amazing to live here ";
var arr=[3,5,7,11];

//String methods 
    //1. includes()	Checks whether a string contains the specified string/characters
    console.log(str1.includes('city'));

    //2.replace()	Searches a string for a specified value and returns a new string where the specified values are replaced
    console.log(str1.replace('Bengaluru','New York'));

    //3.search()	Searches a string for a specified value and returns the position of the match
    console.log(str1.search("city"));

    //4.slice()	Extracts a part of a string and returns a new string
    console.log(str2.slice(0,16));

    //5.substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
    console.log(str2.substr(9,8));

    //6.substring()	Extracts the characters from a string, between two specified indices
    console.log(str2.substring(9,16));

    //7.trim()	Removes whitespace from both ends of a string
    console.log(str1.trim());


//Array methods 
    //1.reverse()  Reverses the order of the elements in an array
        console.log(arr.reverse());

    //2.conncat() to concatinate 2 arrays
        let primes2=[11,13,17];
        console.log(arr.concat(primes2));

    //3.unshift() to add element to the array at the beginning 
        arr.unshift([2]);
        console.log(arr);

    //4. push() to add element at the end of the array 
        arr.push(19);
        console.log(arr);

    //5.shift() to remove the first element of the array
        arr.shift();
        console.log(arr);
    
    //6.pop() to remove the last element of the array
        arr.pop();
        console.log(arr);

    //7.lastIndexOf()	Search the array for an element, starting at the end, and returns its position
        console.log(arr.lastIndexOf(7));
    
    //8.slice()	Selects a part of an array, and returns the new array
        console.log(arr.slice(0,4));
    
    //9.sort()	Sorts the elements of an array
        console.log(arr.sort());

    //10.toString()	Converts an array to a string, and returns the result
        console.log(arr.toString());


        
