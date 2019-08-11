import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react'
import costs from '../../helpers/costs'


class Estimator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }


    render() {
        let { payment } = this.props
        if(!payment || payment > 100) payment = 1

        let {cpu_prices, net_prices, ram_prices} = window
        let days_cpu = parseInt((payment / cpu_prices.pp_cpu_rent) * 30)
        let days_net = parseInt((payment / net_prices.pp_net_rent) * 30)
        let days_ram = parseInt((payment / (ram_prices.pp_byte * 1000)) * 30)

        return (
            <div>
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
            Calculation based on <i>current market prices</i>. Assumption of 1000ms CPU daily or 1000kb NET daily or 1000bytes RAM monthly.
            </div>
        );
    }
}

export default Estimator;




