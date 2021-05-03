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
        signOut,
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

    let location = window.location.pathname
    const isHidden = location === '/login' || location === '/signin'

    return (
        <Container>
            <a href='/'>
                <img src={logoPokemon} alt='Logo Pokémon' />
            </a>
            {
                isHidden ?
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
                                    onClick={() => signOut()}
                                >
                                    sair
                                </LoggedButton>
                            </LoggedContainer>
                        }
                    </>
                    )
            }
            <a
                href='https://competisistemas.com.br/'
                target='_blank'
                rel='noreferrer'
            >
                <img src={logoCompeti} alt='Competi - Sistemas e Automação Comercial' />
            </a>
        </Container>
    )
}

export default Header