import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardSeeAll from '../CardSeeAll';

const CardsContainer = styled.div`
  padding: 0 1em 1em;
  display: flex;
  gap: 2em;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

type CardsProps = {
  cardData: any[];
};

const Cards = ({ cardData }: CardsProps) => {
  return (
    <CardsContainer>
      {cardData.map(() => {
        return <Card />;
      })}
      <CardSeeAll />
    </CardsContainer>
  );
};

export default Cards;
