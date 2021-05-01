import React, { useRef } from 'react'
import PokemonCard from '../PokemonCard'
import ReactPaginate from 'react-paginate'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, } from 'react-icons/md'

import {
    Container,
    Filters,
    Selector,
    PokemonContainer,
    PaginatorContainer,
} from './styles'

import { usePokemon } from '../../hooks/pokemon'

const HomeBoard: React.FC = () => {
    const {
        setType,
        typeArray,
        pokemonArray,
        setPage,
        pageCounter,
        pokemonArrayType,
        searchIsEmpty,
        returnedData,
    } = usePokemon()

    const selectRef = useRef<HTMLSelectElement>(null)

    return (
        <Container>
            <Filters>
                <Selector
                    ref={selectRef}
                    name='filter'
                    defaultValue={'disabled'}
                    id='filterselect'
                    onChange={(e) => {
                        setType(parseInt(selectRef.current?.value || '0'))
                    }}
                >
                    <option value='disabled' disabled>
                        Select one filter
                    </option>
                    {typeArray.map(element => <option value={element.id} key={element.id}>{element.name}</option>)}
                </Selector>
            </Filters>
            <PokemonContainer>
                {
                    searchIsEmpty ? (
                        pokemonArrayType.length === 0 ? pokemonArray.map((element) => (
                            <PokemonCard
                                key={element.id}
                                id={element.id}
                                typeName={'auto'}
                            />
                        )) :

                            pokemonArrayType.map((element) => (
                                <PokemonCard
                                    key={element.id}
                                    id={element.id}
                                    typeName={element.type.name}
                                />
                            )
                            ))
                        :
                        returnedData.map((element) => (
                            <PokemonCard
                                key={element.id}
                                id={element.id}
                                typeName={'auto'}
                            />
                        )
                        )

                }
                <PaginatorContainer>
                    <ReactPaginate
                        pageCount={pageCounter / 6}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        activeClassName={'active'}
                        previousLabel={<MdKeyboardArrowLeft />}
                        nextLabel={<MdKeyboardArrowRight />}
                        pageClassName={'pageItem'}
                        containerClassName={'paginatorcontainer'}
                        nextClassName={'actionbutton'}
                        previousClassName={'actionbutton'}
                        onPageChange={(v) => { setPage(v.selected) }}
                    />
                </PaginatorContainer>
            </PokemonContainer>
        </Container>
    )
}

export default HomeBoard