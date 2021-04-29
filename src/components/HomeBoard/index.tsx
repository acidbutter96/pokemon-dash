import React from 'react'
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

import charmander from '../../assets/images/temp/charmander.svg'

const HomeBoard: React.FC = ({ children }) => {
    const kindPokemon = [
        {
            id: 1,
            name: 'Fire'
        },
        {
            id: 2,
            name: 'Water'
        },
        {
            id: 3,
            name: 'Earth'
        },
        {
            id: 4,
            name: 'Air'
        },
    ]

    const pokemons = [


    ]

    return (
        <Container>
            <Filters>
                <Selector name="filter" id="filterselect">
                    <option value="" selected disabled>
                        Select one filter
                    </option>
                    {kindPokemon.map(element => <option value={element.id} key={element.id}>{element.name}</option>)}
                </Selector>
            </Filters>
            <PokemonContainer>
                <PokemonCard
                    id="1"
                    pokeimage={charmander}
                    pokename="Chamander"
                    pokenumber={4}
                    type="Fire"
                />
                <PokemonCard
                    id="1"
                    pokeimage={charmander}
                    pokename="Chamander"
                    pokenumber={4}
                    type="Fire"
                />
                <PokemonCard
                    id="1"
                    pokeimage={charmander}
                    pokename="Chamander"
                    pokenumber={4}
                    type="Fire"
                />
                <PokemonCard
                    id="1"
                    pokeimage={charmander}
                    pokename="Chamander"
                    pokenumber={4}
                    type="Fire"
                />
                <PokemonCard
                    id="1"
                    pokeimage={charmander}
                    pokename="Chamander"
                    pokenumber={4}
                    type="Fire"
                />
                <PokemonCard
                    id="1"
                    pokeimage={charmander}
                    pokename="Chamander"
                    pokenumber={4}
                    type="Fire"
                />
                <PaginatorContainer>
                    <ReactPaginate
                        pageCount={10}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={0}
                        activeClassName={'active'}
                        previousLabel={<MdKeyboardArrowLeft />}
                        nextLabel={<MdKeyboardArrowRight />}
                        pageClassName={'pageItem'}
                        containerClassName={'paginatorcontainer'}
                        nextClassName={'actionbutton'}
                        previousClassName={'actionbutton'}

                    //onPageChange={(v) => { console.log(v) }}
                    />
                </PaginatorContainer>
            </PokemonContainer>
        </Container>
    )
}

export default HomeBoard