import React, { Component } from 'react'
import './style.css'
import {apikey, getAccountsByParams} from '../../api/apicalls'
import 'react-datepicker/dist/react-datepicker.css'
import { Input, Table, Card, CardBody } from 'reactstrap'
import DatePicker from 'react-datepicker'
import {
    Form,
    Spinner,
    FormGroup,
    FormLabel,
    Row,
    Col,
    Button,
    Modal,
    ModalBody,
    ModalFooter
} from 'react-bootstrap'
import Select from 'react-select'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import swal from 'sweetalert'


const moment = require('moment');

class Login extends Component {

  state = {  
    phoneNumber: "",
    password: "",
    loading: false,
    activePage: 1,
    total: 0,
    loadingData: false,
    tableData: [],
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;