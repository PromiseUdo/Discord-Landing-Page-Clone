import React from 'react'
import { Button as CtaButton } from '../ButtonElement'
import mainsvg5 from '../../assets/images/mainsvg5.svg'
import { DownloadIcon } from '../HeroSection/HeroElements'
import {
  CtaContainer,
  CtaContent,
  CtaImageBgContainer,
  CtaImageBg,
  CtaTitle,
} from './CtaElements'

const CallToAction = () => {
  return (
    <CtaContainer>
      <CtaContent>
        <CtaImageBgContainer>
          <CtaImageBg src={mainsvg5} />
        </CtaImageBgContainer>
        <CtaTitle>Ready to start your journey?</CtaTitle>
        <CtaButton
          id='ctaButton'
          color='#fff'
          hoverbgcolor='#7983f5'
          bgcolor='#5865f2'
          margintop='40px'
          to='#'
        >
          <DownloadIcon color='#fff' />
          Download for Windows
        </CtaButton>
      </CtaContent>
    </CtaContainer>
  )
}

export default CallToAction
