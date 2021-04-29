import styled from 'styled-components'

export const Container = styled.div`
    min-height: 57.62rem;
    width: 71.25rem;

    padding: 1rem 0;

    border-radius: 0 0 1rem 1rem;

    background-color:${props => props.theme.colors.secondary};
`

export const Filters = styled.div`
    border-bottom: 1px solid black;

    padding: 0 1rem 1rem 3.28rem;

`

export const Selector = styled.select`
    width: 12.75rem;
    height: 2.8rem;

    border: 1px solid ${props => props.theme.colors.black};
    border-radius: .5rem;

    margin: .5rem 0;

    cursor: pointer;

    transition: all .3s;

    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.quintenary};

    option[disabled] {
        color: ${props => props.theme.colors.black};
        text-shadow: none;
        border: none;
    }

    &:focus,
    &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

`

export const PokemonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    position: relative;

`;

export const PaginatorContainer = styled.div`
        position: absolute;
        bottom: -3.93rem;
        right:8.06rem;

    .paginatorcontainer{

        display: flex;
        list-style-type: none;

        li {
            min-height: 2.5rem !important;
            min-width: 2.6rem !important;

            display: flex;
            justify-content:center;
            align-items: center;

            background-color: ${props => props.theme.colors.quatenary};

            border: 2px solid ${props => props.theme.colors.black};
            border-radius: .5rem;

            font-size: 1.37rem;
            font-family: 'Poppins', sans-serif;
            color: ${props => props.theme.colors.white};

            transition: all .3s;

            cursor: pointer;

            & + li {
                margin-left: 1rem;
            }

            &:hover{
                filter: brightness(1.1);
                transform: translateX(.5px) translateY(.3px);
            }
        }
        

        /* .pageItem { 
            
        } */

        .actionbutton{
            background: ${props => props.theme.colors.gray};
        }

        .active {
            background: ${props => props.theme.colors.quintenary};
        }
    }
`