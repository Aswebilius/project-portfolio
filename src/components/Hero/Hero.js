import React from "react";
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (

    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, welcome to my 
          Web Development Portfolio
        </SectionTitle>
        <SectionText>
          My name is Austin Swebilius and
          I am seeking employment as a ReactJS Developer and look forward
          to adding my skills and abilities to your company.

        </SectionText>
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/10ynI9k1hS-3ZYIc6_oXYEVhRyXo1HmlY/view?usp=sharing'}>My Resume</Button>
      </LeftSection>

    </Section>
  )
;

export default Hero;