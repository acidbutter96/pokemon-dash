import styled from 'styled-components'


export const Container = styled.div`
    width: 71.25rem;
    min-height: 25rem;

    border-radius: 0 0 1rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color:${props => props.theme.colors.secondary};
`

export const UserName = styled.div`
    height: 4rem;
    width: 71.25rem;
    
    padding: 0 1rem;

    display: flex;
    align-items: center;

    border-bottom: 1px solid black;
`

export const TableContainer = styled.table`
    width: 71.25rem;

    display: flex;
    flex-direction: column;
`

export const TableHeader = styled.div`
    width: 71.25rem;

    display: flex;
    justify-content: space-around;

    tr{
        width: 71.25rem;

        display: flex;
        justify-content: space-around;
        align-items: center;

        th {
            min-width: 14rem;
            font-family: 'Poppins', sans-serif;

            display: flex;
            justify-content: start;

            padding: 1rem;
        }
    }
`

export const TableBody = styled.div`
    width: 71.25rem;
    height: 40vh;

    padding: 0 1rem;

    overflow-y: auto;
    overflow-x: hidden;

    tr{

        display: flex;
        justify-content: space-around;
        align-items: center;

        td {
            min-width: 14rem;
            font-family: 'Poppins', sans-serif;

            display: flex;
            justify-content: center;

            padding: 1rem;
        }
    }
`
