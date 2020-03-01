/* 
categories is the main data structure for the app; it looks like this:

 [
   { title: "Math",
     clues: [
       {question: "2+2", answer: 4, showing: null},
       {question: "1+1", answer: 2, showing: null}
       ...
     ],
   },
   { title: "Literature",
     clues: [
       {question: "Hamlet Author", answer: "Shakespeare", showing: null},
       {question: "Bell Jar Author", answer: "Plath", showing: null},
       ...
     ],
   },
   ...
 ]
 */
const BASE_URL = "http://www.jservice.io";
const $restartButton = $("#restart");
let categories = [];
const NUM_CATEGORIES = 6; // Width of Board
const QUESTION_COUNT = 5; // Height of Board
const $board = [];
const $htmlBoard = $("#jeopardy");

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    let response = await axios.get(`${BASE_URL}/api/categories/?count=4`);
    let categoryIDs = response.data;
    console.log(categoryIDs);
    categories.push(categoryIDs)
    return categories;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 1*   ]
 */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM-QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if curerntly "answer", ignore click
 * */

function handleClick(evt) {

}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    getCategoryIds();
    drawBoard();
}

function drawBoard() {
    for (let i = 0; i < QUESTION_COUNT; i++) {
        let temp = [];
        for (let j = 0; j < NUM_CATEGORIES; j++) {
            temp.push("?");
        }
        $board.push(temp);
    }
    return $board;
}
// Table created based on answers at:
// https://stackoverflow.com/questions/25999747/how-to-create-board-nxn-using-javascript-and-jquery

function makeHTMLBoard() {
    // Create top row for Category Titles
    let $top = $htmlBoard.append("<tr>");
    $top.attr("id", "column-top");
    for (let x = 0; x < NUM_CATEGORIES; x++) {
        let $headCell = $htmlBoard.append("<td>");
        $headCell.attr("id", x);
        $top.append($headCell);
    }

    // Create HTML Board. Question Count is height,
    // NUM_CATEGORIES is width. 

    for (let y = 0; y < QUESTION_COUNT; y++) {
        const $row = $htmlBoard.add("<tr>");
        for (let x = 0; x < NUM_CATEGORIES; x++) {
            const $cell = $row.append("<td>");
            $cell.attr("id", `${y}-${x}`);
            $row.append($cell);
        }
        $htmlBoard.append($row);
    }
}

/** On click of restart button, restart game. */

// TODO

/** On page load, setup and start & add event handler for clicking clues */

// TODO