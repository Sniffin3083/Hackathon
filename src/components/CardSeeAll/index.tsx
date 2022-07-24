import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight';

const StyledDiv = styled.div`
  width: 60vw;
  height: 9em;
  background: #d9d9d9;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

type Props = {};

const CardSeeAll = (props: Props) => {
  return (
    <StyledDiv>
      <h3>See All</h3>
      <ArrowRight width="2em" />
    </StyledDiv>
  );
};

export default CardSeeAll;
