// module.exports =

function toReadable(number) {
    let strArr = number.toString().split("");
    let l = strArr.length;
    let result = [];

    const digits09 = [
        { 0: "" },
        { 1: "one" },
        { 2: "two" },
        { 3: "three" },
        { 4: "four" },
        { 5: "five" },
        { 6: "six" },
        { 7: "seven" },
        { 8: "eight" },
        { 9: "nine" }
    ];

    const digits1019 = [  
        { 0: "ten" },  
        { 1: "eleven" },  
        { 2: "twelve" },  
        { 3: "thirteen" },  
        { 4: "fourteen" },  
        { 5: "fifteen" },  
        { 6: "sixteen" },  
        { 7: "seventeen" },  
        { 8: "eighteen" },  
        { 9: "nineteen" }  
    ];  

    const digits2090 = [
        { 0: "" },
        { 1: "ten"},
        { 2: "twenty" },
        { 3: "thirty" },
        { 4: "fourty" },
        { 5: "fifty" },
        { 6: "sixty" },
        { 7: "seventy" },
        { 8: "eighty" },
        { 9: "ninety" },
    ];

    let writeDigit = (arr, n) => (arr[n])[n];

    if (number > -1 && number < 10) {
        result.unshift(writeDigit(digits09, Number(strArr[strArr.length-1])));
    }
    
    if (number > 9 && number < 20) {
      result.unshift(writeDigit(digits1019, Number(strArr[strArr.length-1])));
    }

    if (number > 19 && number < 100) {
      result.unshift(writeDigit(digits09, Number(strArr[strArr.length-1])));
      result.unshift(writeDigit(digits2090,  Number(strArr[strArr.length-2])));
    }

    if (number > 99 && number < 1000) {
      result.unshift(writeDigit(digits09, Number(strArr[strArr.length-1])));
      result.unshift(writeDigit(digits2090,  Number(strArr[strArr.length-2])));
      result.unshift(' hundreds ')
      result.unshift(writeDigit(digits09,  Number(strArr[strArr.length-3])));
    }

    console.log(result.join(" "));
    return result.join(" ");
}

toReadable(834);
