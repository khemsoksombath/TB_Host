import styled, { keyframes } from 'styled-components';
import fonts from './fonts';
import { useEffect } from 'react';
import { SharedText } from './SharedText';
import { useContext } from 'react';

const scrollLeft = keyframes`
  0% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(-100%);
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(100%);
  }
`;

const scrollRight = keyframes`
    0%   { 
    -moz-transform: translateX(100%); 
    -webkit-transform: translateX(100%); 
    transform: translateX(100%); 		
    }
    100% { 
    -moz-transform: translateX(-100%); 
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%); 
    }
`;

const Stop = keyframes`
    0%   { 
    -moz-transform: translateX(100%); 
    -webkit-transform: translateX(100%); 
    transform: translateX(0%); 		
    }
    100% { 
    -moz-transform: translateX(-100%); 
    -webkit-transform: translateX(-100%);
    transform: translateX(0%); 
    }
`;
const blinkanimated = keyframes `
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

// animation: ${direction ? scrollLeft : scrollRight} 10s linear infinite;

const MyComponent = () => {
    const {direction} = useContext(SharedText)
    const {text} = useContext(SharedText)
    const {Speed} = useContext(SharedText)
    const {Blink} = useContext(SharedText)
    const {BlinkSpeed} = useContext(SharedText)
    const {Size} = useContext(SharedText)
    const {Color} = useContext(SharedText)
    const {font} = useContext(SharedText)
    const {FSR} = useContext(SharedText)

    useEffect(() => {
      fonts.forEach(font => {
        const link = document.createElement('link');
        link.href = font.url;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      });
    }, []);

    const AnimatedComponent = styled.div`
      animation: ${direction === 1 ? scrollLeft : direction === 0? scrollRight: Stop} ${Speed}s  linear infinite ,${Blink ? blinkanimated: "" } ${BlinkSpeed}s infinite;
      font-family: ${font};
      font-size: ${Size}px;
      color: ${Color};
      width: 100%;
      height: 100%;
      margin: 0;
      line-height: 50px;
      text-align: center;
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);    
    `;
    return <AnimatedComponent className='flex justify-center items-center'>{text}</AnimatedComponent>
};


export default MyComponent;
