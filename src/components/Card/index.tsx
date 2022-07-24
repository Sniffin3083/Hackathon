import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
width: 60vw;
display: flex;
flex-flow: column;
border-radius: 1em;
box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
overflow: hidden;
flex-shrink: 0;
`

const CardTop = styled.div<{bg: string}>`
width: 100%;
height: 4.5em;
display: flex;
align-items: flex-end;
background: url(${({bg}) => bg});
`

const CardBottom = styled.div<{bg: string}>`
padding: .4em;
width: 100%;
height: 4.5em;
display: flex;
justify-content: space-between;
align-items: flex-end;
flex-wrap: wrap;
background: url(${({bg}) => bg});
`

const CardTitle = styled.h3`
margin: 0;
width: 100%;
`

const CardCompany = styled.h3`
margin: 0;
padding: .2em;
width: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), #000);
color: #fff;
font-size: 1.5em;
`

const CardDetails = styled.div`
display: flex;
align-items: flex-end;
`

const CardCategory = styled.div`
width: 2em;
height: 2em;
background: #555;
border-radius: 2em;
`

const CardDistance = styled.p`
margin: 0;
font-size: .6em;
`

const CardValue = styled.p`
margin: 0;
`

type CardProps = {
    bg?: string;
    company?: string;
    title?: string;
    value?: string;
    distance?: string;
    category?: string;
}

const Card = ({bg, company, title, category, distance, value}: CardProps) => (
    <CardContainer>
        <CardTop bg={bg || 'https://placekitten.com/300/200'}>
            <CardCompany>{company || 'Company'}</CardCompany>
        </CardTop>
        <CardBottom bg={''}>
            <CardTitle>
                {title || 'Donuts'}
            </CardTitle>
            <CardDetails>
                <CardCategory />
                <CardDistance>{distance || '4.3'} km away</CardDistance>
            </CardDetails>
            <CardValue>{value || '20% OFF'}</CardValue>
        </CardBottom>
    </CardContainer>
)

export default Card;