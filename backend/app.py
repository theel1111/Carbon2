from flask import Flask

app = Flask(__name__)

@app.route("/api", methods = ['GET'])
def home():
    return {
        "channel": "the show", 
        "tutorial": "React, flask and docker"
    }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000,debug=True)
