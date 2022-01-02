import styled from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'

export const FooterContainer = styled.div`
  background: #23272a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 64px;
  width: 100%;
`

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  padding: 0 40px;
  width: 100%;
  max-width: 1260px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 24px;
  }
`

export const InfoBox = styled.div`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 56px;

  @media screen and (max-width: 1024px) {
    grid-row-end: span 2;
  }

  @media screen and (max-width: 768px) {
    grid-column: span 4;
  }
`

export const InfoBoxTitle = styled.h4`
  font-size: 36px;
  font-weight: 800;
  font-family: 'Russo One', sans-serif;
  color: #5865f2;
  line-height: 95%;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`
export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

export const LanguageContainer = styled.div`
  position: relative;
`

export const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const LanguageLocaleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const CountryFlag = styled.img`
  margin-right: 8px;
  height: 16px;
  width: 24px;
  cursor: pointer;
`
export const LanguageName = styled.div`
  font-size: 13px;
  line-height: 18px;
  color: #fff;
  cursor: pointer;
`

export const ArrowIcon = styled(MdKeyboardArrowDown)`
  padding-left: 8px;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
`

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  color: #fff;
`

export const SocialIcon = styled.img`
  object-fit: contain;
  font-weight: 800;
`

export const SocialLinkItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  margin-left: 24px;

  &:nth-of-type(1) {
    margin-left: 0;
  }
`
export const Spacer = styled.div`
  grid-column: span 1;

  @media screen and (max-width: 1024px) {
    grid-row-end: span 2;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const RouteSection = styled.div`
  grid-column: span 2;
  margin-bottom: 40px;
`
export const RouteSectionTitle = styled.h5`
  font-size: 16px;
  color: #5865f2;
  font-weight: 400;
  padding-top: 8px;
`

export const RouteLink = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  line-height: 18.4px;
  margin-top: 8px;
`
export const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  font-family: 'Lato', sans-serif;
`
export const CtaContainer = styled.div`
  grid-column: span 12;
`

export const CtaSeparator = styled.div`
  height: 1px;
  background: #5865f2;
  margin-bottom: 32px;
  width: 100%;
`
export const CtaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const CtaButton = styled.a`
  display: flex;
  align-items: center;
  background: #5865f2;
  color: #fff;
  white-space: nowrap;
  padding: 7px 16px;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #5865f2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
  }
`
