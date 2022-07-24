import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #272;
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: -10;
`

const MapElement = () => {
    return (
        <MapContainer>this is a map</MapContainer>
    )
};

export default MapElement;