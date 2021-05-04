import React, { useRef, useState } from 'react'

import PokedexRow from '../PokedexRow'
import {
    Container,
    UserName,
    TableContainer,
    TableHeader,
    TableBody,
} from './styles'

import { usePokemon } from '../../hooks/pokemon'
import { useFireStore } from '../../hooks/firebase/firestore'

interface IPokemon {
    pokemonId: string;
    date: string;
}

const PokedexBoard: React.FC = () => {
    const {

    } = usePokemon()

    const {
        getData,
    } = useFireStore()

    const [pokeArray, setPokeArray] = useState<IPokemon[]>()


    getData().then(element => setPokeArray(element.pokedex))

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
                    {
                        pokeArray ?
                            pokeArray.map(
                                element => <PokedexRow
                                    id={element.pokemonId}
                                    key={element.pokemonId}
                                />
                            ) : <div>
                                Você ainda não possui pokémons
                        </div>}
                </TableBody>
            </TableContainer>
        </Container>
    )
}

export default PokedexBoard