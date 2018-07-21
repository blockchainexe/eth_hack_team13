import { Connect, SimpleSigner } from 'uport-connect';
export const uport = new Connect('InfluProject', {
  clientId: '2ormFtJUNdsqpuTx2CmWYTpGQLLFVznTE99',
  network: 'rinkeby',
  signer: SimpleSigner('43472279797a521ac2f414e771d7b36f6165dad491fe101079146030735dbb19')
//   clientId: '2opHwbnmU9zi3Q8jE16zuXSWXJ42UUBRiEB',
//   network: 'rinkeby',
//   signer: SimpleSigner('e4f87c095dc07b64524ed4aa691b13ad1f8aaf1118eb0991813c608625cc0dd3')
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

export const attestCredentials = (player, friendAddress) => {
  return uport.attestCredentials({
    sub: player.address,
    claim: { 'friendAddress': friendAddress }
  }).then(res => res)
    .catch(error => {
      console.error(error);
      return null;
    });
};

export const getFriendList = credentials => {
  return credentials.verified
    .filter(v => typeof v.claim.friendAddress !== 'undefined')
    .map(v => v.claim.friendAddress);
};
