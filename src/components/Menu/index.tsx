import React from 'react'
import styled from 'styled-components'

import { Colors } from '../../lib/style-guide'

import MenuItem from './MenuItem'

const Container = styled.div`
  background-color: ${Colors.PureWhite};
  border: 1px solid ${Colors.Border};
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  border-radius: 4px;
  height: fit-content;
`

const Header = styled.div`
  background-color: blue;
  height: 54px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #deecfc;
`

const Content = styled.div`
  padding: 8px 0;
`

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 16px;
  outline: 0;

  ::placeholder {
    color: #8299b6;
    font-size: 14px;
  }
`

export interface TItem {
  id: number
  title: string
  subtitle?: string
  avatar?: string
}

interface Props {
  items: Array<TItem>
  onChange: (item: TItem) => void
  showFilter?: boolean
  width: number
}

const Menu = ({ items, onChange, showFilter, width }: Props) => {
  return (
    <Container style={{ width }}>
      {showFilter && (
        <Header>
          <Input placeholder="Filter by name" />
        </Header>
      )}
      <Content>
        {items.map((item) => (
          <MenuItem key={item.id} item={item} onClick={onChange} />
        ))}
      </Content>
    </Container>
  )
}

export default Menu
