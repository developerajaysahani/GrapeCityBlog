import React, { Component } from "react";
import "./Dashboard.css";
import {Row, Col, Container} from 'reactstrap';
class Dashboard extends Component {
  container = React.createRef();
  state = {
    open: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <Container ref={this.container}>
          <Row className="rectangle">
          <Col lg={4}>
          <button type="button" class="button" onClick={this.handleButtonClick}>
            ☰
          </button>
          <img src={'./Hill/logo/small.jpg'} className="logo"/>
          </Col>
          <Col lg={2}>
          <input type="text" placeholder="Search" className="form-control search"/>
          </Col>
          <Col className="ml-5">
          <a href='#' className="btn btntxt btntxtfirst" ><p className="balancetxt"> Balance</p> <button className="btn btn-primary withdraw"><p className="withdrawtxt">Withdraw</p></button></a>
          <a href='#' className="btn borderimg" ><img src={'./Hill/Plus/small.png'}/></a>
          <a href='#' className="btn borderimg" ><img src={'./Hill/bell/small.png'}/></a>
          <a href='#' className="btn borderimg" ><img src={'./Hill/questionmark/small.png'}/></a>
          <a href='#' className="btn btntxt"><img src={'./Hill/profile/mannu.jpg'} className="bitmap"/> Manohar</a>

          </Col>
          </Row>
          {this.state.open && (
            <div class="container">
            <div className="dropdown">
              <ul>
                <li>
                <img src={'./Hill/dashboard/small.png'} className=""/><span className="ml-4">Dashboard</span></li>
                <hr/>
                <li>
                <img src={'./Hill/reminder/small.png'} className=""/><span className="ml-4">Reminders</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/registration/small.png'} className=""/><span className="ml-4">Registration</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/casemanagement/small.png'} className=""/><span className="ml-4">Case Management</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/billing/small.png'} className=""/><span className="ml-4">Billing</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/triage/small.png'} className=""/><span className="ml-4">Triage</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/consultation/small.png'} className=""/><span className="ml-3">Consultation</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/laboratory/small.png'} className=""/><span className="ml-4">Laboratory</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/pharmacy/small.png'} className=""/><span className="ml-4">Pharmacy</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/department/small.png'} className=""/><span className="ml-4">Departments</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/finance/small.png'} className=""/><span className="ml-4">Finance</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/inventory/small.png'} className=""/><span className="ml-4">Inventory</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/admin/small.png'} className=""/><span className="ml-4">Admin</span></li>
                <hr className="line"/><li>
                <img src={'./Hill/report/small.png'} className=""/><span className="ml-4">Reports</span></li>
                <hr className="line"/>
                <li>
                <img src={'./Hill/api/small.png'} className=""/><span className="ml-4">API</span></li>
                
              </ul>
             </div> 
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default Dashboard;