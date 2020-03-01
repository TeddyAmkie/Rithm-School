from flask import Flask, render_template, request, jsonify
import random
import requests
from forms import InputFormValidators

app = Flask(__name__)

app.config['WTF_CSRF_ENABLED'] = False

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num", methods=["POST"])
def lucky_data():
    """
    Process input json data. Return errors, or if all fields valid, send number
    to numbers API and response as json.
    """

    inputs = request.json
    lucky_num = random.randint(1, 101)
    import pdb; pdb.set_trace()
    form = InputFormValidators(**inputs['data'])
    # Use numbersapi to generate data. Consolidate data ready to be sent as response.
    lucky_year = inputs['data']['year']
    lucky_num_api_data = requests.get(f"http://numbersapi.com/{lucky_num}/math")
    year_api_data = requests.get(f"http://numbersapi.com/{lucky_year}/year")
    response_data = {
        "num": {
            "fact": lucky_num_api_data.text,
            "num": lucky_num
        },
        "year": {
            "fact": year_api_data.text,
            "year": lucky_year
        }
    }
    return jsonify(response=response_data)
