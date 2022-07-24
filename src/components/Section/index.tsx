import React from "react";
import styled from "styled-components";
import {ArrowRight} from '@styled-icons/bootstrap/ArrowRight'

const SectionContainer = styled.div`
margin-bottom: 1em;
width: 100%;
background: #fff;
box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
`

const SectionHeader = styled.div`
margin-bottom: 1em;
padding: .2em .3em;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
`

const SectionTitle = styled.h2`
margin: 0;
`

const Arrow = styled(ArrowRight)`
width: 2em;
`

type SectionProps = {
    title: string;
}

const Section = ({children, title}: React.PropsWithChildren<SectionProps>) => {
    return (
        <SectionContainer>
            <SectionHeader>
                <SectionTitle>{title}</SectionTitle>
                <Arrow />
            </SectionHeader>
            {children}
        </SectionContainer>
    )
}

export default Section;