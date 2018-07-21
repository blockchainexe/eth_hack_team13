from flask import Flask, request, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

@app.route('/api/items', methods=['GET'])
def get_items():
    return {
        'id': 1, 
        'url': ''
    }
 
@app.route('/api/avatars', methods=['GET'])
def get_avatars():
    return {
        'id': 1, 
        'url': ''
    }

@app.route('/api/nearby', methods=['GET'])
def get_nearby_users():
    pass