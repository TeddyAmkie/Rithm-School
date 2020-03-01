process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let items = require("../fakeDb");

// valid inputs
let eggs = { name: "eggs", price: 3.00 };
let eggrolls = { name: "eggrolls", price: 4.00 };
let eggplant = { name: "eggplant", price: 1.25 };

// invalid inputs
let bananas = { name: "bananas", price: "banana" };
let puppies = { name: "puppies" };
let bread = { ingredients: "wheat" };

beforeEach(function () {
    items.push(eggs, eggrolls, eggplant);
})

afterEach(function () {
    items.length = 0;
})

/** Gets item list. Should look like:
 [
  {
    "name": "tortillas",
    "price": 3
  },
  {
    "name": "eggs",
    "price": 3
  },
  {
    "name": "eggrolls",
    "price": 3
  }
]
 **/
describe("GET /items", function () {
    test("Gets a list of valid inputs", async function () {
        const resp = await request(app).get('/items');
        expect(resp.statusCode).toBe(200);

        expect(resp.body).toEqual([eggs, eggrolls, eggplant] )
    })
})