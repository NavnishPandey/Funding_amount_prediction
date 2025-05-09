import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load the model
model = pickle.load(open(r'C:\Users\Alka\Documents\Fund_amount-prediction\funding_amount_prediction\backend\rf_model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        longitude = float(data['longitude'])
        latitude = float(data['latitude'])
        lender_count = float(data['lender_count'])
        popDensity = float(data['popDensity'])
        precipitation = float(data['precipitation'])

        inputs = np.array([[longitude, latitude, lender_count, popDensity, precipitation]])

        # Make prediction
        prediction = model.predict(inputs)
        funded_amount = np.round(prediction[0], 2)

        return jsonify({'Funded_amount': f'{funded_amount}K dollars'})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
