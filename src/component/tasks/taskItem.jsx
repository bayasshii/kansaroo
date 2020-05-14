import React, { Component } from 'react'
import styled from 'styled-components'

const TasksItemContents = styled.div`
  display: flex;
  border-bottom: 1px solid #BEBEBE;
`

const TasksItemCircle = styled.div`
`

const TasksItemCircleDone = styled.div`
  width: 15px;
  height: 15px;
  background-color: #2EBED0;
  border-radius: 50%;
`

const TasksItemCircleYet = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #2EBED0;
`

const TasksItemText = styled.div`
`

const TasksItemImg = styled.div`
  background: #666;
  width: 15px;
  height: 15px;
`

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTaskDone: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isTaskDone: !state.isTaskDone
    }));
  }

  render() {
    return (
      <React.Fragment>
        <TasksItemContents>
          <TasksItemCircle onClick={this.handleClick}>
            { this.state.isTaskDone ? <TasksItemCircleDone/>:<TasksItemCircleYet/>}
          </TasksItemCircle>
          <TasksItemText>{this.props.taskName}</TasksItemText>
          <TasksItemImg/>
        </TasksItemContents>
      </React.Fragment>
    );
  }
}

export default TaskItem;
