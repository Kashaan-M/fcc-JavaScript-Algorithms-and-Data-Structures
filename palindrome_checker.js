function palindrome(str) {
    let result; 
    // result variable to store our boolean value
    str = str.toLowerCase();
    // first we change all alphabetical characters in str to lower case
    let alphaNumericPickerRegEx = /\w+/g;   
    // this regex only selects alpha numeric characters plus "_" character and ignores whitespaces,special characters like , / , - ,\ etc.
    let underScoreRegEx = /_*/g;
    // this regex only selects "_" character
    
    str = str.match(alphaNumericPickerRegEx).join("");
    // here we first match alphaNumeric characters and put them in str.Note the match returns an object(an array in this case)
    // so we use join to change object back to a string.

    str = str.replace(underScoreRegEx,"");
    // here we use .replace to remove any "_" characters in our string with "" i.e. nothing and put them back in string.

    if( str.slice(0,Math.floor(str.length / 2)) === str.split("").slice( Math.floor((str.length + 1) / 2) ).reverse().join("") ) {
        // this if statement is complex to read so let's simplify it a bit
        // here we are using .slice to compare essentially two strings
        // the two strings are the first half of our "str" string and the second half of "str" string
        // we are using Math. floor to get whole numbers
        // in the second half we have to reverse the string for comparing if both strings are equal
        // and in order to reverse the second half we first use .split to convert the string into an array of characters
        // then we use .slice with Math.floor to select characters from 
        // half of string length(+1 character to evenly distribute our two string halves) uptil end of "str" string(Notice we only give one argument to .slice in second half)
        // after slicing we reverse those characters and use .join to convert object back to string.
        // this way we break our "str" string into two equal halves and reverse the second half and check if it is "strictly equal" to first half
        // if both halves are equal then we assign true to result because the "str" is a palindrome
     
        result = true;
    }
    else {
        // else if the two halves of "str" are not strictly equal they are not a palindrome
        result = false;
    }
    return result;
}

console.log( palindrome("eye") ); 
console.log( palindrome("_eye") );   
console.log( palindrome("race car") ); 
console.log( palindrome("not a palindrome") ); 
console.log( palindrome("A man, a plan, a canal. Panama") );
console.log( palindrome("never odd or even") );
console.log( palindrome("nope") );
console.log( palindrome("almostomla") );
console.log( palindrome("My age is 0, 0 si ega ym.") );
console.log( palindrome("1 eye for of 1 eye.") );
console.log( palindrome("0_0 (: /-\ :) 0-0") ); 
console.log( palindrome("five|\_/|four") );
