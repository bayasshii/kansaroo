import React, { Component } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tasks from './tasks/tasks.jsx'

const TabsWrap = styled.div`
`

const FooterWrap = styled.div`
  display: absolute;
  bottom: 0;
`

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenType: "tasks"
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  //クリックしたら親にステイと渡す
  handleClick(name) {
    this.setState(state => ({
      screenType: name
    }));
  }

  render() {
    return (
      <React.Fragment>
        <FooterWrap>
          <TabList onClick={this.handleClick}>
            <Tab>Tasks</Tab>
            <Tab>Snapshot</Tab>
          </TabList>
        </FooterWrap>
      </React.Fragment>
    );
  }
}

export default Footer;
