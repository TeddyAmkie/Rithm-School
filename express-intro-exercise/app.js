const express = require('express');
const ExpressError = require("./expressError");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mean, Median, Mode javascript functions taken from:
// https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript

app.get('/mean', function (req, res, next) {
    try {

        // Convert query string into array of numbers
        inputNumbers = req.query.nums.split(',')
        for (let i = 0; i < inputNumbers.length; i++) {
            inputNumbers[i] = parseInt(inputNumbers[i]);
        }

        // Test for empty or non-number inputs


        if (inputNumbers.includes(NaN)) {
            throw new ExpressError("Input contains a non-number.", 400);
        }
        if (inputNumbers.length === 0) {
            throw new ExpresError("Please add more inputs.", 400);
        }

        // Calculate the mean of inputNumbers
        function mean(nums) {
            let total = 0;
            for (let i = 0; i < nums.length; i++) {
                total += nums[i];
            }
            return total / nums.length;
        }

        // Return response
        return res.json({
            "operation": "mean",
            "value": mean(inputNumbers)
        });


    } catch (err) {
        return next(err);
    }

});

app.get('/median', function (req, res, next) {
    try {

        // Convert query string into array of numbers
        inputNumbers = req.query.nums.split(',')
        for (let i = 0; i < inputNumbers.length; i++) {
            inputNumbers[i] = parseInt(inputNumbers[i]);
        }

        // Test for empty or non-number inputs

        if (inputNumbers.includes(NaN)) {
            throw new ExpressError("Input contains a non-number.", 400);
        }
        if (inputNumbers.length === 0) {
            throw new ExpresError("Please add more inputs.", 400);
        }
        // The median is the middle value in a list of numbers.
        function median(numbers) {
            let median = 0, numsLen = numbers.length;
            numbers.sort();

            if (
                numsLen % 2 === 0 // is even
            ) {
                // average of two middle numbers
                median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
            } else { // is odd
                // middle number only
                median = numbers[(numsLen - 1) / 2];
            }

            return median;
        }

        // Return response
        return res.json({
            "operation": "median",
            "value": median(inputNumbers)
        });
    } catch (err) {
        return next(err);
    }

});

app.get('/mode', function (req, res, next) {
    try {
        console.log("output is", req.query['nums']);
        if (req.query["nums"] === undefined) {
            throw new ExpressError("Please add more inputs.", 400);
        }
        // Convert query string into array of numbers
        inputNumbers = req.query.nums.split(',')
        for (let i = 0; i < inputNumbers.length; i++) {
            inputNumbers[i] = parseInt(inputNumbers[i]);
        }

        // Test for non-number inputs
        if (inputNumbers.includes(NaN)) {
            throw new ExpressError("Input contains a non-number.", 400);
        }

        function mode(nums) {
            // Returns the number or numbers that appears most frequently.
            let modes = [];
            let count = [];
            let maxIndex = 0;
            let number;


            // Frequency Counter
            for (let i = 0; i < nums.length; i++) {
                number = nums[i];
                count[number] = (count[number] || 0) + 1;
                if (count[number] > maxIndex) {
                    maxIndex = count[number];
                }
            }

            for (let i in count) {
                if (count.hasOwnProperty(i)) {
                    if (count[i] === maxIndex) {
                        modes.push(Number(i));
                    }
                }
            }
            return modes;
        }



        // Return response
        return res.json({
            "operation": "mode",
            "value": mode(inputNumbers)
        });

    } catch (err) {
        return next(err);
    }

});


/// ************ END OF ROUTES ******************

// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});

// generic error handler
app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});
// end generic handler
app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});

