const { JsonRpc } = require('eosjs');
const rpc = new JsonRpc('https://nodes.get-scatter.com', { fetch });

let gettablerows = async (table,code='eosio',lower_bound='') => {
    const resp = await rpc.get_table_rows({
        json: true,              // Get the response as json
        code,     // Contract that we target
        scope: code,         // Account that owns the data
        table,        // Table name
        lower_bound,        // account name is held here
        limit: 1               // Maximum number of rows that we want to get
    });

    return resp
}

let rexCost =  async(howMuchNeedToRent) => {
    // calculate how much it costs to rent
    let rexpool = await gettablerows('rexpool')
    let { rows } = rexpool
    rows = rows[0]      // grab first row

    // how much EOS staked you get from spending 1 EOS.
    const total_unlent = rows.total_unlent.split(" ")[0]
    const total_rent = rows.total_rent.split(" ")[0]
    let resourcesFor1EOS = total_unlent / (total_rent + 1)

    return howMuchNeedToRent / resourcesFor1EOS
}

let cpu = async () => {
    let resp = await rpc.get_account('cypherglasss')

    const cpu_weight = resp.total_resources.cpu_weight.split(" ")[0]
    const cpu_limit = resp.cpu_limit.max
    const cpu_avail = cpu_limit / 1000
    const pp_cpu = cpu_weight / cpu_avail

    // get rex (renatl) cost. (x1000 because in batches of 1000ms)
    const pp_cpu_rent = await rexCost(pp_cpu*1000)

    return { pp_cpu, pp_cpu_rent }
}

let net = async () => {
    let resp = await rpc.get_account('cypherglasss')

    const net_weight = resp.total_resources.net_weight.split(" ")[0]
    const net_limit = resp.net_limit.max
    const net_avail = net_limit / 1024
    const pp_net = net_weight / net_avail

    // get rex (renatl) cost. (x1000 because in batches of 1000ms)
    const pp_net_rent = await rexCost(pp_net*1000)

    
    return { pp_net, pp_net_rent }
}

let ram = async () => {
    let resp = await gettablerows('rammarket')
    let { rows } = resp
    rows = rows[0]      // grab first row

    // price per byte..
    const quote = rows.quote.balance.split(" ")[0]
    const base = rows.base.balance.split(" ")[0]
    let pp_byte =  quote / base
    let pp_kb = pp_byte * 1024
    return {pp_byte, pp_kb}
}

let round = (num,places=4) => {
    if(!num) return num
    return num.toFixed(places)
}

let autoscaleBalance = async (account_name) => {
    //let encoded_name = new BigNumber(Eos.modules.format.encodeName(account_name, false))
    let balance = await gettablerows('deposits','autoscale.x',account_name)
    console.log("balance object")
    console.log(balance)
}

let objectHash = {
    cpu,
    net,
    ram,
    round,
    autoscaleBalance
}

export default objectHash;