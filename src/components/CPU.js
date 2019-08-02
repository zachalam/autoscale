import React from 'react';
import { Card, Image, Placeholder } from 'semantic-ui-react'
import cpu_image from '../images/cpu.png'
import costs from '../helpers/costs'

class CPU extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            prices: false
        }
    }

    async componentDidMount() {
        let prices = await costs.cpu()
        this.setState({ prices })
    }

    render() {
        return (

            <Card fluid>
                <Image src={cpu_image} wrapped ui={false} style={{ 'padding': '2em' }} />
                <Card.Content>
                    <Card.Header>CPU</Card.Header>
                    <Card.Description>
                        Amount of time the network can spend processing your transactions.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {this.state.prices ?
                        <table>
                            <tbody>
                                <tr>
                                    <td>30-day Cost:</td>
                                    <td><h3 className='color'>{costs.round(this.state.prices.pp_cpu_rent, 6)} EOS</h3></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>for 1.0s CPU Daily</td>
                                </tr>
                                <tr>
                                    <td>Source:</td>
                                    <td>eosio.rexpool</td>
                                </tr>
                                <tr>
                                    <td>Stake Basis:</td>
                                    <td>1ms for {costs.round(this.state.prices.pp_cpu, 4)} EOS</td>
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

export default CPU;
