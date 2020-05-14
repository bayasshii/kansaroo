import React, { Component } from 'react'
import styled from 'styled-components'
import 'react-tabs/style/react-tabs.css';

const AnaWrap = styled.div`
  border-bottom: 1px solid #BEBEBE;
  display: flex;
  padding: 10px
`
const AnaItem = styled.div`
`

const CrapsWrap = styled.div`
`
const CrapsItem = styled.div`
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
            <CrapsItem onClick={()=>this.props.setStateScreen(crap.name)}>
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
