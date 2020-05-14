import React, { Component } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TaskList from './taskList.jsx'

const TabsWrap = styled.div`
`

class TasksTabs extends Component {
  render() {
    // ここはデータベースの方で処理してから日にちごとにデータ欲しいな。
    const tasks = [
      {
        "date": "04-05",
        "taskName" : "Harvest",
      },
      {
        "date": "04-05",
        "taskName" : "Check insects",
      },
      {
        "date": "04-05",
        "taskName" : "Check irrigation",
      },
    ]
    return (
      <Tabs>
        <TabList>
          <Tab>All tasks</Tab>
          <Tab>Future tasks</Tab>
          <Tab>Past tasks</Tab>
        </TabList>
        {/*ここでデータベースを引数に渡す*/}
        <TabPanel>
          <TaskList
            tasks={tasks}
          />
        </TabPanel>
        <TabPanel>
          <TaskList
            tasks={tasks}
          />
        </TabPanel>
        <TabPanel>
          <TaskList
            tasks={tasks}
          />
        </TabPanel>
      </Tabs>
    );
  }
}

export default TasksTabs;
