import firebase from 'firebase';

export const initDB = () => {
  firebase.initializeApp(
    {
      apiKey: 'AIzaSyDzfJc3CxhvupAEaeGwcXO_44iC2gJed_0',
      authDomain: 'influ-bc.firebaseapp.com',
      databaseURL: 'https://influ-bc.firebaseio.com',
      projectId: 'influ-bc',
      storageBucket: '',
      messagingSenderId: '448452571074'
    }
  );
  return firebase.database();
};

export const dbWrite = (path, data) => {
  firebase.database().ref(path).set(data);
};

export const dbRead = (path) => {
  firebase.database().ref(path).on('value', function(snapshot) {
    console.log(snapshot.val());
  });
};

export const dbReadOnce = (path) => {
  firebase.database().ref(path).once('value').then(function(snapshot) {
    console.log(snapshot.val());
  });
};

export const writeNewMessage = (id, username, message) => {
  var postData = {
    username: username,
    message: message,
  };
  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('messages').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['test/id/'+id+'/messages/' + newPostKey] = postData;
  return firebase.database().ref().update(updates);
}
