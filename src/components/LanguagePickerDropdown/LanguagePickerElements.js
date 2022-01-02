import styled from 'styled-components'

export const LocalePicker = styled.div`
  position: absolute;
  bottom: 18px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
  background: #fff;
  overflow: hidden;
  display: ${(props) => (props.isLanguagePickerOpen ? 'block' : 'none')};
`

export const Dropdown = styled.div`
  max-height: 320px;
  min-width: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
`
export const DropdownItem = styled.div`
  padding: 8px;
  line-height: 18.4px;
`
export const DropdownItemWrapper = styled.div`
  cursor: pointer;
  font-size: 16px;
`

export const DropdownItemContent = styled.div`
  display: flex;
  font-weight: 400;
  align-items: center;
`

export const CountryFlag = styled.img`
  width: 24px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
`
export const LanguageName = styled.div`
  line-height: 18px;
  font-size: 14px;
  color: #23272a;
`
