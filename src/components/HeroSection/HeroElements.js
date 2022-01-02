import styled from 'styled-components'
import { MdOutlineFileDownload } from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #404eed;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 626px;
  position: relative;
  z-index: 0;
`

export const HeroBg = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`

export const ImageBg = styled.img`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 3;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeroBody = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  padding: 120px 40px;
  width: 100%;
  z-index: 3;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    padding: 80px 40px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 56px 24px;
  }
`
export const HeroContent = styled.div`
  grid-column: 3 / span 8;
  text-align: center;

  @media screen and (max-width: 1024px) {
    grid-column: span 5;
  }

  @media screen and (max-width: 768px) {
    grid-column: span 4;
  }

`

export const HeroText = styled.div`
  margin-bottom:8px;
`

export const HeroH1 = styled.h1`
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 56px;
  line-height: 53px;
  font-family: 'Russo One', sans-serif;
  font-weight: 800;
  letter-spacing: 2px;
  white-space: normal;

  @media screen and (max-width: 1024px) {
    text-align: left;
    font-size: 56px;
  }

  @media screen and (max-width: 768px) {
    font-size: 37.4px;
    line-height: 35.53px;
  }

  @media screen and (max-width: 700px) {
    font-size: 25px;
    line-height: 22.8px;
  }
`

export const HeroP = styled.p`
  color: #fff;
  text-align: center;
  max-width: 800px;
  font-weight: 400;
  margin-top: 40px;
  line-height: 33px;
  font-size: 20px;

  @media screen and (max-width: 1024px) {
    text-align: left;
    font-size: 16px;
    line-height: 31.2px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 24px;
    font-size: 16px;
    line-height: 26px;
  }

  @media screen and (max-width: 700px) {
    margin-top: 10px;
  }

`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1058px) {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    margin: 0;
    margin-top: 20px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const DownloadIcon = styled(MdOutlineFileDownload)`
  font-size: 1.7rem;
  color: ${({ color }) => color};
  margin-right: 8px;
`
export const HeroIllustrationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 3;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const IllustrationLeft = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -1030px;
  z-index: 3;
  width: 689px;
  height: auto;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    margin: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-left: -80px;
  }
`

export const IllustrationRight = styled.img`
  position: absolute;
  margin-left: 370px;
  left: 50%;
  bottom: 0;
  z-index: 3;
  right: 0;

  @media screen and (max-width: 1024px) {
    display: block;
    margin-left: -70px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
