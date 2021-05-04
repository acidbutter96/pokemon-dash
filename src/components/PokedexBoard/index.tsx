import React, { useRef } from 'react'

import {
    Container,
    UserName,
    TableContainer,
    TableHeader,
    TableBody,
} from './styles'

import { usePokemon } from '../../hooks/pokemon'
import PokedexRow from '../PokedexRow'

const PokedexBoard: React.FC = () => {
    const {

    } = usePokemon()

    return (
        <Container>
            <UserName>
                Pokédex Usuário
            </UserName>
            <TableContainer>
                <TableHeader>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Ação</th>
                    </tr>
                </TableHeader>
                <TableBody>
                    <PokedexRow />
                </TableBody>
            </TableContainer>
        </Container>
    )
}

export default PokedexBoard