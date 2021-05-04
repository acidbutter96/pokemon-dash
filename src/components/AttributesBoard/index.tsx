import React from 'react'
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

import { usePokemon } from '../../hooks/pokemon'

interface IAttributesBoard {
    id: string;
}

const AttributesBoard: React.FC<IAttributesBoard> = ({ id }) => {
    const {
    } = usePokemon()

    const data = {
        options: {
            chart: {
                id: 'attributes',
            },
            xaxis: {
                categories: ['HP', 'Ataque', 'Defesa', 'Ataque Especial', 'Defesa Especial', 'Velocidade']
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
            data: [30, 40, 35, 50, 49, 60]
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
                            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png' alt='' />
                        </PokemonImage>
                    </div>
                    <div>
                        <NameBar>
                            <h1>

                                Nome Pokémon
                            </h1>
                        </NameBar>
                    </div>
                    <div>
                        <AddButton>
                            <IoMdAdd />
                        </AddButton>
                    </div>
                </AttributesContainer>
            </PokemonAttributeContainer>
        </Container>
    )
}

export default AttributesBoard