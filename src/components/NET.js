import React from 'react';
import { Card, Image, Placeholder } from 'semantic-ui-react'
import net_image from '../images/net.png'
import costs from '../helpers/costs'

class NET extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            prices: false
        }
    }

    async componentDidMount() {
        let prices = await costs.net()
        window.net_prices = prices
        this.setState({ prices })
    }

    render() {
        return (

            <Card fluid>
                <Image src={net_image} wrapped ui={false} style={{ 'padding': '2em' }} />
                <Card.Content>
                    <Card.Header>NET</Card.Header>
                    <Card.Description>
                        Amount of data the network can transfer during your transactions.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {this.state.prices ?
                        <table>
                            <tbody>
                                <tr>
                                    <td>30-day Cost:</td>
                                    <td><h3 className='color'>{costs.round(this.state.prices.pp_net_rent, 6)} EOS</h3></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>for 1mb NET Daily</td>
                                </tr>
                                <tr>
                                    <td>Source:</td>
                                    <td>eosio.rexpool</td>
                                </tr>
                                <tr>
                                    <td>Stake Basis:</td>
                                    <td>1kb for {costs.round(this.state.prices.pp_net, 4)} EOS</td>
                                </tr>
                            </tbody>
                        </table>
                        :
                        <Placeholder>
                            <Placeholder.Paragraph>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    }
                </Card.Content>
            </Card>

        );
    }
}

export default NET;
