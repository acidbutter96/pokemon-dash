export const colorbytype = (type: string): string => {
    switch (type) {
        case 'normal':
            return '#AAB09F'
        case 'fighting':
            return '#CB5F48'
        case 'flying':
            return '#7DA6DE'
        case 'poison':
            return '#B468B7'
        case 'ground':
            return '#CC9F4F'
        case 'rock':
            return '#B2A061'
        case 'bug':
            return '#94BC4A'
        case 'ghost':
            return '#846AB6'
        case 'steel':
            return '#89A1B0'
        case 'fire':
            return '#EA7A3C'
        case 'water':
            return '#539AE2'
        case 'grass':
            return '#71C558'
        case 'electric':
            return '#E5C531'
        case 'psychic':
            return '#E5709B'
        case 'ice':
            return '#70CBD4'
        case 'dragon':
            return '#6A7BAF'
        case 'dark':
            return '#736C75'
        case 'fairy':
            return '#E397D1'
        case 'unknow':
            return '#000'
        case 'shadow':
            return '#846AB6'
        default:
            return 'transparent'
    }
}