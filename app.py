from flask import Flask, render_template

app = Flask(__name__)

# This route listens for people visiting your main URL
@app.route('/')
def home():
    # Flask will automatically look inside the 'templates' folder for this file
    return render_template('index.html')

if __name__ == '__main__':
    # debug=True means the server will auto-reload if you change the Python code
    app.run(debug=True)