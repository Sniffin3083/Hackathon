import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardSeeAll from '../CardSeeAll';
import items_ from '../../items.json';

type Item = {
  id: number;
  name: string;
  title: string;
  distance: string;
  category: number;
};

const items = items_ as Item[];

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
  deal?: boolean;
};

const Cards = ({ cardData, deal }: CardsProps) => {
  return (
    <CardsContainer>
      {cardData.map((id) => {
        const item = items.find((el) => el.id === id);
        return (
          <Card
            bg={`/images/item${item?.id}.png`}
            company={item?.name}
            title={item?.title}
            category={item?.category}
            distance={item?.distance}
            deal={deal}
          />
        );
      })}
      <CardSeeAll />
    </CardsContainer>
  );
};

export default Cards;
