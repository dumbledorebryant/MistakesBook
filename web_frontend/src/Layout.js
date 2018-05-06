import React from 'react'
import {PageHeader} from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import UserINFO from './UserINFO'
import './Layout.css'


class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            valid: 0
        };
        this.judgeLogin = this.judgeLogin.bind(this);
    }
    judgeLogin(Username, StateValid){
        if(StateValid !== 0)
        {
            this.setState({
                username: Username,
                valid: 1
            });
        }
        else
        {
            this.setState({
                username: "",
                valid: 0
            })
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <UserINFO judgeLogin={this.judgeLogin}/>
                    </div>
                    <div className="col-md-10">
                        <PageHeader>Mistakes FIXer
                            <br/>
                            <small>The Best or Nothing</small>
                        </PageHeader>
                        <NavigationBar username={this.state.username}
                                       valid={this.state.valid}/>
                    </div>
                </div>


            </div>

        )
    }
}
export default Layout;