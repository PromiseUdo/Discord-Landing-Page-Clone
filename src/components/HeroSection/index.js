import React from 'react'
import herobg from '../../assets/images/herobg.svg'
import IllustrationOne from '../../assets/images/illustration-one.svg'
import IllustrationTwo from '../../assets/images/illustration-two.svg'
import { Button } from '../../ButtonElement'
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroBody,
  HeroContent,
  HeroText,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  DownloadIcon,
  IllustrationLeft,
  IllustrationRight,
} from './HeroElements'

const HeroSection = ({ setIsSidebarOpen }) => {
  return (
    <HeroContainer
      onClick={() => {
        setIsSidebarOpen(false)
      }}
    >
      <HeroBody>
        <HeroContent>
          <HeroText>
          <HeroH1>imagine a place...</HeroH1>
          <HeroP>
            ... where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spen time together. A place that makes it easy to talk every day and
            hang out more often.
          </HeroP>
          </HeroText>
          <HeroBtnWrapper>
            <Button
              color='#23272a'
              bgcolor='#fff'
              marginright='24px'
              margintop='24px'
              to='#'
            >
              <DownloadIcon color='#23272a' /> Download for Windows
            </Button>
            <Button
              id='openButton'
              color='#fff'
              bgcolor='#23272a'
              hoverbgcolor='#36393f'
              marginleftright='0'
              margintop='24px'
              to='#'
            >
              Open Discord in your browser
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroBody>
      <HeroBg>
        <ImageBg src={herobg} />
        <IllustrationLeft left='true' src={IllustrationOne} />
        <IllustrationRight right='true' src={IllustrationTwo} />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
