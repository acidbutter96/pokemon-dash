export const idFromTypesUrl = (url: string): string => url.split('/')[url.split('/').length - 2]

export const idFromPokemonUrl = (url: string): string => url.split('?')[0].split('/')[url.split('?')[0].split('/').length - 2]