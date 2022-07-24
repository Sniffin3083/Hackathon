import React from 'react';
import styled from 'styled-components';
import img from '../images';

const CategoryContainer = styled.div<{ active?: boolean }>`
  display: flex;
  flex-flow: column;
  ${({ active }) => (!active ? 'transform: scale(75%);' : '')}
  transition: .3s;
`;

const CategoryThumb = styled.div`
  width: 4em;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  border-radius: 1em;

  img {
    width: 75%;
  }
`;

const CategoryName = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
`;

type CategoryProps = {
  image: string;
  name: string;
  active?: boolean;
  onClick: () => void;
};

const Category = ({ active, image, name, onClick }: CategoryProps) => (
  <CategoryContainer active={active} onClick={onClick}>
    <CategoryThumb>
      {/* <img src={img[image]} alt="cat" /> */}
      <img src={`/images/${image}.png`} alt="cat" />
    </CategoryThumb>
    <CategoryName>{name || 'Category'}</CategoryName>
  </CategoryContainer>
);

export default Category;
