import React, { useEffect, useState } from 'react'
import Carousel, { RenderArrowProps, RenderPaginationProps } from 'react-elastic-carousel'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

import RandomPokemonCard from '../RandomPokemonCard'

import {
    Container,
    Button,
    PaginationBtn,
    PageContainer,
} from './styles'



const RandomPanel: React.FC = () => {
    const [pokeList, setPokeList] = useState<JSX.Element[]>([])

    useEffect(() => {
        let list: JSX.Element[] = []
        let rdn: number[] = []

        while (rdn.length < 15) {
            const rdnNum = Math.floor(Math.random() * 400)
            if (!rdn.includes(rdnNum)) {
                rdn.push(rdnNum)
            }
        }

        rdn.forEach(element => {
            list.push(
                <RandomPokemonCard
                    id={element}
                    typeName={'auto'}
                    key={element}
                />)
        })

        setPokeList(list)
    }, [])


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
                                key={page}
                            >
                            </PaginationBtn>)
                    })
                }
            </PageContainer>
        )
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1, pagination: false },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 5, itemsToScroll: 5 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ];

    return (
        <Container>
            <Carousel
                isRTL={false}
                breakPoints={breakPoints}
                renderArrow={ArrowButton}
                renderPagination={PaginationButton}
            >
                {pokeList ? pokeList : <div> ok</div>}
            </Carousel>
        </Container>
    )
}

export default RandomPanel