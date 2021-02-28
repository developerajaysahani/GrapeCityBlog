import React, { Component } from 'react';
//import SignUp from '../../components/SignUp';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/footer';
import Home from '../../components/Home/Home';
class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      SignUp: false
    }
  }
  handleState = () => {
    this.setState({
      login: false,
      SignUp: true
    })
  }
  render() {
    return (
      <>
      <Header/>
      <div>
        {
          this.state.login &&
          <Home />
        }
      </div>
      <Footer/>
      </>
    );
  }
}

export default AuthPage;
