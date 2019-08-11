import React from 'react';
import { Table, Icon } from 'semantic-ui-react'


class Estimator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }


    render() {
        let { payment } = this.props
        if(!payment) payment = 1            // show 1 eos estimate if no input
        if(payment > 100) payment = 100     // estimate up to 100 eos

        let {cpu_prices, net_prices, ram_prices} = window
        let days_cpu = cpu_prices ? parseInt((payment / cpu_prices.pp_cpu_rent) * 30) : 0
        let days_net = net_prices ? parseInt((payment / net_prices.pp_net_rent) * 30) : 0
        let days_ram = ram_prices ? parseInt((payment / (ram_prices.pp_byte * 1000)) * 30) : 0

        return (
            <div>
            <div className="spacer" />
            <Table basic='very' compact='very'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{parseFloat(payment).toFixed(4)} <br /> EOS Token = </Table.Cell>
                        <Table.Cell><h4><Icon name='cog' color='grey' /> CPU</h4> {days_cpu} Days</Table.Cell>
                        <Table.Cell><h4><Icon name='plug' color='grey' /> NET</h4> {days_net} Days</Table.Cell>
                        <Table.Cell><h4><Icon name='globe' color='grey' /> RAM</h4>{days_ram} Days</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <div className="spacer" />
            *Based on <i>current market prices</i>. Assumption of 1000ms CPU daily, 1000kb NET daily, or 1000bytes RAM monthly.
            </div>
        );
    }
}

export default Estimator;




