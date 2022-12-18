function telephoneCheck(str) {

    const excluded = new Set(['*', '&', '$', '#', '@', '!', '?']);
    let numberLen = 0;
    let hasFirstPar = false;

    // Before starting the loop, checks if there is 2 numbers before a space
    if (str[2] == ' ') {
        return false;
    }
    
    // And checks if the first number is a '1' if the second char is a space
    else if (str[1] == ' ' && str[0] != '1') {
        return false;
    }

    for (let i = 0; i < str.length; i++) {

        // Count the number of integers
        if (Number.isInteger(parseInt(str[i]))) {
            numberLen++;
        }
        
        // If the input at index is present in the excluded set, return false
        if (excluded.has(str[i])) {
            return false;
        }  

        // If a first parentheses is found, check if it closes after 3 numbers, if not then false
        if (str[i] == '(') {
            hasFirstPar = true;

            if (str[i+4] != ')') {
                return false;
            }
        }

        // If a closing parentheses is found but there is no opening, false
        if (str[i] == ')' && !hasFirstPar) {
            return false;
        }

    }   

    // Return false if number length is too long or short
    if (numberLen < 10 || numberLen > 11) {
        return false;
    }

    // Also if it is 11 numbers long but does not start with '1'
    if (numberLen == 11 && str[0] != '1') {
        return false;
    }


    console.log(str, true);
    return true;
}


telephoneCheck("555-555-5555") //Should return true.


telephoneCheck("(555)555-5555") //Should return true.
telephoneCheck("(555) 555-5555") //Should return true.
telephoneCheck("555 555 5555") //Should return true.
telephoneCheck("5555555555") //Should return true.
telephoneCheck("1 555 555 5555") //Should return true.
telephoneCheck("1 (555) 555-5555") // Should return true.
telephoneCheck("1(555)555-5555") // Should return true.
console.log(" ")
telephoneCheck("555-5555") // Should return false.
telephoneCheck("5555555") // Should return false.
telephoneCheck("1 555)555-5555") // Should return false.
telephoneCheck("123**&!!asdf#") // Should return false.
telephoneCheck("55555555") // Should return false.
telephoneCheck("(6054756961)") // Should return false.
telephoneCheck("2 (757) 622-7382") // Should return false.
telephoneCheck("0 (757) 622-7382") // Should return false.
telephoneCheck("-1 (757) 622-7382") // Should return false.
telephoneCheck("2 757 622-7382") // Should return false.
telephoneCheck("10 (757) 622-7382") // Should return false.
telephoneCheck("27576227382") // Should return false.
telephoneCheck("(275)76227382") // Should return false.
telephoneCheck("2(757)6227382") // Should return false.
telephoneCheck("2(757)622-7382") // Should return false.
telephoneCheck("555)-555-5555") // Should return false.
telephoneCheck("(555-555-5555") // Should return false.
telephoneCheck("(555)5(55?)-5555") // Should return false.
telephoneCheck("55 55-55-555-5") // Should return false.
telephoneCheck("11 555-555-5555") // Should return false.
