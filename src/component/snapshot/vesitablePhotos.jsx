import React, { Component } from 'react'
import styled from 'styled-components'

const Photos  = styled.div`
  height: 30px;
  display: flex;
  flex-wrap: wrap;
`
const Photo  = styled.div`
  height: 90px;
  width: 90px;
  margin: 5px;
  background: #444;
`

class VesitablePhotos extends Component {
  render() {
    return (
      <React.Fragment>
        <Photos>
          <Photo/>
          <Photo/>
          <Photo/>
          <Photo/>
          <Photo/>
        </Photos>
      </React.Fragment>
    );
  }
}

export default VesitablePhotos;
