import React, { useEffect, useRef, useState } from 'react'
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
    } = useAuth()

    const [policyToggle, setPolicyToggle] = useState<boolean>(false)

    const checkPolicyRef = useRef<HTMLInputElement>(null)

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
                            disabled={!policyToggle}
                            onClick={() => callPokeball()}
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