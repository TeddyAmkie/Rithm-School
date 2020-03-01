"""Validators for requests to our flask API."""
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import InputRequired, Email, NumberRange, AnyOf


class InputFormValidators(FlaskForm):
    """Only used for validating inputs into flask API."""

    name = StringField("name",
        validators=[InputRequired()])
    # year = IntegerField(
    #     validators=[InputRequired(), NumberRange(min=1900, max=2000)])
    # email = StringField(
    #     validators=[InputRequired(), Email()])
    # color = StringField(
    #     validators=[InputRequired(), AnyOf(["red", "green", "orange", "blue"])])
