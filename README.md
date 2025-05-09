# Project Title: Loan Funded Amount Prediction

## 📦 Project Overview

This project involves predicting the funded amount of loans based on various features such as longitude, latitude, lender count, population density, and precipitation. The objective is to build a regression model using multiple algorithms and select the best-performing model for deployment. The final model is deployed using a Flask backend and a React frontend for user interaction.

---

## ✅ Project Workflow:

1. **Data Collection and Understanding:**

   * Synthetic data was generated for the features including longitude, latitude, lender count, population density, and precipitation.

2. **Data Preprocessing:**

   * Handling missing values.
   * Data type conversions (e.g., converting strings to floats).
   * Feature scaling using StandardScaler.
   * Outlier detection and removal using Z-score analysis.

3. **Feature Selection:**

   * Correlation matrix analysis to identify highly correlated features.
   * Feature importance analysis using Random Forest.

4. **Model Experimentation:**

   * Multiple regression models were implemented and evaluated:

     * Linear Regression
     * Lasso Regression
     * Ridge Regression
     * Random Forest Regressor
   * Evaluation metrics included RMSE, MAE, and R² score.

5. **Model Selection:**

   * Random Forest Regressor was selected as the final model due to its superior performance in terms of accuracy and robustness to overfitting.

---

## 🛠️ Implementation:

1. **Backend:** Flask

   * API endpoint `/predict` was created to accept user inputs and return the predicted funded amount.
   * Model was saved as a pickle file (`rf_model.pkl`) and loaded during API initialization.

2. **Frontend:** React

   * A user interface was developed to collect user inputs for the prediction model.
   * Axios was used to communicate with the Flask backend to fetch the prediction.

3. **Integration:**

   * CORS was enabled to handle requests between React and Flask.
   * The response from the Flask API was displayed in a user-friendly manner on the React interface.

---

## 🚀 How to Run the Project:

1. Clone the repository:

   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```

2. Install the backend dependencies:

   ```bash
   cd backend
   pip install -r requirements.txt
   python app.py
   ```

3. Install the frontend dependencies:

   ```bash
   cd frontend
   npm install
   npm start
   ```

---

## 📦 Dependencies:

* Python 3.x
* Flask
* Flask-CORS
* scikit-learn
* React
* Axios

---

## ✨ Future Enhancements:

* Implement model versioning and performance tracking.
* Deploy the application using Docker and AWS.
* Add additional features like interest rate, loan term, and credit score.

---

Feel free to contribute and suggest improvements!
