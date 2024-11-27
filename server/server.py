# importing Flask and jsonify from the flask package
from flask import Flask, jsonify

# app instance

app = Flask(__name__)

@app.route("/api/home", methods = ['GET'])

def return_home():
    return jsonify({
        'message': "Hello World!"
    })

if __name__ == "__main__":
    app.run(debug=True)