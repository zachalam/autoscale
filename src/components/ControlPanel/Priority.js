import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react'


class Priority extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.switchPriority = this.switchPriority.bind(this)
    }

    switchPriority() {
        alert("Coming soon..")
    }

    render() {
        return (
            <Table basic='very'>

                <Table.Body>
                    <Table.Row positive>
                        <Table.Cell style={{width:'70%'}}>
                            <h5><Icon name='arrow alternate circle up' />CPU/NET ONLY</h5>
                            Autoscale monitors account for CPU and NET resources but not RAM.
                        </Table.Cell>                        
                        <Table.Cell><Button basic disabled={true} onClick={this.switchPriority}>Active</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>
                            <h5><Icon name='plus circle' />CPU/NET +RAM</h5>
                            Autoscale monitors all resources. RAM use depletes balance faster.
                        </Table.Cell> 
                        <Table.Cell><Button basic onClick={this.switchPriority}>Switch</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <h5><Icon name='pause circle' />PAUSE AUTOSCALE</h5>
                            Autoscale will be turned off and not monitor your account.
                        </Table.Cell>
                        <Table.Cell><Button basic onClick={this.switchPriority}>Switch</Button></Table.Cell>
                    </Table.Row>                    
                </Table.Body>
            </Table>
        );
    }
}

export default Priority;




