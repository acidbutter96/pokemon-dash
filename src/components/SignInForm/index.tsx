import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { CgPokemon } from 'react-icons/cg'

import {
    Container,
    FormItemContainer,
    FormLabel,
    FormInput,
    ButtonContainer,
    SigninButton,
    FormTextContainer,
    PrivacyPolicyContainer,
    Title,
} from './styles'

import { useAuth } from '../../hooks/firebase/auth'

import AnimatedPokeball, { callPokeball } from '../animatedPokeball'

const SignInForm: React.FC = () => {
    const {
        logWGoogle,
        signInWEmail,
    } = useAuth()

    const [policyToggle, setPolicyToggle] = useState<boolean>(false)

    const checkPolicyRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const callFirebaseSgnin = (): void => {
        if (emailRef.current?.value && passwordRef.current?.value) {
            signInWEmail(emailRef.current.value, passwordRef.current.value)
        } else {
            /* 'error' */
        }
    }

    const formValidator = useMemo((): boolean => {
        console.log([
            checkPolicyRef.current?.checked,
            emailRef.current?.value,
            passwordRef.current?.value
        ])
        if (checkPolicyRef.current?.checked && emailRef.current?.value && passwordRef.current?.value) {
            if (emailRef.current?.value !== '' && passwordRef.current?.value !== '') {
                return true
            }
            return false
        } else {
            return false
        }
    }, [
        checkPolicyRef.current?.checked,
        emailRef.current?.value,
        passwordRef.current?.value
    ])

    return (
        <Container>
            <AnimatedPokeball id='teste' />
            <Title>
                Registro
                </Title>
            <FormItemContainer>
                <ButtonContainer>
                    <SigninButton
                        type='button'
                        onClick={logWGoogle}
                    >
                        <FcGoogle />
                        <div className='content google'>
                            Registrar com o Google
                        </div>
                    </SigninButton>
                </ButtonContainer>
                <FormTextContainer>
                    ou
                </FormTextContainer>
                <div>
                    <FormLabel>
                        E-mail
                    </FormLabel>
                    <FormInput
                        ref={emailRef}
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
                        ref={passwordRef}
                        type='password'
                        name='password'
                        id='password-input'
                        autoComplete='on'
                    />
                </div>
                <PrivacyPolicyContainer>
                    <input
                        ref={checkPolicyRef}
                        type='checkbox'
                        name='privacitypolicy'
                        id='privacitypolicy'
                        onChange={() => {
                            setPolicyToggle(checkPolicyRef.current?.checked || false)
                        }}
                    />
                        Li e concordo com os
                        <a href='/privacy-police' target='_blank'>
                        termos de uso
                        </a>
                </PrivacyPolicyContainer>
                <div>
                    <ButtonContainer>
                        <SigninButton
                            type='button'
                            disabled={!formValidator}
                            onClick={() => callFirebaseSgnin()}
                        >
                            <CgPokemon />
                            <div className='content'>
                                Cadastrar
                            </div>
                        </SigninButton>
                    </ButtonContainer>
                </div>
            </FormItemContainer>
        </Container>
    )
}

export default SignInForm