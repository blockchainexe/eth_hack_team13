import { Connect, SimpleSigner } from 'uport-connect';
export const uport = new Connect('InfluProject', {
  clientId: '2ormFtJUNdsqpuTx2CmWYTpGQLLFVznTE99',
  network: 'rinkeby',
  signer: SimpleSigner('43472279797a521ac2f414e771d7b36f6165dad491fe101079146030735dbb19')
});

const uportFriend = new Connect('InfluProject', {
  clientId: '2ormFtJUNdsqpuTx2CmWYTpGQLLFVznTE99',
  network: 'rinkeby',
  signer: SimpleSigner('43472279797a521ac2f414e771d7b36f6165dad491fe101079146030735dbb19')
});

export const web3 = uport.getWeb3();

export const requestCredentials = (req) => {
  return uport.requestCredentials(req)
    .then(credentials => credentials)
    .catch(error => {
      console.error(error);
      return null;
    });
};

export let myCredential = {};

export const login = () => {
  return requestCredentials({
    requested: ['name', 'country'],
    verified: ['friend', 'profile', 'interest'],
    notifications: true
  }).then(credential => {
    myCredential = credential;
    let notFound = true;
    for (let v of myCredential.verified) {
      if (v.claim.profile) {
        console.log('not found');
        notFound = false;
      }
    }
    if (notFound) {
      return null;
    }
    return credential;
  });
};

export const attestCredentials = claim => {
  return uport.attestCredentials({
    sub: myCredential.address,
    claim: claim,
    notifications: true
  }).then(res => res)
    .catch(error => {
      console.error(error);
      return null;
    });
};

export const addFriend = () => {
  return uportFriend.requestCredentials({ requested: ['name', 'country'], verified: ['profile'], notifications: false }).then(friend => {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
         attestCredentials({
          'friend': { address: friend.address, name: friend.name, country: friend.country }
        }).then(result => {
          console.log(result);
          if(result === "ok"){
            console.log(friend.profile.interest);
            resolve({interest: friend.profile.interest, friendAddress: friend.address, friendName: friend.name});
          } else {
            reject({});
          }
        });
      }, 1000);
    })
  });
};

export const addItem = (item, friend) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
        return attestCredentials({
          'item': { friendAddress: friend.friendAddress, friendName: friend.friendName, itemId: item, categoryName: friend.interest }
        }).then(resolve());
      }, 1000);
    });
};

export const getFriendList = () => {
  return myCredential.verified
    .filter(v => typeof v.claim.friend !== 'undefined')
    .map(v => v.claim.friend);
};
