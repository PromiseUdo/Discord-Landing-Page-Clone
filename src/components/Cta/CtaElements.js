import styled from 'styled-components'

export const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #f6f6f6;
`

export const CtaContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  font-size:16px;
  margin-bottom: 120px;
  padding: 0 40px;
  position:relative;

  @media screen and (max-width: 505px) {
    padding: 0 24px;
    margin-bottom:56px;

  }
`

export const CtaImageBgContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
  /* width: 1260px; */
  display: flex;
  justify-content: center;
  position:relative;
`
export const CtaImageBg = styled.img`


`

export const CtaTitle = styled.h4`
  margin-top: 30px;
  font-size: 33px;
  font-weight: 900;
  line-height: 120%;

  @media screen and (max-width: 1024px) {

    font-size: 32px;
  }
`
