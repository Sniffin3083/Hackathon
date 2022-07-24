import React from "react";
import styled from "styled-components";
import SearchBar from "../searchBar";
import Section from "../Section";
import Card from '../Card'
import Cards from "../Cards";
import Categories from "../Categories";
import { TabContainer } from "./TabContainer";
import { Header } from "./Header";
import { PullBar } from "./PullBar";
import { TitleContainer } from "./TitleContainer";
import { TabTitle } from "./TabTitle";
import { Cog } from "./Cog";
import MainTab from "./MainTab";
import { Route, Routes } from "react-router-dom";


const Tab = () => {
    return (
        <Routes>
            <Route path="/" element={<MainTab />} />
            <Route path="/category/:id" element={null} />
        </Routes>
    )
}

export default Tab;