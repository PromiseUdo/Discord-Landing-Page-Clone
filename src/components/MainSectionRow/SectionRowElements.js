import styled from 'styled-components'

export const RowContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ greyBackground }) =>
    greyBackground === true ? '#f6f6f6' : '#fff'};
  /* overflow: hidden; */
`

export const RowContent = styled.div`
  display: grid;
  font-size: 16px;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  box-sizing: border-box;
  row-gap: 0px;
  padding: ${({layout}) => layout === 'column' ? '80px 40px' : '120px 80px'};

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    padding: 80px 40px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 56px 24px;
  }
`

export const RowImageColumn = styled.img`
  object-fit: cover;
  grid-column: ${({ layout, imgStart }) =>
    layout === 'column'
      ? 'span 12'
      : imgStart === true
      ? 'span 7'
      : '6/span 7'};
  width: 100%;
  order: ${({ imgStart }) => (imgStart === true ? 1 : 2)};

  @media screen and (max-width: 1024px) {
    grid-column: ${({ layout, imgStart }) =>
      layout === 'column' ? 'span 8' : 'span 4'};
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 24px;
    order:${({layout}) => layout === 'column' ? 2 : 1};
  }
`

export const RowTextColumn = styled.div`
  grid-column: ${({ layout, imgStart }) =>
    layout === 'column'
      ? '2/span 10'
      : imgStart === true
      ? `9/span 4`
      : `1/span 4`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: ${({ imgStart }) => (imgStart === true ? 2 : 1)};
  text-align: ${({ layout }) => layout === 'column' && 'center'};
  color: '#23272a';

  @media screen and (max-width: 1024px) {
    grid-column: ${({ layout, imgStart }) =>
      layout === 'column' ? 'span 8' : 'span 4'};
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    text-align: left;
    order: ${({ layout }) => (layout === 'column' ? 1 : 2)};
  }
`

export const Headline = styled.h2`
  font-size: ${({ layout }) => (layout === 'column' ? '40px' : '48px')};
  font-weight: 700;
  line-height: 57.6px;
  font-family: ${({ layout }) =>
    layout === 'column' && '"Russo One", sans-serif;'};
  color: '#23272a';
  text-transform: ${({ layout }) => layout === 'column' && 'uppercase'};

  @media screen and (max-width: 1024px) {
    font-size: ${({ layout }) => (layout === 'column' ? '40px' : '48px')};
  }
  @media screen and (max-width: 768px) {
    font-size: 26.4px;
    line-height: 31px;
  }
`

export const Description = styled.div`
  font-size: 20px;
  margin-top: 24px;
  font-weight: 300;
  line-height: 32.5px;
  font-family: 'Lato', sans-serif;

  @media screen and (max-width: 1024px) {
    margin-top: 24px;
    line-height: 31px;
    font-size: 19px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    line-height: 26px;

    font-size: 16px;
  }
`
