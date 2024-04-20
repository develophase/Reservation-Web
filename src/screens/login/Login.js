import React, { Component } from 'react'
import { Button, Card, CardBody, CardGroup, Spinner, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardImg, CardText } from 'reactstrap';
import { apikey, getAccountsByParams } from '../../api/apicalls'
import Logo from '../../assets/bg.png'
import axios from 'axios'

const moment = require('moment');

class Login extends Component {

  state = {  
    phoneNumber: "",
    password: "",
    messageErrorPassword: "",
    messageErrorUsername: "",
    passwordTextType: 'password',
    showEyeSlashPasswordIcon: true,
    loading: false,
    activePage: 1,
    total: 0,
    loadingData: false,
    tableData: [],
  }

  constructor(props) {
    super(props);
  }

  handlePhoneNumber = (e) => {

    let reg = /^(0|08|08[0-9]{1,12})$/;

    var values = e.target.value;

    console.log(reg.test(values));

    if (values !== "") {
      this.setState({
        messageErrorUsername: ''
      })
    }

    if (reg.test(values)) {
      this.setState({
        phoneNumber: values
      })
    }
    
    console.log(this.state.phoneNumber);
  }

  handlePassword = (e) => {
    var valuesPassword = e.target.value;
    if (valuesPassword !== "") {
      this.setState({
        messageErrorPassword: ''
      })
    }
    this.setState({
      password: e.target.value
    })
  }

  onHandleSubmit = e => {

    e.preventDefault();

    if (!this.validate()) {
      return;
    }

    this.setState({ loading: true })
    var username = this.state.phoneNumber;
    var password = this.state.password;
    if ((username !== null && username !== "") && (password !== null && password !== "")) {
      const header = {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'xc-token': apikey
      };

      const query = `(Phone,eq,${username})~and(Password,eq,${password})`;
      const url = getAccountsByParams(0, 1, query);

      axios({ method: 'get', url: url, headers: header }).then(data => {
        var token = data.data.list;
        this.setState({ loading: false })

        if (token.length == 0) {
          alert("User tidak ditemukan, mohon cek nomor dan password anda");
        }
        else {
          localStorage.setItem("Id", token[0].Id);
          localStorage.setItem("Name", token[0].Name);
          localStorage.setItem("Role", token[0].Role);
          localStorage.setItem("Username", token[0].Username);
          this.props.history.push('/')
        }

      }).catch(err => {

        this.setState({ loading: false })
        alert("username atau password tidak ditemukan")
      });
    }
  }

  validate = () => {
    let valid = true;
    var username = this.state.phoneNumber;
    var password = this.state.password;

    if (username === null || username === "") {
      this.setState({
        messageErrorUsername: 'Username Tidak Boleh Kosong'
      })
      valid = false
    }

    if (password === null || password === "") {
      this.setState({
        messageErrorPassword: 'Password tidak boleh kosong'
      })
      valid = false
    }

    return valid
  }

  showPassword = () => {
    if (this.state.passwordTextType === 'password') {
      this.setState({
        passwordTextType: 'text',
        showEyeSlashPasswordIcon: false
      })
    } else {
      this.setState({
        passwordTextType: 'password',
        showEyeSlashPasswordIcon: true
      })
    }
  }

  render() {

    var token = localStorage.getItem("token");

    if (token != null) {
      this.props.history.push('/')
    }

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onHandleSubmit}> 
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                        <Input type="text" required onChange={this.handlePhoneNumber} placeholder="Phone Number" autoComplete="Phone Number" />
                      </InputGroup>
                      <font color="red">{this.state.messageErrorUsername}</font>
                      <InputGroup className="mb-4">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                        <Input type={this.state.passwordTextType} className='border border-right-0' onChange={this.handlePassword} placeholder="Password" autoComplete="current-password" />
                          <Button className='bg-transparent border border-left-0 solid transparent' onClick={this.showPassword}>
                            <i className={`fa ${this.state.showEyeSlashPasswordIcon ? "fa-eye-slash" : "fa-eye" }`}></i>
                          </Button>
                      </InputGroup>
                      <font color="red">{this.state.messageErrorPassword}</font>
                      <Row>
                        <Col xs="6">
                          {this.state.loading ? (
                            <span><Spinner size="sm" color="primary" /> Logging in...</span>
                          ) : (
                            <Button type='submit' color="primary" className="px-4">Login</Button>
                          )}
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card body className="justify-content-center" style={{ width: '44%', backgroundColor: '#0563B1', }}>
                  <CardImg src={Logo} alt="Logo" style={{ padding: 'auto' }} />
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;