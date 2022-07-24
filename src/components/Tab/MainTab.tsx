import React from 'react';
import Cards from '../Cards';
import Categories from '../Categories';
import SearchBar from '../searchBar';
import Section from '../Section';
import { Cog } from './Cog';
import { Header } from './Header';
import { PullBar } from './PullBar';
import { TabContainer } from './TabContainer';
import { TabTitle } from './TabTitle';
import { TitleContainer } from './TitleContainer';

const MainTab = () => (
  <TabContainer>
    <Header>
      <PullBar />
      <SearchBar />
      <TitleContainer>
        <TabTitle>Explore</TabTitle>
        <Cog />
      </TitleContainer>
      <Categories />
    </Header>
    <Section title="Deals Nearby">
      <Cards cardData={[0, 1]} />
    </Section>
    <Section title="Most Popular">
      <Cards cardData={[0, 2]} />
    </Section>
    <Section title="Suggested For You">
      <Cards cardData={[0, 4]} />
    </Section>
  </TabContainer>
);

export default MainTab;
