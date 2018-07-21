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
