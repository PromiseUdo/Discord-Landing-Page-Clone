import React from 'react'
import discordLogo from '../../assets/images/discord-logo.svg'
import footerLinks from './FooterLinksData'
import socialMediaData from './SocialMediaLinks'
import { DiscordLogo } from '../Navbar/NavbarElements'
import LanguagePickerDropdown from '../LanguagePickerDropdown'
import { data as languageList } from '../LanguagePickerDropdown/data'

import {
  FooterContainer,
  FooterRow,
  InfoBox,
  InfoBoxTitle,
  LanguageSelector,
  LanguageContainer,
  LanguageItem,
  LanguageLocaleWrapper,
  CountryFlag,
  LanguageName,
  ArrowIcon,
  SocialIcons,
  SocialLinkItem,
  SocialIcon,
  Spacer,
  RouteSection,
  RouteSectionTitle,
  RouteLink,
  Text,
  CtaContainer,
  CtaSeparator,
  CtaContent,
  CtaButton,
} from './FooterElements'

const Footer = ({ isLanguagePickerOpen, setIsLanguagePickerOpen }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    languageList[5]
  )

  const handleLanguagePickerClick = () => {
    setIsLanguagePickerOpen(false)
    setTimeout(() => {
      setIsLanguagePickerOpen(true)
    }, 100)
  }
  return (
    <FooterContainer onClick={() => setIsLanguagePickerOpen(false)}>
      <FooterRow>
        <InfoBox>
          <InfoBoxTitle>Imagine a place</InfoBoxTitle>
          <LanguageSelector>
            <LanguageContainer onClick={handleLanguagePickerClick}>
              <LanguagePickerDropdown
                setIsLanguagePickerOpen={setIsLanguagePickerOpen}
                isLanguagePickerOpen={isLanguagePickerOpen}
                setSelectedLanguage={setSelectedLanguage}
              />
              <LanguageItem role='button'>
                <LanguageLocaleWrapper>
                  <CountryFlag src={selectedLanguage.flag} alt='locale' />
                  <LanguageName>{selectedLanguage.language}</LanguageName>
                </LanguageLocaleWrapper>
                <ArrowIcon />
              </LanguageItem>
            </LanguageContainer>
          </LanguageSelector>
          <SocialIcons>
            {socialMediaData.map((socialMedia) => (
              <SocialLinkItem to={socialMedia.link} key={socialMedia.id}>
                <SocialIcon src={socialMedia.icon} alt={socialMedia.name} />
              </SocialLinkItem>
            ))}
          </SocialIcons>
        </InfoBox>
        <Spacer />
        {footerLinks.map((item, index) => {
          return (
            <RouteSection key={index}>
              <RouteSectionTitle>{item.title}</RouteSectionTitle>
              {item.links.map((link, index) => {
                return (
                  <RouteLink to={link.to} key={index}>
                    <Text>{link.text}</Text>
                  </RouteLink>
                )
              })}
            </RouteSection>
          )
        })}
      </FooterRow>
      <FooterRow>
        <CtaContainer>
          <CtaSeparator></CtaSeparator>
          <CtaContent>
            <DiscordLogo src={discordLogo}></DiscordLogo>
            <CtaButton>Open Discord</CtaButton>
          </CtaContent>
        </CtaContainer>
      </FooterRow>
    </FooterContainer>
  )
}

export default Footer
