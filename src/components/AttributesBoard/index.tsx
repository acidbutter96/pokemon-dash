import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { IoMdAdd } from 'react-icons/io'

import {
    Container,
    NameBar,
    PokemonAttributeContainer,
    ChartContainer,
    AttributesContainer,
    PokemonImage,
    AddButton,
} from './styles'

import { IPokemon, usePokemon } from '../../hooks/pokemon'
import { getPokemonInfo, getPokemonStats } from '../../providers/pokeapi'
import { capitalize } from '../../utils/capitalize'
import { useFireStore } from '../../hooks/firebase/firestore'

interface IAttributesBoard {
    id: string;
}

const AttributesBoard: React.FC<IAttributesBoard> = ({ id }) => {
    const {
        savePokemon,
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

    const [dataset, setDataSet] = useState<Array<number>>([0, 0, 0, 0, 0, 0])
    const [categoriesset, setCategoriesSet] = useState<Array<string>>(['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'])



    useEffect(() => {
        getPokemonStats(parseInt(id))
            .then(element => {
                let data: Array<number> = []
                let categories: Array<string> = []
                element.forEach(value => {
                    data.push(value.base_stat)
                    categories.push(value.stat.name)
                })
                setDataSet(data)
                setCategoriesSet(categories)
            })
    }, [])

    const data = {
        options: {
            chart: {
                id: 'attributes',
            },
            xaxis: {
                categories: categoriesset,
                range: 100,
            },
            fill: {
                colors: ['#fccf00'],
                opacity: 0.8,
            },
            stroke: {
                show: true,
                width: 5,
                colors: ['#2468b1'],
            },
            plotOptions: {
                radar: {
                    size: 150,
                    polygons: {
                        strokeColor: ['#fff'],
                        connectorColors: '#fff',
                        grid: {
                            colors: ['#000', '#000', '#000',]
                        }
                    }
                },
            }
        },
        series: [{
            name: 'Pokémon',
            data: dataset
        }],
    }

    return (
        <Container>

            <PokemonAttributeContainer>
                <ChartContainer>
                    <Chart
                        options={data.options}
                        series={data.series}
                        type='radar'
                        width={500}
                        height={400} />
                </ChartContainer>
                <AttributesContainer>
                    <div>
                        <PokemonImage>
                            <img src={`${pokeInfo.sprites.front_default}`} alt={`${pokeInfo.name}`} />
                        </PokemonImage>
                    </div>
                    <div>
                        <NameBar>
                            <h1>
                                {pokeInfo.name}
                            </h1>
                        </NameBar>
                    </div>
                    <div>
                        <AddButton
                            onClick={() => savePokemon(id)}
                        >
                            <IoMdAdd />
                        </AddButton>
                        Adicionar a Pokédex
                    </div>
                </AttributesContainer>
            </PokemonAttributeContainer>
        </Container>
    )
}

export default AttributesBoard