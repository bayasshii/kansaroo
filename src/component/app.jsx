import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './header.jsx'
import Footer from './footer.jsx'
import Tasks from './tasks/tasks.jsx'
import Snapshot from './snapshot/snapshot.jsx'

const Wrap = styled.div`
  height: 100vh;
  position: relative;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenType: "Tasks"
    };
  }

  // footerでstate制御する用
  setParentState(name) {
    this.setState({
      screenType: name
    });
  }

  render() {
    return (
      <Wrap>
        <Header
          title={this.state.screenType}
        />
        {this.state.screenType === "Tasks" && <Tasks/>}
        {this.state.screenType === "Snapshot" && <Snapshot/>}
        <Footer
          setParentState={(name)=>this.setParentState(name)}
        />
      </Wrap>
    );
  }
}

export default App;
