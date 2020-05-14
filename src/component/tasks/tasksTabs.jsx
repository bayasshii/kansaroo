import React, { Component } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TaskList from './taskList.jsx'

const TabsWrap = styled.div`
`

class TasksTabs extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>All tasks</Tab>
          <Tab>Future tasks</Tab>
          <Tab>Past tasks</Tab>
        </TabList>

        <TabPanel>
          <TaskList/>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default TasksTabs;
