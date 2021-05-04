import React, { useEffect, useRef, useState } from 'react'

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

    const [pokeArray, setPokeArray] = useState<IPokemon[]>([])


    useEffect(() => {
        getData()
            .then(element => setPokeArray(element.pokedex))
    }, [])

    var key = -1

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
                        pokeArray.length !== 0 ?
                            pokeArray.map(
                                element => {
                                    key += 1
                                    return <PokedexRow
                                        id={element.pokemonId}
                                        index={key}
                                        key={key}
                                    />
                                }
                            ) : <div>
                                Você ainda não possui pokémons
                        </div>}
                </TableBody>
            </TableContainer>
        </Container>
    )
}

export default PokedexBoard