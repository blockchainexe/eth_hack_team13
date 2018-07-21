from flask import Flask, request, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')


@app.route('/')
def send_index():
    return send_from_directory('dist', 'index.html')


@app.route('/dist/<string:path>')
@app.route('/<string:path>')
def send_file(path):
    return send_from_directory('dist', path)


if __name__ == "__main__":
    app.run(debug=True, host="server", port=5000)
