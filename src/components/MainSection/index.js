import React from 'react'
import { data } from './data'
import SectionRow from '../MainSectionRow'
import { MainSectionContainer } from './MainSectionElements'
import CallToAction from '../Cta'
import Footer from '../Footer'

const MainSection = () => {
  const [isLanguagePickerOpen, setIsLanguagePickerOpen] = React.useState(false)

  return (
    <MainSectionContainer
      onClick={() => {
        setIsLanguagePickerOpen(false)
      }}
    >
      {data.map((section, index) => {
        return <SectionRow key={index} {...section} />
      })}
      <CallToAction />
      <Footer
        isLanguagePickerOpen={isLanguagePickerOpen}
        setIsLanguagePickerOpen={setIsLanguagePickerOpen}
      />
    </MainSectionContainer>
  )
}

export default MainSection
