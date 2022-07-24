import React from 'react';
import styled from 'styled-components';
import SearchBar from '../searchBar';
import Tab from '../Tab';

const Container = styled.div`
  height: 100vh;
  background: #f5f5f5;
  border-radius: 1em;
  position: absolute;
  left: 0;
  right: 0;
  top: 80vh;
  transition: 0.3s top;
`;

const MainContainer = () => (
  <Container>
    <Tab />
  </Container>
);

export default MainContainer;
