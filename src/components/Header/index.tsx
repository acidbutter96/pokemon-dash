import React from 'react';

import {
    Container,
    SearchBar,
    LoginButton
} from './styles'

import logoPokemon from '../../assets/images/navbar/logo-pokemon.svg';
import logoCompeti from '../../assets/images/navbar/logo.svg';

const Header: React.FC = () => {
    return (
        <Container>
            <img src={logoPokemon} alt="Logo Pokémon" />
            <SearchBar placeholder="Search Pokémon" />
            <LoginButton type="button">
                login
            </LoginButton>
            <img src={logoCompeti} alt="" />
        </Container>
    )
}

export default Header;