import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderWrap = styled.div`
  background-color: #D6EDF2;
  padding: 20px;
`

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderWrap>
          {this.props.title}
        </HeaderWrap>
      </React.Fragment>
    );
  }
}

export default Header;
