import React from 'react'
import { data } from './data'
import {
  LocalePicker,
  Dropdown,
  DropdownItem,
  DropdownItemWrapper,
  DropdownItemContent,
  CountryFlag,
  LanguageName,
} from './LanguagePickerElements'

const LanguagePickerDropdown = ({
  isLanguagePickerOpen,
  setIsLanguagePickerOpen,
  setSelectedLanguage,
}) => {
  const handleItemClick = (e, index) => {
    e.stopPropagation()
    setSelectedLanguage(data[index-1])
    setIsLanguagePickerOpen(false)
  }

  return (
    <LocalePicker isLanguagePickerOpen={isLanguagePickerOpen}>
      <Dropdown>
        {data.map((item, index) => {
          return (
            <DropdownItem key={index}>
              <DropdownItemWrapper>
                <DropdownItemContent
                  onClick={(e) => handleItemClick(e, item.id)}
                >
                  <CountryFlag src={item.flag} />
                  <LanguageName>{item.language}</LanguageName>
                </DropdownItemContent>
              </DropdownItemWrapper>
            </DropdownItem>
          )
        })}
      </Dropdown>
    </LocalePicker>
  )
}

export default LanguagePickerDropdown
