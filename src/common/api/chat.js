import { dbWrite } from '~/common/api/firebase';
import { myCredential } from '~/common/api/uport';
import firebase from 'firebase';

export const startChatSession = (path, callback) => {
  firebase.database().ref(`chat/${path}`).on('value', callback);
};

export const endChatSession = (path) => {
  firebase.database().ref(`chat/${path}`).off();
};

export const sendChatMessage = (path, index, message) => {
  dbWrite(`chat/${path}/${index}`, {
    msg: message,
    sender: myCredential.address
  });
};
