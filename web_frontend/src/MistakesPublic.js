import React from 'react'
import {Tab, Row, Col, Nav, NavItem}from 'react-bootstrap'
import MistakesTable from './MistakesTable'

const db_data = [];

class MistakesPublic extends React.Component{
    constructor(){
        super();
        this.state={
            Username: "",
            subject: "",
            jsonResult: []
        };
        this.getMathsData = this.getMathsData.bind(this);
        this.getPhysicsData = this.getPhysicsData.bind(this);
        this.getChemistryData = this.getChemistryData.bind(this);
        this.getEnglishData = this.getEnglishData.bind(this);
        this.getChineseData = this.getChineseData.bind(this);
        this.getBiologyData = this.getBiologyData.bind(this);

    }

    getMathsData() {
        fetch('http://localhost:8080/Data/FetchPublic?' +
            'tag=Maths',
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(response => {
                return response.json()
                    .then(result => {
                        console.log("result: ", result);
                        db_data.splice(0, db_data.length);
                        for (let i in result) {
                            let add =
                                {
                                    "id": result[i].mistakeId,
                                    "tag": result[i].mistakeTag,
                                    "content": result[i].mistakeContent,
                                    "reason": result[i].mistakeCause
                                };
                            db_data.push(add);
                        }
                        this.setState({
                            jsonResult: db_data
                        });
                    })
            })
    }
    getPhysicsData() {
        fetch('http://localhost:8080/Data/FetchPublic?' +
            'tag=Physics',
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(response => {
                return response.json()
                    .then(result => {
                        console.log("result: ", result);
                        db_data.splice(0, db_data.length);
                        for (let i in result) {
                            let add =
                                {
                                    "id": result[i].mistakeId,
                                    "tag": result[i].mistakeTag,
                                    "content": result[i].mistakeContent,
                                    "reason": result[i].mistakeCause
                                };
                            db_data.push(add);
                        }
                        this.setState({
                            jsonResult: db_data
                        });
                    })
            })
    }
    getChemistryData() {
        fetch('http://localhost:8080/Data/FetchPublic?' +
            'tag=Chemistry',
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(response => {
                return response.json()
                    .then(result => {
                        console.log("result: ", result);
                        db_data.splice(0, db_data.length);
                        for (let i in result) {
                            let add =
                                {
                                    "id": result[i].mistakeId,
                                    "tag": result[i].mistakeTag,
                                    "content": result[i].mistakeContent,
                                    "reason": result[i].mistakeCause
                                };
                            db_data.push(add);
                        }
                        this.setState({
                            jsonResult: db_data
                        });
                    })
            })
    }
    getEnglishData() {
        fetch('http://localhost:8080/Data/FetchPublic?' +
            'tag=English',
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(response => {
                return response.json()
                    .then(result => {
                        console.log("result: ", result);
                        db_data.splice(0, db_data.length);
                        for (let i in result) {
                            let add =
                                {
                                    "id": result[i].mistakeId,
                                    "tag": result[i].mistakeTag,
                                    "content": result[i].mistakeContent,
                                    "reason": result[i].mistakeCause
                                };
                            db_data.push(add);
                        }
                        this.setState({
                            jsonResult: db_data
                        });
                    })
            })
    }
    getChineseData() {
        fetch('http://localhost:8080/Data/FetchPublic?' +
            'tag=Chinese',
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(response => {
                return response.json()
                    .then(result => {
                        console.log("result: ", result);
                        db_data.splice(0, db_data.length);
                        for (let i in result) {
                            let add =
                                {
                                    "id": result[i].mistakeId,
                                    "tag": result[i].mistakeTag,
                                    "content": result[i].mistakeContent,
                                    "reason": result[i].mistakeCause
                                };
                            db_data.push(add);
                        }
                        this.setState({
                            jsonResult: db_data
                        });
                    })
            })
    }
    getBiologyData() {
        fetch('http://localhost:8080/Data/FetchPublic?' +
            'tag=Biology',
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(response => {
                return response.json()
                    .then(result => {
                        console.log("result: ", result);
                        db_data.splice(0, db_data.length);
                        for (let i in result) {
                            let add =
                                {
                                    "id": result[i].mistakeId,
                                    "tag": result[i].mistakeTag,
                                    "content": result[i].mistakeContent,
                                    "reason": result[i].mistakeCause
                                };
                            db_data.push(add);
                        }
                        this.setState({
                            jsonResult: db_data
                        });
                    })
            })
    }

    render(){
        console.log(this.props.username);
        return(
            <div>
                <Tab.Container id="left-tabs-example"
                               defaultActiveKey="first">
                    <Row className="Clearfix">
                        <Col sm={3}>
                            <br/>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first" onSelect={this.getMathsData}>
                                    Maths
                                </NavItem>
                                <NavItem eventKey="second" onSelect={this.getPhysicsData}>
                                    Physics
                                </NavItem>
                                <NavItem eventKey="third" onSelect={this.getChemistryData}>
                                    Chemistry
                                </NavItem>
                                <NavItem eventKey="fourth" onSelect={this.getEnglishData}>
                                    English
                                </NavItem>
                                <NavItem eventKey="fifth" onSelect={this.getChineseData}>
                                    Chinese
                                </NavItem>
                                <NavItem eventKey="sixth" onSelect={this.getBiologyData}>
                                    Biology
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">
                                    <MistakesTable username={this.props.username}
                                                   valid={this.props.valid}
                                                   data={this.state.jsonResult}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <MistakesTable username={this.props.username}
                                                   valid={this.props.valid}
                                                   data={this.state.jsonResult}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <MistakesTable username={this.props.username}
                                                   valid={this.props.valid}
                                                   data={this.state.jsonResult}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <MistakesTable username={this.props.username}
                                                   valid={this.props.valid}
                                                   data={this.state.jsonResult}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <MistakesTable username={this.props.username}
                                                   valid={this.props.valid}
                                                   data={this.state.jsonResult}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <MistakesTable username={this.props.username}
                                                   valid={this.props.valid}
                                                   data={this.state.jsonResult}/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
export default MistakesPublic;

