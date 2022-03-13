function rot13(str) {
    str = str.toUpperCase();
    // first I convet str to UPPER CASE as per requirement
    let characterArr = str.split("");
    // I split str into an array of characters
    let cipherDict = {
        A:"N",B:"O",C:"P",D:"Q",E:"R",F:"S",G:"T",H:"U",I:"V",J:"W",K:"X",L:"Y",
        M:"Z",N:"A",O:"B",P:"C",Q:"D",R:"E",S:"F",T:"G",U:"H",V:"I",W:"J",X:"K",
        Y:"L",Z:"M",'?':"?",'!':'!'," ": " ",".":"."
    };
    // This is our Cipher Object. It contains alphabet and other characters as properties
    // and following ROT13 Cipher procedure "encrypts" them
    for(let i = 0; i <characterArr.length ; i++) {
     // Here I am looping through all the characters stored in characterArr
        characterArr[i] = cipherDict[ characterArr[i] ];
        // Here I replace or "encrypt" characters in the array with the respective value or data
        // stored in our cipherDict object
    }
    str = characterArr.join("");
    // we join our array back into a string
    return str;
}
console.log(rot13("SERR PBQR PNZC"))