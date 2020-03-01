/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault();

    let data = {
        name: $("#name").val(),
        year: $("#year").val(),
        email: $("#email").val(),
        color: $("#color").val()
    }
    let response = await axios.post(`/api/get-lucky-num`, {
        data
    });
    handleResponse(response);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    let errors = resp.data.response.errors;
    if (errors === undefined) {
        let numFact = resp.data.response.num.fact;
        let luckyNum = resp.data.response.num.num;
        let yearFact = resp.data.response.year.fact;
        let luckyYear = resp.data.response.year.year;

        let responseHTML = `Your lucky number is [${luckyNum}] ([${numFact}]). <br> 
        Your birth year ([${luckyYear}]) fact is [${yearFact}].`

        $("#lucky-results").append(responseHTML);
    }
    else {
        if (errors.name) {
            $("#name-err").html(`${errors.name}`)
        }
        if (errors.year) {
            $("#year-err").html(`${$errors.year}`)
        }
        if (errors.email) {
            $("#email-err").html(`${errors.email}`)
        }
        if (errors.color) {
            $("#color-err").html(`${errors.color}`)
        }
    }
}


$("#lucky-form").on("submit", processForm);
