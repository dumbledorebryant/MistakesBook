import React from 'react'
import {Tabs, Tab, Row, Col} from 'react-bootstrap';
import AddMistakes from './AddMistakes'
import ChallengeAgain from './ChallengeAgain'
import MistakesContent from "./MistakesContent";
import MistakesPublic from "./MistakesPublic";

class NavigationBar extends React.Component{
    constructor() {
        super();
        this.state = {
            db_public_data: []
        };
    };

    render(){
        return(
            <div>
                <Row>
                    <Col sm={12}>
                        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Scan PUBLIC">
                                <br/>
                                <MistakesPublic username={this.props.username}
                                                 valid={this.props.valid}/>
                            </Tab>
                            <Tab eventKey={2} title="Query MISTAKES">
                                <br/>
                                <MistakesContent username={this.props.username}
                                                 valid={this.props.valid}/>
                            </Tab>
                            <Tab eventKey={3} title="Add MISTAKES">
                                <AddMistakes username={this.props.username}
                                             valid={this.props.valid}/>
                            </Tab>
                            <Tab eventKey={4} title="Challenge AGAIN">
                                <ChallengeAgain/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default NavigationBar;