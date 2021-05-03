import React from 'react'

import {
    Container,
    FormItemContainer,
    FormLabel,
    FormInput,
    ButtonContainer,
    LoginButton,
} from './styles'

const LoginForm: React.FC = () => {
    return (
        <Container>
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
                            Login
                        </LoginButton>
                    </ButtonContainer>
                </div>
            </FormItemContainer>
        </Container>
    )
}

export default LoginForm