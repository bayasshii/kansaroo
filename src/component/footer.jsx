import React, { Component } from 'react'
import styled from 'styled-components'

const FooterWrap = styled.div`
  position: absolute;
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
            <FooterTab onClick={()=>this.props.setParentState("Tasks")}>Tasks</FooterTab>
            <FooterTab onClick={()=>this.props.setParentState("Snapshot")}>Snapshot</FooterTab>
          </FooterTabs>
        </FooterWrap>
      </React.Fragment>
    );
  }
}

export default Footer;
