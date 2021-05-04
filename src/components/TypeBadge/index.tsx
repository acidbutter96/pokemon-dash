import React from 'react'

import {
    TypeBadgeContainer,
} from './styles'

import { capitalize } from '../../utils/capitalize'
import { colorbytype } from '../../utils/colorbytype'

interface IBadgeType {
    name: string;
}

const TypeBadge: React.FC<IBadgeType> = ({ name }) => {
    return (
        <TypeBadgeContainer typeColor={colorbytype(name.toLowerCase())}>
            {capitalize(name || '')}
        </TypeBadgeContainer>
    )
}

export default TypeBadge