import React, { Component } from 'react'
import styled from 'styled-components'
import TasksTabs from './tasksTabs.jsx'

class TaskItem extends Component {
  render() {
    return (
      <React.Fragment>
        <TasksTabs/>
      </React.Fragment>
    );
  }
}

export default TaskItem;
