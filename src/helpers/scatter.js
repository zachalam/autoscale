// Importing Scatter and eosjs.
import ScatterJS, { Network } from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';
import ScatterLynx from 'scatterjs-plugin-lynx'
import { Api, JsonRpc } from 'eosjs';
import costs from './costs';

// Scatter comes without plugins, so we need to add the eosjs plugin.
ScatterJS.plugins(new ScatterEOS(), new ScatterLynx({Api, JsonRpc}))

const network = Network.fromJson({
    blockchain: 'eos',
    host: 'nodes.get-scatter.com',
    port: 443,
    protocol: 'https',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906' // <-- this is the MAINNET
});

const rpc = new JsonRpc(network.fullhost());

let scatter, identity, eos, account;

let tx = async (account_contract, account_method, data, completed, cancelled) => {
    try {
        await eos.transact({
            actions: [{
                account: account_contract,      // 'eosio.token'
                name: account_method,       // 'transfer'
                authorization: [{
                    actor: account.name,
                    permission: account.authority,
                }],
                data
            }]
        }, {
                blocksBehind: 3,
                expireSeconds: 30,
            });
        //console.log(resp)
        completed();
    } catch (e) {
        // do nothing..'      
        console.log(e)
        let x = e
        if (x.message) x = x.message     // message provided. 
        cancelled(x.toString());

    }
}



let init = async () => {
    let connected = await ScatterJS.scatter.connect('Autoscale')
    if (!connected) {
        // Either the user doesn't have Scatter, or it's closed.
        console.error('Could not connect to Scatter.');
        return;
    }

    scatter = ScatterJS.scatter;
    identity = await scatter.getIdentity({ accounts: [network] });
    eos = scatter.eos(network, Api, { rpc, beta3: true })
    account = identity.accounts[0]

    console.log("--")
    console.log(identity)

    return { scatter, identity, eos, account }
}

let logout = async () => {
    await scatter.forgetIdentity();
}

let prioritize = async (priority, completed, cancelled) => {
    await tx('autoscale.x','prioritize',{
        account: account.name,
        priority
    }, completed, cancelled)
}

let transfer = async (amt, completed, cancelled) => {
    await tx('eosio.token','transfer',{
        from: account.name,
        to: 'autoscale.x',
        quantity: `${parseFloat(amt).toFixed(4)} EOS`,
        memo: account.name
    }, completed, cancelled)
}

let autoscale = async(account_name) => {
    let resp = await costs.autoscaleBalance(account_name)

    // if a row was returned, and that row = the logged in account, update balance.
    if (resp.rows.length && (resp.rows[0].account === account_name)) {
        // return user
        return resp.rows[0]
    } else {
        return null   // no autoscale found
    }
}
export default { init, logout, prioritize, transfer, autoscale }

