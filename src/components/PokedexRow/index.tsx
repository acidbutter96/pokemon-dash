import React from 'react'
import { IoMdEye, IoIosTrash } from 'react-icons/io'

import TypeBadge from '../TypeBadge'

import {
    TableRow,
    ImageContainer,
    ActionContainer,
    PreviewButton,
    DeleteButton,
} from './styles'

const PokedexRow: React.FC = () => {
    return (
        <TableRow>
            <td>
                <ImageContainer>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' alt='' />
                </ImageContainer>
            </td>
            <td>Charmander</td>
            <td>
                <TypeBadge
                    name='fire'
                ></TypeBadge>
            </td>
            <td>
                <ActionContainer>
                    <PreviewButton
                    >
                        <IoMdEye />
                    </PreviewButton>
                    <DeleteButton>
                        <IoIosTrash />
                    </DeleteButton>
                </ActionContainer>
            </td>
        </TableRow>
    )
}

export default PokedexRow