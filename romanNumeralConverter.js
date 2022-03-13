function convertToRoman(num) {
 num = num.toString();
// first I convert num to a string for easy manipulation

function ones(arg) {
    let romanNum = parseInt(arg);
    // here I convert string back to int because switch statement uses strict equality "===" for cases
    switch (romanNum) {
        case 0:romanNum = "";break;case 1:romanNum = "I";break;case 2:romanNum = "II";break;case 3:romanNum = "III";break;
        case 4:romanNum = "IV";break;case 5:romanNum = "V";break;case 6:romanNum = "VI";break;
        case 7:romanNum = "VII";break;case 8:romanNum = "VIII";break;case 9:romanNum = "IX";break;
    }
    return romanNum;
}


function tens(arg) {
    let romanNum = parseInt(arg);
    // here I convert string back to int because switch statement uses strict equality "===" for cases
    switch (romanNum) {
        case 0:romanNum = "";break;case 1:romanNum = "X";break;case 2:romanNum = "XX";break;case 3:romanNum = "XXX";break;
        case 4:romanNum = "XL";break;case 5:romanNum = "L";break;case 6:romanNum = "LX";break;
        case 7:romanNum = "LXX";break;case 8:romanNum = "LXXX";break;case 9:romanNum = "XC";break;
    }
    return romanNum;
}


function hundreds(arg) {
    let romanNum = parseInt(arg);
    // here I convert string back to int because switch statement uses strict equality "===" for cases
    switch (romanNum) {
        case 0:romanNum = "";break;case 1:romanNum = "C";break;case 2:romanNum = "CC";break;case 3:romanNum = "CCC";break;
        case 4:romanNum = "CD";break;case 5:romanNum = "D";break;case 6:romanNum = "DC";break;
        case 7:romanNum = "DCC";break;case 8:romanNum = "DCCC";break;case 9:romanNum = "CM";break;
    }
    return romanNum;
}


function thousands(arg) {
    let romanNum = parseInt(arg);
    // here I convert string back to int because switch statement uses strict equality "===" for cases
    switch (romanNum) {
        case 0:romanNum = "";break;case 1:romanNum = "M";break;case 2:romanNum = "MM";break;case 3:romanNum = "MMM";break;
        case 4:romanNum = "MMMM";break;case 5:romanNum = "MMMMM";break;case 6:romanNum = "MMMMMM";break;
        case 7:romanNum = "MMMMMMM";break;case 8:romanNum = "MMMMMMMM";break;case 9:romanNum = "MMMMMMMMM";break;
    }
    return romanNum;
}


 if(num.length == 1) {num = ones(num);}
 else if(num.length == 2) { num = tens(num[0]) + ones(num[1]); }
 else if(num.length == 3) { num = hundreds(num[0]) + tens(num[1]) + ones(num[2]); }
 else if(num.length == 4) { num = thousands(num[0]) + hundreds(num[1]) + tens(num[2]) + ones(num[3]); }
    
 return num;
}


console.log("2 ", convertToRoman(2) );
console.log("3 ", convertToRoman(3) );
console.log("4 ", convertToRoman(4) );
console.log("5 ", convertToRoman(5) );
console.log("9 ", convertToRoman(9) );
console.log("12 ", convertToRoman(12) );
console.log("16 ", convertToRoman(16) );
console.log("29 ", convertToRoman(29) );
console.log("44 ", convertToRoman(44) );
console.log("45 ", convertToRoman(45) );
console.log("68 ", convertToRoman(68) );
console.log("83 ", convertToRoman(83) );
console.log("97 ", convertToRoman(97) );
console.log("99 ", convertToRoman(99) );
console.log("400 ", convertToRoman(400) );
console.log("500 ", convertToRoman(500) );
console.log("501 ", convertToRoman(501) );
console.log("649 ", convertToRoman(649) );
console.log("798 ", convertToRoman(798) );
console.log("891 ", convertToRoman(891) );
console.log("1000 ", convertToRoman(1000) );
console.log("1004 ", convertToRoman(1004) );
console.log("1006 ", convertToRoman(1006) );
console.log("1023 ", convertToRoman(1023) );
console.log("2014 ", convertToRoman(2014) );
console.log("3999 ", convertToRoman(3999) );