import React, { useRef, useState } from 'react'

import {
    Container,
    SearchBar,
    LoginButton,
    LoggedContainer,
    DisplayName,
    LoggedButton,

} from './styles'

import logoPokemon from '../../assets/images/navbar/logo-pokemon.svg'
import logoCompeti from '../../assets/images/navbar/logo.svg'

import { usePokemon } from '../../hooks/pokemon'
import { useAuth } from '../../hooks/firebase/auth'

const Header: React.FC = () => {
    const {
        setSearch,
        setFirstSearch,
    } = usePokemon()

    const {
        isLogged,
    } = useAuth()

    const [focusBar, setFocusBar] = useState<boolean>(false)

    const hiddenBar = (focus: boolean = false) => {
        if (isLogged && focus) {
            setFocusBar(true)
        } else if (!focus) {
            setFocusBar(false)
        }
    }

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <Container>
            <img src={logoPokemon} alt='Logo Pokémon' />
            {
                window.location.href.split('/')[3] === 'login' ?
                    <div></div> :
                    (<><SearchBar
                        ref={inputRef}
                        placeholder='Search Pokémon'
                        onChange={() => { setSearch(inputRef.current?.value || '') }}
                        onClick={() => setFirstSearch()}
                        onFocus={() => hiddenBar(true)}
                        onBlur={() => hiddenBar()}
                        loggedBar={isLogged || false}
                    />
                        {!isLogged ?
                            <LoginButton
                                type='button'
                                href='/login'
                            >
                                login
                            </LoginButton> :
                            <LoggedContainer
                                displayed={focusBar}
                            >
                                <DisplayName>
                                    {localStorage.getItem('@pokemon-dash:displayName')}
                                </DisplayName>
                                <LoggedButton
                                    href='/'
                                >
                                    pokedash
                                </LoggedButton>
                                <LoggedButton
                                    href='/pokedex'
                                >
                                    pokedex
                                </LoggedButton>
                                <LoggedButton
                                    onClick={() => console.log('sair')}
                                >
                                    sair
                                </LoggedButton>
                            </LoggedContainer>
                        }
                    </>
                    )
            }
            <img src={logoCompeti} alt='' />
        </Container>
    )
}

export default Header