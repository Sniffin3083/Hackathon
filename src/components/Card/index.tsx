import React from 'react';
import styled from 'styled-components';
import { HandThumbsUp } from '@styled-icons/bootstrap/HandThumbsUp';

const CardContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: column;
  border-radius: 1em;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  flex-shrink: 0;
`;

const CardTop = styled.div<{ bg: string }>`
  width: 100%;
  height: 4.5em;
  display: flex;
  align-items: flex-end;
  background: url(${({ bg }) => bg}) center / cover no-repeat;
`;

const CardBottom = styled.div`
  padding: 0.4em;
  width: 100%;
  height: 4.5em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`;

const CardTitle = styled.h3`
  margin: 0;
  width: 100%;
`;

const CardCompany = styled.h3`
  margin: 0;
  padding: 0.2em;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), #000);
  color: #fff;
  font-size: 1.5em;
`;

const CardDetails = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CardCategory = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #555;
  border-radius: 2em;

  img {
    width: 60%;
  }
`;

const CardDistance = styled.p`
  margin: 0;
  font-size: 0.6em;
`;

const CardValue = styled.p`
  margin: 0;
  font-size: 1.5em;
`;

type CardProps = {
  bg?: string;
  company?: string;
  title?: string;
  deal?: boolean;
  distance?: string;
  category?: number;
};

const Card = ({ bg, company, title, category, distance, deal }: CardProps) => (
  <CardContainer>
    <CardTop bg={bg || 'https://placekitten.com/300/200'}>
      <CardCompany>{company || 'Company'}</CardCompany>
    </CardTop>
    <CardBottom>
      <CardTitle>{title || 'Donuts'}</CardTitle>
      <CardDetails>
        <CardCategory>
          <img src={`/images/category${category}.png`} alt="cat" />
        </CardCategory>
        <CardDistance>{distance || '4.3'} km away</CardDistance>
      </CardDetails>
      <CardValue>
        {deal ? (
          '20% OFF'
        ) : (
          <>
            <HandThumbsUp width="24px" />
            80%
          </>
        )}
      </CardValue>
    </CardBottom>
  </CardContainer>
);

export default Card;
