import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "reactstrap";
import PropTypes from "prop-types";

import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import logo from "../../assets/prayer.jpg";
import account from "../../assets/account.png";
//import Service from "./Service";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    // this.service = new Service();
  }

  state = {
    loading: false,
    unconfirmRequest: 0,
    userUnitId: localStorage.getItem("unitId"),
    userAccessRole: localStorage.getItem("accessRole"),
    unReadDataRevision: 0,
    unReadSuggestionForCompany: 0,
    userName: localStorage.getItem("username")
  };

  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/#/login";
  };

  handleProfile = () => {
    window.location.href = "/#/profile";
  };

  componentDidMount() {
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, height: 50, alt: "CoreUI Logo" }}
          minimized={{ src: logo, width: 30, height: 30, alt: "CoreUI Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={account} className="img-avatar" alt="profile" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account: {this.state.userName}</strong>
              </DropdownItem>
              <DropdownItem onClick={this.handleProfile}>
                <i className="fa fa-user"></i> Profile
              </DropdownItem>
              <DropdownItem onClick={this.handleLogout}>
                <i className="fa fa-lock"></i> Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
