module.exports = function toReadable (number) {
    let n3;
    let n2;
    let n1;
    const numberString = number.toString();
    if (numberString.length === 3) {
        n3 = numberString[0];
        n2 = numberString[1];
        n1 = numberString[2];
    }
    if (numberString.length === 2) {
        n2 = numberString[0];
        n1 = numberString[1];
    }
    if (numberString.length === 1) {
        n1 = numberString[0];
    }   
        let textNumber3;
        if (n3) {
            switch (n3) {
            case '1': textNumber3 = 'one hundred';
            break;
            case '2': textNumber3 = 'two hundred';
            break;
            case '3': textNumber3 = 'three hundred';
            break;
            case '4': textNumber3 = 'four hundred';
            break;
            case '5': textNumber3 = 'five hundred';
            break;
            case '6': textNumber3 = 'six hundred';
            break;
            case '7': textNumber3 = 'seven hundred';
            break;
            case '8': textNumber3 = 'eight hundred';
            break;
            case '9': textNumber3 = 'nine hundred';
            break;
            case undefined: textNumber3 = '';
            break;
        }
    }
        let textNumber2;
        if (n2 === '1') {
            switch (n2+n1) {
            case '10': textNumber2 = ' ten';
            break;
            case '11': textNumber2 = ' eleven';
            break;
            case '12': textNumber2 = ' twelve';
            break;
            case '13': textNumber2 = ' thirteen';
            break;
            case '14': textNumber2 = ' fourteen';
            break;
            case '15': textNumber2 = ' fifteen';
            break;
            case '16': textNumber2 = ' sixteen';
            break;
            case '17': textNumber2 = ' seventeen';
            break;
            case '18': textNumber2 = ' eighteen';
            break;
            case '19': textNumber2 = ' nineteen';
            break;
            case undefined: textNumber2 = '';
            break;
            }
        }
        if (n2) {
            switch (n2) {
                case '0': textNumber2 = '';
                break;
                case '2': textNumber2 = ' twenty';
                break;
                case '3': textNumber2 = ' thirty';
                break;
                case '4': textNumber2 = ' forty';
                break;
                case '5': textNumber2 = ' fifty';
                break;
                case '6': textNumber2 = ' sixty';
                break;
                case '7': textNumber2 = ' seventy';
                break;
                case '8': textNumber2 = ' eighty';
                break;
                case '9': textNumber2 = ' ninety';
                break;
            }
        }
        let textNumber1;    
        if (n1 && n2 !== '1') {
            switch (n1) {
                case '1': textNumber1 = 'one';
                break;
                case '2': textNumber1 = 'two';
                break;
                case '3': textNumber1 = 'three';
                break;
                case '4': textNumber1 = 'four';
                break;
                case '5': textNumber1 = 'five';
                break;
                case '6': textNumber1 = 'six';
                break;
                case '7': textNumber1 = 'seven';
                break;
                case '8': textNumber1 = 'eight';
                break;
                case '9': textNumber1 = 'nine';
                break;
                case '9': textNumber1 = 'nine';
                }
            }
            if (numberString.length === 1 && numberString === '0') {
                return textNumber1 = 'zero';
            }
            let result= `${textNumber3||''}${textNumber2||''} ${textNumber1||''}`;
            return result.trim() 
        }