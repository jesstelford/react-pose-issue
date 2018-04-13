import React from 'react'
import styled from 'styled-components'

// Works
//import posed, { PoseGroup } from '@jesstelford/react-pose'

// Does not work
import posed, { PoseGroup } from 'react-pose'

const Box = ({ className, children, hostRef }) => (
  <div className={className} ref={hostRef} >{children}</div>
);

const StyledBox = styled(Box)`
  background-color: blue;
  color: white;
  min-height: 4em;
  margin-top: 2em;
`;

const AnimatedBox = posed(StyledBox)({
  enter: { opacity: 1, y: '0%' },
  exit: { opacity: 0, y: '30%' },
});


export default () => (
  <PoseGroup animateOnMount>
    <AnimatedBox key="1">Hello world</AnimatedBox>
    <AnimatedBox key="2">Animated</AnimatedBox>
  </PoseGroup>
);
