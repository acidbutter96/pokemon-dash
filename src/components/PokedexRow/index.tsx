import React, { useEffect, useState } from 'react'
import { IoMdEye, IoIosTrash } from 'react-icons/io'

import TypeBadge from '../TypeBadge'

import {
    TableRow,
    ImageContainer,
    ActionContainer,
    PreviewButton,
    DeleteButton,
} from './styles'

import { getPokemonInfo } from '../../providers/pokeapi'

import { IPokemon } from '../../hooks/pokemon/index'
import { useFireStore } from '../../hooks/firebase/firestore'

interface IPokedexRow {
    id: string;
    index: number;
}

const PokedexRow: React.FC<IPokedexRow> = ({ id, index }) => {
    const {
        deletePokemon,
    } = useFireStore()

    const [pokeInfo, setPokeInfo] = useState<IPokemon>({
        name: '',
        sprites: {
            front_default: ''
        },
        types: [
            {
                slot: '1',
                name: '',
                id: 1,
            }
        ]
    })
    const [executed, setExecutedStatus] = useState<boolean>(false)

    useEffect(() => {
        if (!executed) {
            getPokemonInfo(parseInt(id))
                .then(response => {
                    if (response) {
                        setPokeInfo(response[0])
                    }
                })
            setExecutedStatus(true)
        }
    }, [id])

    return (
        <TableRow>
            <td>
                <ImageContainer>
                    <img src={`${pokeInfo?.sprites.front_default || ''}`} alt={`${pokeInfo.name} || ''`} />
                </ImageContainer>
            </td>
            <td>{pokeInfo?.name || ''}</td>
            <td>
                <TypeBadge
                    name={`${pokeInfo?.types[0].name || ''}`}
                ></TypeBadge>
            </td>
            <td>
                <ActionContainer>
                    <PreviewButton
                        href={`/pokemon/attributes/${id}`}
                    >
                        <IoMdEye />
                    </PreviewButton>
                    <DeleteButton
                        onClick={() => deletePokemon(index)}
                    >
                        <IoIosTrash />
                    </DeleteButton>
                </ActionContainer>
            </td>
        </TableRow>
    )
}

export default PokedexRow