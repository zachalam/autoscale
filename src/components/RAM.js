import React from 'react';
import { Card, Image, Placeholder } from 'semantic-ui-react'
import ram_image from '../images/ram.png'
import costs from '../helpers/costs'

class RAM extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            prices: false
        }
    }

    async componentDidMount() {
        let prices = await costs.ram()
        window.ram_prices = prices
        this.setState({ prices })
    }

    render() {
        return (

            <Card fluid>
                <Image src={ram_image} wrapped ui={false} style={{ 'padding': '2em' }} />
                <Card.Content>
                    <Card.Header>RAM</Card.Header>
                    <Card.Description>
                        Storage for application data and smart contracts on the blockchain.
              </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {this.state.prices ?
                        <table>
                            <tbody>
                                <tr>
                                    <td>Exchange:</td>
                                    <td><h3 className='color'>1kb = {costs.round(this.state.prices.pp_kb, 4)} EOS</h3></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>{costs.round(this.state.prices.pp_byte, 8)} / byte</td>
                                </tr>
                                <tr>
                                    <td>Source:</td>
                                    <td>eosio.rammarket</td>
                                </tr>
                                <tr>
                                    <td>Unit Type:</td>
                                    <td>bytes</td>
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

export default RAM;
