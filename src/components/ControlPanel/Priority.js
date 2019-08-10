import React from 'react';
import { Table, Icon } from 'semantic-ui-react'


class Priority extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Table basic='very'>

                <Table.Body>
                    <Table.Row positive>
                        <Table.Cell style={{width:'70%'}}>
                            <h4><Icon name='arrow alternate circle up' />CPU/NET ONLY</h4>
                            Autoscale monitors account for CPU and NET resources but not RAM.
                        </Table.Cell>                        
                        <Table.Cell><i>Active</i></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>
                            <h4><Icon name='plus circle' />CPU/NET +RAM</h4>
                            Autoscale monitors all resources. RAM usage depleted balance faster.
                        </Table.Cell> 
                        <Table.Cell>Coming Soon..</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <h4><Icon name='pause circle' />PAUSE AUTOSCALE</h4>
                            Autoscale will be turned off and not monitor your account.
                        </Table.Cell>
                        <Table.Cell>Coming Soon..</Table.Cell>
                    </Table.Row>                    
                </Table.Body>
            </Table>
        );
    }
}

export default Priority;




