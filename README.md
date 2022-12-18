# PhoneNumValidator
Phone number validator implemented in JS

Funciton to validate if a phone number has a valid format (555-555-5555 or 5555555555 and so on). 

I used a set containing excluded special chararacters and if it is present, the function will return (false) invalid. I makes use of many conditionals in order to have a O(n) time complexity in a single pass, where n is the input length. 
