import React, { useMemo, useRef, useState } from 'react'
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
    ErrorBar,
} from './styles'
import { useAuth } from '../../hooks/firebase/auth'

const LoginForm: React.FC = () => {
    const {
        logWGoogle,
        logWEmail,
        loginError,
    } = useAuth()

    const [submitError, setSubmitError] = useState<string>('')

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const passwordError = useMemo(() => {
        const error = loginError.split(' ')[0] === 'Senha'

        if (error && passwordRef.current) {
            passwordRef.current.value = ''
        }

        return error
    }, [loginError])

    const emailError = useMemo(() => {
        return loginError.split(' ')[0] === 'E-mail' || loginError.split(' ')[0] === 'Usuário'
    }, [loginError])

    const errorClassToggle = (error: boolean): string => (error ? 'error' : '')

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
                        ref={emailRef}
                        type='email'
                        name='email'
                        className={errorClassToggle(emailError)}
                        id='email-input'
                    />
                </div>
                <div>
                    <FormLabel>
                        Senha
                    </FormLabel>
                    <FormInput
                        ref={passwordRef}
                        type='password'
                        name='password'
                        className={errorClassToggle(passwordError)}
                        id='password-input'
                        autoComplete='on'
                    />
                </div>
                <div>
                    <ErrorBar>
                        {loginError}
                    </ErrorBar>
                    <ButtonContainer>
                        <LoginButton
                            type='button'
                            onClick={() => {
                                if (emailRef.current && passwordRef.current) {
                                    logWEmail(emailRef.current.value, passwordRef.current.value)
                                }
                            }}
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