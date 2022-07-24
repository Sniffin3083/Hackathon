import React from 'react'
import styled from 'styled-components'
import Card from '../Card'

const CardsContainer = styled.div`
padding: 0 1em 1em;
display: flex;
gap: 2em;
overflow-x: scroll;
`

type CardsProps = {
    cardData: any[]
}

const Cards = ({cardData}: CardsProps) => {
    return (
        <CardsContainer>
            {
                [...new Array(5)].map(() => {
                    return <Card />
                })
            }
        </CardsContainer>
    )    
}

export default Cards;