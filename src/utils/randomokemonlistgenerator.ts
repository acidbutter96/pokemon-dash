export interface IRandomPokemonIds {
    id: number;
}

export const randomPokemons = (): IRandomPokemonIds[] => {
    let items: IRandomPokemonIds[] = []

    for (let i = 1; i < 20; i++) {
        var rdnNumber = Math.floor(Math.random() * 200)
        if (!items.includes({ id: rdnNumber })) {
            items.push({ id: rdnNumber })
        }
    }

    return items
}