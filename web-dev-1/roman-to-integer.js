// Checks the letters in the string and adds the value to a count.
// Some roman numerals follow rules based on the index ahead of it.
// If a rule applies, the two indexes will be added to the count together, and index incremented.
// To make code more readable, I would create helper functions for letters that required rules, or just create a dictionary to lookup. 
// 

    function romanToInteger(string) {
        let count = 0;

        for (i = 0; i < string.length; i++) {
            console.log("i, string[i], count",i,string[i],count)
            if (string[i] === "I") {
                if (string[i+1] === "V") {
                    count+= 4;
                    i++;
                }
                else if(string[i+1] === "X") {
                    count+=9;
                    i++;
                } else {
                    count+=1;
                }
            }

            else if (string[i] === "V") {
                count+= 5;
            }

            else if (string[i] === "X") {
                if (string[i+1] === "L") {
                    count+= 40;
                    i++;
                }
                if (string[i+1] === "C") {
                    count+= 90;
                    i++;
                } else {
                    count+= 10;
                }
            }

            else if (string[i] === "L") {
                count+= 50;
            }

            else if (string[i] === "C") {
                if (string[i+1] === "D") {
                    count+= 400;
                    i++;
                }
                else if (string[i+1] === "M") {
                    count+= 900;
                    i++;
                } else {
                    count+= 100;
                }
            }

            else if (string[i] === "D") {
                count+= 500;
            }

            else if (string[i] === "M") {
                count+= 1000;
            }
            
        }
        return count;
    }