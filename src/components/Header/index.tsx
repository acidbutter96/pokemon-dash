import {
    Container,
    SearchBar,
    LoginButton
} from './styles'

import logoPokemon from '../../assets/images/navbar/logo-pokemon.svg';
import logoCompeti from '../../assets/images/navbar/logo.svg';

const Header = () => {
    return (
        <Container>
            <img src={logoPokemon} alt="Logo Pokémon" />
            <SearchBar value="Search Pokémon" />
            <LoginButton type="button">
                login
            </LoginButton>
            <img src={logoCompeti} alt="" />
        </Container>
    )
}

export default Header;