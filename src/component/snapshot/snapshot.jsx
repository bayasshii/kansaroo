import React, { Component } from 'react'
import styled from 'styled-components'
import 'react-tabs/style/react-tabs.css';
import Farm from './farm.jsx'
import VesitableDetail from './vesitableDetail.jsx'

const SnapshotWrap = styled.div`

`
const SnapshotTabs = styled.div`
  display: flex;
`
const SnapshotTab = styled.div`

`

class Snapshot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farmType: "Uji",
      screen: "defalt"
    };
  }

  // state制御する用
  setStateFarmType(name) {
    this.setState({
      farmType: name
    });
  }

  // state制御する用
  setStateScreen(name) {
    this.setState({
      screen: name
    });
  }

  render() {
    // これも畑ごとにデータベースで処理して受け取る
    const craps = [
      {"photo": "photo", "name" : "Cabbage", "date" : "2020-01 ~ 2020-08"},
      {"photo": "photo", "name" : "Cauliflower", "date" : "2020-01 ~ 2020-08"},
      {"photo": "photo", "name" : "Radish", "date" : "2020-01 ~ 2020-08"},
      {"photo": "photo", "name" : "Zucchini", "date" : "2020-01 ~ 2020-08"}
    ]
    return (
      <React.Fragment>
        {
          this.state.screen === "defalt" ?
          <SnapshotWrap>
            <SnapshotTabs>
              <SnapshotTab onClick={()=>this.setStateFarmType("Uji")}>Uji Farm</SnapshotTab>
              <SnapshotTab onClick={()=>this.setStateFarmType("Ohara")}>Ohara Farm</SnapshotTab>
              <SnapshotTab onClick={()=>this.setStateFarmType("Arashiyama")}>Arahiyama Farm</SnapshotTab>
            </SnapshotTabs>
            {this.state.farmType === "Uji" && <Farm craps={craps} setStateScreen={(name)=>this.setStateScreen(name)}/>}
            {this.state.farmType === "Ohara" && <Farm craps={craps} setStateScreen={(name)=>this.setStateScreen(name)}/>}
            {this.state.farmType === "Arashiyama" && <Farm craps={craps} setStateScreen={(name)=>this.setStateScreen(name)}/>}
          </SnapshotWrap>
          :
          <VesitableDetail
            name={this.state.screen}
            setStateScreen={(name)=>this.setStateScreen(name)}
          />
        }
      </React.Fragment>
    );
  }
}

export default Snapshot;
