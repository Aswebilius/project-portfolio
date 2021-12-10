import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (

<Section row nopadding>
  <LeftSection>
    <SectionTitle main center> 
      Hello, welcome to my <br />
      Web Development Portfolio!
    </SectionTitle>
    <SectionText>

    I hold a B.S. Degree in Computer Science, and 
    a certificate from UCF Fullstack Development Coding Boot Camp.
    I am seeking employment as a ReactJS Developer and look forward
    to adding my skills and abilities to your company!

    </SectionText>
    <Button onClick={() => window.location = 'https://drive.google.com/file/d/1Z6K2lYIW8F58ytcf3n1qouA1y-SLXpnm/view?usp=sharing'}>My Resume</Button>
  </LeftSection>

</Section>
);

export default Hero;