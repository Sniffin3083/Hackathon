import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import MapElement from './components/MapElement';
import styled from 'styled-components';

const AppContainer = styled.div`
position: relative;
`

function App() {
  return (
    <AppContainer>
      <MapElement />
      <MainContainer />
    </AppContainer>
  );
}

export default App;
