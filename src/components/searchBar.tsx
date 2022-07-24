import React from "react";
import styled from 'styled-components';
import {SearchOutline as _Search} from '@styled-icons/evaicons-outline/SearchOutline'

const SearchContainer = styled.div`
padding: .3em;
width: 100%;
background: #fff;
border: 2px solid #aaa;
border-radius: 10px;
display: flex;
`

const SearchOutline = styled(_Search)`
width: 1.5em;
height: 1.5em;
color: #aaa;
`

const SearchInput = styled.input`
border: none;
flex: 1;
background: transparent;
outline: 0;
`


const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchOutline />
            <SearchInput placeholder="Search" />
            
        </SearchContainer>
    )
}

export default SearchBar;