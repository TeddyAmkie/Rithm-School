from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from forex_python.converter import CurrencyRates
converter = CurrencyRates(force_decimal=True)

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)

@app.route("/")
def homepage():
    """Returns the homepage."""

    return render_template("index.html")


@app.route("/submit")
def convert():
    """Convert HTTP request data using forex_python and respond with converted value"""
    convert_from = request.args.get('convert-from')
    convert_to = request.args.get('convert-to')
    convert_amount = int(request.args.get('convert-amount'))
    converted = converter.convert(convert_from, convert_to, convert_amount)
    return render_template("converted.html", converted=str(converted))

# Failed amount: <div class="alert alert-warning" role="alert">
#</div>
# <div class="alert alert-success" role="alert">
#This is a success alert—check it out!
#</div>