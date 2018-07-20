import { Connect, SimpleSigner } from 'uport-connect';
export const uport = new Connect('InfluProject', {
  clientId: '2ormFtJUNdsqpuTx2CmWYTpGQLLFVznTE99',
  network: 'rinkeby',
  signer: SimpleSigner('43472279797a521ac2f414e771d7b36f6165dad491fe101079146030735dbb19')

});
export const web3 = uport.getWeb3();
