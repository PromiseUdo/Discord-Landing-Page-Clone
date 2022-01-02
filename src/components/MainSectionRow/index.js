import React from 'react'

import {
  RowContainer,
  RowContent,
  RowImageColumn,
  RowTextColumn,
  Headline,
  Description,
} from './SectionRowElements'

const SectionRow = ({
  headline,
  desc,
  img,
  imgAlt,
  imgStart,
  greyBackground,
  layout,
}) => {
  return (
    <RowContainer greyBackground={greyBackground}>
      <RowContent layout={layout}>
        <RowImageColumn
          src={img}
          alt={imgAlt}
          imgStart={imgStart}
          layout={layout}
        />
        <RowTextColumn imgStart={imgStart} layout={layout}>
          <Headline layout={layout}>{headline}</Headline>
          <Description>{desc}</Description>
        </RowTextColumn>
      </RowContent>
    </RowContainer>
  )
}

export default SectionRow
