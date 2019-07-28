// Importing Scatter and eosjs.
import ScatterJS, { Network } from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';
import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs';
// Scatter comes without plugins, so we need to add the eosjs plugin.
ScatterJS.plugins(new ScatterEOS())

const network = Network.fromJson({
    blockchain: 'eos',
    host: 'nodes.get-scatter.com',
    port: 443,
    protocol: 'https',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906' // <-- this is the MAINNET
});

const rpc = new JsonRpc(network.fullhost());

let scatter;

let init = async () => {
    let connected = await ScatterJS.scatter.connect('Autoscale')
    if(!connected){
        // Either the user doesn't have Scatter, or it's closed.
        console.error('Could not connect to Scatter.');
        return;
    }
    
    scatter = ScatterJS.scatter;
    let identity = await scatter.getIdentity({accounts:[network]});
    let eos = scatter.eos(network, Api, {rpc})

    console.log("--")
    console.log(identity)

    return { scatter, identity, eos }
}

let logout = async() => {
    await scatter.forgetIdentity();
}

export default { init, logout }

