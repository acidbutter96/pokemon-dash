import React, { useState } from 'react'
import Carousel, { RenderArrowProps, RenderPaginationProps } from 'react-elastic-carousel'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

import RandomPokemonCard from '../RandomPokemonCard'

import { usePokemon } from '../../hooks/pokemon'

import {
    Container,
    Button,
    PaginationBtn,
    PageContainer,
} from './styles'

import { randomPokemons, IRandomPokemonIds } from '../../utils/randomokemonlistgenerator'

const RandomPanel: React.FC = () => {
    const {
        pageCounter,
    } = usePokemon()

    const [randomPokemonList, setRandom] = useState<IRandomPokemonIds[]>(randomPokemons())

    const ArrowButton: React.FC<RenderArrowProps> = ({ type, onClick, isEdge }) => {
        const btnContent = type === 'PREV' ? <MdNavigateBefore /> : <MdNavigateNext />
        return (
            <Button
                type='button'
                onClick={onClick}
                disabled={isEdge}
            >
                {btnContent}
            </Button>
        )
    }

    const PaginationButton = ({ pages, activePage, onClick }: RenderPaginationProps) => {
        return (
            <PageContainer>
                {
                    pages.map(page => {
                        const isActive = page === activePage

                        return (
                            <PaginationBtn
                                type='button'
                                onClick={() => onClick(`${page}`)}
                                disabled={isActive}
                            >
                            </PaginationBtn>)
                    })
                }
            </PageContainer>
        )
    }

    return (
        <Container>
            <Carousel
                isRTL={false}
                itemsToShow={5}
                renderArrow={ArrowButton}
                renderPagination={PaginationButton}
            >
                {randomPokemonList.map(element => {
                    return (<RandomPokemonCard
                        id={element.id}
                        typeName={'auto'}
                        key={element.id}
                    />)
                })}
            </Carousel>
        </Container>
    )
}

export default RandomPanel