import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import avatarOne from './icons/avatars/avatar_one.svg'
import avatarTwo from './icons/avatars/avatar_two.svg'
import avatarThree from './icons/avatars/avatar_three.svg'
import avatarFour from './icons/avatars/avatar_four.svg'

import { GlobalStyle } from './global-style'

import Menu from './components/Menu'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: 630px;
  display: flex;
  justify-content: space-between;
`

console.info(`⚛️ ${React.version}`)

const MENU_ITEMS_EXAMPLE_ONE = [
  {
    id: 1,
    title: 'My evaluations'
  },
  {
    id: 2,
    title: 'My steps'
  }
]

const MENU_ITEM_EXAMPLE_TWO = [
  {
    id: 1,
    title: 'Ross Rich',
    subtitle: 'Manager',
    avatar: avatarOne
  },
  {
    id: 2,
    title: 'Harry Avery',
    subtitle: 'Associate',
    avatar: avatarTwo
  },
  {
    id: 3,
    title: 'Amit Patel',
    subtitle: 'Associate',
    avatar: avatarThree
  },
  {
    id: 4,
    title: 'Suzy Anderson',
    subtitle: 'Associate',
    avatar: avatarFour
  }
]

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Content>
        <Menu
          items={MENU_ITEMS_EXAMPLE_ONE}
          onChange={console.log}
          width={152}
        />
        <Menu
          items={MENU_ITEM_EXAMPLE_TWO}
          onChange={console.log}
          showFilter
          width={270}
        />
      </Content>
    </Container>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
