import React, { Component } from 'react'
import styled from 'styled-components'
import Tasks from './tasks/tasks.jsx'

const TabsWrap = styled.div`
`

const FooterWrap = styled.div`
  display: absolute;
  bottom: 0;
`

const FooterTab = styled.div`
`
const FooterTabs = styled.div`
  display: flex;
`

class Footer extends Component {
  render() {
    // const setParentState = this.props.setParentState()
    //const .setParentState = props;
    return (
      <React.Fragment>
        <FooterWrap>
          <FooterTabs>
            <FooterTab onClick={()=>this.props.setParentState("tasks")}>Tasks</FooterTab>
            <FooterTab onClick={()=>this.props.setParentState("snapshot")}>Snapshot</FooterTab>
          </FooterTabs>
        </FooterWrap>
      </React.Fragment>
    );
  }
}

export default Footer;
