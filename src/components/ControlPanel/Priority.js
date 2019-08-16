import React from 'react';
import { Placeholder, Segment, Button, Table, Icon } from 'semantic-ui-react'
import scatter from '../../helpers/scatter'


class Priority extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            priorityError: '',
            loading: false,
            clickButtonLoading: false,      // beomes an int when loading (to identify button)
            priority: null,       // default no priority
            priorityAfterUpdate: null
        }
        this.switchPriority = this.switchPriority.bind(this)
        this.priorityCompleted = this.priorityCompleted.bind(this)
        this.priorityCanceled = this.priorityCanceled.bind(this)
        this.getPriority = this.getPriority.bind(this)
        this.genButton = this.genButton.bind(this)
    }

    async componentDidMount() {
        await this.getPriority()
    }

    async getPriority() {
        // load user autoscale balance
        if (this.props.account) {
            // set loader.
            this.setState({ ...this.state, loading: true })

            // priority = x
            let priority = null   // no priority
            let resp = await scatter.autoscale(this.props.account)  // get priority
            if (resp) { priority = resp.priority }

            // turn off loader and set balance.
            this.setState({ ...this.state, priority, loading: false })
        }
    }

    switchPriority(e) {
        let priority = e.target.value
        // save priority we selected (to apply after completion)
        this.setState({ priorityAfterUpdate: priority, clickButtonLoading: parseInt(priority) })
        // stop loading after 5 seconds
        setTimeout(() => {this.setState({...this.state, clickButtonLoading: false})}, 5000)
        scatter.prioritize(priority, this.priorityCompleted, this.priorityCanceled)
    }

    priorityCompleted() {
        // apply saved priority..
        this.setState({ ...this.state, clickButtonLoading: false, priority: parseInt(this.state.priorityAfterUpdate) })
    }

    priorityCanceled(e) {
        this.setState({ ...this.state, clickButtonLoading: false, priorityError: e })
        // remove priority error after 5 seconds
        setTimeout(() => { this.setState({ ...this.state, priorityError: '' }) }, 5000)
    }


    genButton(buttonNum=1) {
        //buttonNum = 1,2,0
        let { clickButtonLoading, priority } = this.state
        let isActivated = Boolean(priority === buttonNum)
        let buttonText = isActivated ? 'Active' : 'Select'

        if(priority===null) {
            // no priority found
            buttonText = 'Off'
            isActivated = true  // activated buttons are disabled
        }
        return (
            <Button basic loading={Boolean(clickButtonLoading===buttonNum)} disabled={isActivated} value={buttonNum} onClick={this.switchPriority}>{buttonText}</Button>
        )
    }
    render() {

        if (this.state.loading) {
            // loading priority settings...
            return (
                <Placeholder>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            )
        }
        return (
            <div>
                {this.state.priorityError ? <Segment inverted color='red'>{this.state.priorityError}</Segment> : null}

                <Table basic='very'>

                    <Table.Body>
                        <Table.Row positive>
                            <Table.Cell style={{ width: '70%' }}>
                                <h4><Icon name='arrow alternate circle up' />CPU/NET ONLY</h4>
                                Autoscale monitors account for sufficient CPU and NET resources but not RAM.
                        </Table.Cell>
                            <Table.Cell>{this.genButton(1)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <h4><Icon name='plus circle' />CPU/NET + RAM</h4>
                                Autoscale monitors all account resources. Note: RAM use depletes balance faster.
                        </Table.Cell>
                            <Table.Cell>{this.genButton(2)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <h4><Icon name='pause circle' />PAUSE AUTOSCALE</h4>
                                Autoscale will be turned off and not monitor your account for resources.
                        </Table.Cell>
                            <Table.Cell>{this.genButton(0)}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default Priority;




