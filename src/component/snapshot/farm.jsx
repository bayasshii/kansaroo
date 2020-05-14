import React, { Component } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SnapshotWrap = styled.div`

`

const AnaWrap = styled.div`
  border-bottom: 1px solid #BEBEBE;
  display: flex;
  padding: 10px
`
const AnaItem = styled.div`
`

const CrapsWrap = styled.div`
`
const CrapsItem = styled.a`
  display: flex;
  border-bottom: 1px solid #BEBEBE;
`
const CrapsItemImg = styled.div`
  height: 70px;
  width: 70px;
  background: #444;
`
const CrapsItemText = styled.div`
`
const CrapsItemTextTitle = styled.div`
`
const CrapsItemTextDest = styled.div`
`

class Farm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farmType: "Uji"
    };
  }

  // state制御する用
  setStateFarmType(name) {
    this.setState({
      farmType: name
    });
  }

  render() {
    const craps = this.props.craps
    return (
      <React.Fragment>
        <AnaWrap>
          <AnaItem>17.0℃</AnaItem>
          <AnaItem>39.0%</AnaItem>
          <AnaItem>Good</AnaItem>
        </AnaWrap>

        <CrapsWrap>
          {craps.map((crap) => (
            <CrapsItem href="./cabbage">
              <CrapsItemImg/>
              <CrapsItemText>
                <CrapsItemTextTitle>{crap.name}</CrapsItemTextTitle>
                <CrapsItemTextDest>{crap.date}</CrapsItemTextDest>
              </CrapsItemText>
            </CrapsItem>
          ))}
        </CrapsWrap>
      </React.Fragment>
    );
  }
}

export default Farm;
