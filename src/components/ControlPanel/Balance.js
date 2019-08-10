import React from 'react';
import { Icon, Placeholder } from 'semantic-ui-react'

import costs from '../../helpers/costs'


class ControlPanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            autoscale_balance: 0,
            balance_loading: true
        }
        this.getBalance = this.getBalance.bind(this)
    }

    async componentDidMount() {
        await this.getBalance()
    }

    async getBalance() {
        // load user autoscale balance
        if (this.props.account) {
            // set loader.
            this.setState({ ...this.state, balance_loading: true })

            let resp = await costs.autoscaleBalance(this.props.account)
            let autoscale_balance = 0
            if (resp.rows.length) {
                // user has a balance
                autoscale_balance = resp.rows[0].balance / 10000
            }

            // turn off loader and set balance.
            this.setState({ ...this.state, autoscale_balance, balance_loading: false })
        }
    }


    render() {
        // loading bar...
        if (this.state.balance_loading)
            return (
                <Placeholder>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            )

        // load balance
        return (
            <div>
                <h3>{this.state.autoscale_balance.toFixed(4)} EOS</h3>
                {this.state.autoscale_balance === 0 ?
                    <span>Deposit EOS to enable Autoscale. <Icon name="shield" color='red' /></span> :
                    this.state.autoscale_balance < .10 ?
                    <span>Low balance, refill to avoid interruption. <Icon name="warning sign" color='orange' /></span> :
                        <span>Your account is protected. <Icon name="check" color='green' /></span>}
            </div>
        );
    }
}

export default ControlPanel;
