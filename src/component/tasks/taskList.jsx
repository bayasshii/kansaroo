import React, { Component } from 'react'
import styled from 'styled-components'
import TaskItem from './taskItem.jsx'

const TasksWrap = styled.div`
`

const TasksItem = styled.div`
`

const TasksItemHeader = styled.div`
  background-color: #F4F4F4;
  padding: 7px;
`

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks
    return (
      <React.Fragment>
        <TasksWrap>
          {tasks.map((task) => (
            <TasksItem>
              <TasksItemHeader>unknown</TasksItemHeader>
              <TaskItem
                taskName={task.taskName}
              />
              <TaskItem
                taskName={task.taskName}
              />
            </TasksItem>
          ))}
        </TasksWrap>
      </React.Fragment>
    );
  }
}

export default TaskList;
