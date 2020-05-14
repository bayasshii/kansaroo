import React, { Component } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import VesitablePhotos from './vesitablePhotos.jsx'

const BackBtn  = styled.div`
  height: 30px;
  background-color: red;
`
const PanoramaPhoto = styled.div`
  height: 300px;
  background-color: #444;
`
const VesitableName = styled.div`
`

class VesitableDetail extends Component {
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

  render() {
    return (
      <React.Fragment>
        <BackBtn onClick={()=>this.props.setStateScreen("defalt")}/>
        <PanoramaPhoto/>
        <VesitableName>{this.props.name}</VesitableName>
        <Tabs>
          <TabList>
            <Tab>Photos</Tab>
            <Tab>Tasks</Tab>
            <Tab>Analytics</Tab>
          </TabList>
          {/*ここでデータベースを引数に渡す*/}
          <TabPanel>
            <VesitablePhotos/>
          </TabPanel>
          <TabPanel>
            いいいいいいいいいい
          </TabPanel>
          <TabPanel>
            Photo
          </TabPanel>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default VesitableDetail;
