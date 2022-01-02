import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DownloadIcon } from './HeroSection/HeroElements'

export const Button = styled(Link)`
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 16px 25px;
  font-size: 20px;
  line-height: 24px;
  background: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  margin-right: ${({ marginright }) => marginright};
  margin-top: ${({ margintop }) => margintop};
  text-decoration: none;
  font-weight: 400;
  text-align: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ dark }) => dark === 'false' && '#5865f2;'};
    background: ${({ hoverbgcolor }) => hoverbgcolor};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);

    ${DownloadIcon} {
      transition: all 0.2s ease-in-out;
      color: #5865f2;
    }
  }


  @media screen and (max-width: 768px) {
    height: 56px;
    padding: 16px 20px;
    font-size: 18px;
    width: ${({ id }) => id === 'ctaButton' && '100%'};
  }

  @media screen and (max-width: 700px) {
    margin: 10px 0;
    margin-top: ${({ id }) =>
      id === 'ctaButton' ? '40px' : id === 'openButton' ? '24px' : '0'};
    margin-bottom: 0;
  }

  @media screen and (max-width: 505px) {

  }

  @media screen and (max-width: 332px) {
    overflow: visible;
  }
`
