// https://www.hizliresim.com/87mi09b -

function LetterChanges(str) {
    str = str.split("").map(converted).join("");
    return str;
}

function converted(elem){
    var nonLetter = /\w/g;
    var numbers = /[0-9]/g;
    var lowerCaseVowels = /[aeiou]/g
    if(elem.match(nonLetter) || elem.match(numbers)){
        return elem;
    }
    else{
        var asciiVal = elem.chartCodeAt(0);
        asciiVal++;
        if(String.fromCharCode(asciiVal).match(lowerCaseVowels)){
            return String.fromCharCode(asciiVal).toUpperCase();
        }else{
            return String.fromCharCode(asciiVal);
        }
    }
}