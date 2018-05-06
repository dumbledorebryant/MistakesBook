import React from 'react'
import './UserINFO.css'
import {Form, FormGroup, ControlLabel, FormControl, Glyphicon, Button, OverlayTrigger, Popover} from 'react-bootstrap'


class UserINFO extends React.Component{
    constructor(){
        super();
        this.state={
            Username: "",
            Password: "",
            Email: "",
            PhoneNUM: "",
            StateValid: 0,
            HelpInfo: "",
            response: ""
        };
        this.ChangeUsername = this.ChangeUsername.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.ChangePhoneNUM = this.ChangePhoneNUM.bind(this);
        this.CheckSignInValidation = this.CheckSignInValidation.bind(this);
        this.CheckSignUpValidation = this.CheckSignUpValidation.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.postUserInfo = this.postUserInfo.bind(this);
    }

    ChangeUsername(event){
        this.setState({
            Username: event.target.value
        });
        if(this.state.Username !== "")
        {
            this.setState({
                StateValid: 1
            })
        }
        this.props.judgeLogin(this.state.Username, this.state.StateValid);
    }
    ChangePassword(event){
        this.setState({
            Password: event.target.value
        })
    }
    ChangeEmail(event){
        this.setState({
            Email: event.target.value
        })
    }
    ChangePhoneNUM(event){
        this.setState({
            PhoneNUM: event.target.value
        })
    }

    CheckSignInValidation(){
        if(this.state.Username === ""){
            this.setState({
                HelpInfo: "* 用户名不能为空!"
            })
        }
        else if(this.state.Password === ""){
            this.setState({
                HelpInfo: "* 密码不能为空"
            })
        }
        else if(this.state.Password !== ""){
            let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
            if (!reg.test(this.state.Password)){
                this.setState({
                    HelpInfo: "* 密码包含数字和字母"
                })
            }
        }
    }

    CheckSignUpValidation(){
        if(this.state.Username === ""){
            this.setState({
                HelpInfo: "* 用户名不能为空!"
            })
        }
        else if(this.state.Password === ""){
            this.setState({
                HelpInfo: "* 密码不能为空"
            })
        }
        else if(this.state.Password !== ""){
            let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
            if (!reg.test(this.state.Password)){
                this.setState({
                    HelpInfo: "* 密码包含数字和字母"
                })
            }
        }
        else if(this.state.Email !== ""){
            let reg = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
            if(!reg.test(this.state.Email)){
                this.setState({
                    HelpInfo: "* 请输入正确邮箱格式"
                })
            }
        }
        else if(this.state.PhoneNUM !== "") {
            if(this.state.PhoneNUM.length() !== 11){
                this.setState({
                    HelpInfo: "* 手机号码需要11位"
                })
            }
        }
    }

    getUserInfo(){

        fetch('http://localhost:8080/UserManager/Login?' +
            'name=' + this.state.Username + '&' +
            'pwd=' + this.state.Password,
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(response=> {
                console.log('Request successful', response);
                return response.text()
                    .then(result => {
                        alert(result);
                        console.log("result: ", result);
                        if (result === "Login success!")
                        {
                            this.setState({
                                StateValid: 1
                            });
                            console.log(this.state.StateValid);
                        }
                    });
            })
    }

    postUserInfo(){

        fetch('http://localhost:8080/UserManager/Register?' +
            'name=' + this.state.Username + '&' +
            'pwd=' + this.state.Password + '&' +
            'e_mail=' + this.state.Email + '&' +
            'phoneNum=' + this.state.PhoneNUM,
            {
                method: 'POST',
                mode: 'cors',
            }
        )
            .then(function (response) {
                console.log('Request successful', response);
                return response.text();
            })
            .then(function (result) {
                alert(result);
                console.log("result: ", result);
            })
    }

    render(){
        const popoverBottom = (
            <Popover id="popover-positioned-bottom" title="Bingo!">
                <strong>Pay Attention: </strong>
                {this.state.HelpInfo}
            </Popover>
        );
        return(
            <div>
                <Form className="SignIn">
                    <FormGroup controlId="formValidationSuccess3" validationState="success">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" onChange={this.ChangeUsername}/>
                        <FormControl.Feedback>
                            <Glyphicon glyph="star" />
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="formValidationSuccess3" validationState="success">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" onChange={this.ChangePassword} />
                        <FormControl.Feedback>
                            <Glyphicon glyph="heart" />
                        </FormControl.Feedback>
                    </FormGroup>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                        <Button className="User"
                                bsStyle="primary"
                                onClick={this.CheckSignInValidation}>Sign In Validation</Button>
                    </OverlayTrigger>
                    <br/>
                    <br/>

                    <Button className="User"
                            bsStyle="primary"
                            onClick={this.getUserInfo}>User Sign In</Button>
                </Form>
                <br/>
                <Form componentClass="SignUp">
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" onChange={this.ChangeUsername}/>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formValidationWarning2" validationState="warning">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" onChange={this.ChangePassword}/>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formValidationWarning2" validationState="warning">
                        <ControlLabel>E-mail</ControlLabel>
                        <FormControl type="text" onChange={this.ChangeEmail}/>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl type="text" onChange={this.ChangePhoneNUM}/>
                        <FormControl.Feedback />
                    </FormGroup>

                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                        <Button className="User"
                                bsStyle="success"
                                onClick={this.CheckSignUpValidation}>Sign Up Validation</Button>
                    </OverlayTrigger>
                    <br/>
                    <br/>
                    <Button className="User"
                            bsStyle="success"
                            onClick={this.postUserInfo}>User Sign Up</Button>
                </Form>
            </div>
        )
    }
}
export default UserINFO;