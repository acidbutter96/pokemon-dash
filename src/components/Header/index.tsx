import React, { useRef } from 'react'

import {
    Container,
    SearchBar,
    LoginButton
} from './styles'

import logoPokemon from '../../assets/images/navbar/logo-pokemon.svg'
import logoCompeti from '../../assets/images/navbar/logo.svg'

import { usePokemon } from '../../hooks/pokemon'

const Header: React.FC = () => {
    const {
        setSearch,
        setFirstSearch,
    } = usePokemon()

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <Container>
            <img src={logoPokemon} alt="Logo Pokémon" />
            <SearchBar
                ref={inputRef}
                placeholder="Search Pokémon"
                onChange={() => { setSearch(inputRef.current?.value || '') }}
                onClick={() => setFirstSearch()}
            />
            <LoginButton type="button">
                login
            </LoginButton>
            <img src={logoCompeti} alt="" />
        </Container>
    )
}

export default Header