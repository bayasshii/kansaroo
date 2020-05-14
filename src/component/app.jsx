import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './header.jsx'
import Footer from './footer.jsx'
import Tasks from './tasks/tasks.jsx'

const HeaderWrap = styled.div`
  background-color: #D6EDF2;
  padding: 20px;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenType: "tasks"
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
      <React.Fragment>
        <Header
          title='Tasks'
        />
        <Tasks/>
        {this.state.screenType}
        <Footer
          setParentState={(name)=>this.setParentState(name)}
        />
      </React.Fragment>
    );
  }
}

export default App;
