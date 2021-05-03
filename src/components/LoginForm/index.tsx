import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { CgPokemon } from 'react-icons/cg'

import {
    Container,
    FormItemContainer,
    FormLabel,
    FormInput,
    ButtonContainer,
    LoginButton,
    RecoveryContainer,
    RecoveryPassword,
    Title,
} from './styles'
import { useAuth } from '../../hooks/firebase/auth'

const LoginForm: React.FC = () => {

    const {
        logWGoogle,
    } = useAuth()

    return (
        <Container>
            <Title>
                POKÉMON DASH!
            </Title>
            <FormItemContainer>
                <div>
                    <FormLabel>
                        E-mail
                    </FormLabel>
                    <FormInput
                        type='email'
                        name='email'
                        id='email-input'
                    />
                </div>
                <div>
                    <FormLabel>
                        Senha
                    </FormLabel>
                    <FormInput
                        type='password'
                        name='password'
                        id='password-input'
                        autoComplete='on'
                    />
                </div>
                <div>
                    <ButtonContainer>
                        <LoginButton
                            type='button'
                        >
                            <CgPokemon />
                            <div className='content login'>
                                Entrar
                            </div>
                        </LoginButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <LoginButton
                            type='button'
                            onClick={logWGoogle}
                        >
                            <FcGoogle />
                            <div className='content'>
                                Entrar com o Google
                            </div>
                        </LoginButton>
                    </ButtonContainer>
                    <RecoveryContainer>
                        <span> Esqueceu sua senha?</span>
                        <RecoveryPassword
                            href='#'
                        >Recuperar</RecoveryPassword>
                    </RecoveryContainer>
                    <RecoveryContainer>
                        <span> Não possui cadastro?</span>
                        <RecoveryPassword
                            href='/signin'
                        >Cadastre-se</RecoveryPassword>
                    </RecoveryContainer>
                </div>
            </FormItemContainer>
        </Container>
    )
}

export default LoginForm