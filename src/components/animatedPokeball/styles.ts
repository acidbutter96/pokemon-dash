import styled, { keyframes } from 'styled-components'

const fadeInOpacity = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const shake = keyframes`
    20% {
        transform: rotate(-10deg);
    }
    60% {
        transform: rotate(10deg);
    }
    80% {
        transform: rotate(0deg);
    }
`

const translateHigher = keyframes`
    to {
      transform: translateY(-18px);
    }
`

const translateDown = keyframes`
    to {
        transform: translateY(5px);
    }
`

const translateUp = keyframes`
    to {
        transform: translateY(-10px);
    }
`

const pulse = keyframes`
    25% {
        opacity: 0.7;
        }
    50% {
        opacity: 0;
        }

        `

/* squash for the pokeball and the success animation */

const squash = keyframes`
    to {
        transform: scaleY(0.9);
    }
    `

const scaleUp = keyframes`
        to {
        transform: scale(1);
    }
    `

export const PokeContainer = styled.div`
    #charname {
        display:none;
    }
    body {
        background-image: url("https://i.imgur.com/YQwoQMq.png");
        background-size:cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #whitebox{

    }
    .whitebox{
        position:absolute;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background:#f5f5f2;
        opacity:0;
            opacity: 1;
            animation-name: ${fadeInOpacity};
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 0.5s;
    }

    
    svg.fetching g.gravity {
        animation: ${shake} 0.75s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    /* pulse to change the color of the innermost circle */
    svg.fetching g.inner {
    /* ! infinite given the unknown time it takes for the request to be resolved/rejected */
        animation: ${pulse} 0.75s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    /* scaleUp for the arcs in between the ball's halves and for the failure animation */
    svg.failure g.open {
        animation: ${scaleUp} 0.2s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    /* translateUp for the top half and the failure animation */
    svg.failure g.top {
        animation: ${translateUp} 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    /* translateDown for the bottom half and the failure animation */
    svg.failure g.bottom {
        animation: ${translateDown} 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    /* translateHigher for the center and the failure animation */
        svg.failure g.center {
        animation: ${translateHigher} 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

`