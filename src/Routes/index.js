import React, { Component } from 'react';
import AuthPage from '../Routes/Auth';
import CompleteMap from '../components/CompleteMap/CompleteMap';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Header from './components/common/Header/Header';
//import Contact from './components/Contact/Contact';
//import Home from '../components/Home/Home';
// import Footer from './components/common/Footer/footer';
import PageNotFound from '../components/PageNotFound/PageNotFound';
// import CustomTab from './components/Tabs/Tabs';
import Login from '../components/Login/Login'
import Landing from '../Routes/Landing';

class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          {/* <Header /> */}
          {/* <CustomTab /> */}
          <Switch>
            <Route exact path="/" component={AuthPage} />
            <Route path="/landing" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/map" component={CompleteMap} />
            {/* <Route path="/contact" component={Contact} /> */}
            <Route path="*" component={PageNotFound} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
