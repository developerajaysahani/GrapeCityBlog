import React, {Component} from 'react';
import CompleteMap from '../CompleteMap/CompleteMap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class CustomTab extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    return (
      <>
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          <Tab>Map</Tab>
          <Tab>Graph</Tab>
        </TabList>
        <TabPanel><CompleteMap/></TabPanel>
        <TabPanel></TabPanel> 
      </Tabs>
      </>
    );
  }
}
export default CustomTab;