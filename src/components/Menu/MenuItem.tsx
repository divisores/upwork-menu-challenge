import React from 'react'
import styled from 'styled-components'

import { Colors } from '../../lib/style-guide'

import auxiliarAvatar from '../../icons/avatars/auxiliar_avatar.svg'

import { TItem } from './index'

const Container = styled.div`
  height: 40px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .title {
    margin-left: 2px;
    color: #192533;
  }

  .subtitle {
    margin-left: 10px;
    font-size: 12px;
    color: #60789a;
  }

  :hover {
    background-color: #3284e1;

    .title {
      color: ${Colors.PureWhite};
    }

    .subtitle {
      color: ${Colors.BG1};
    }
  }
`

const Avatar = styled.div`
  position: relative;
  display: flex;
  height: 24px;
`

const AuxiliarAvatar = styled.div`
  border-radius: 50%;
  height: 24px;
  padding: 1px;
  border: 1px solid #d1e3f8;

  .img {
    border-radius: 50%;
    background-color: #ffffff;
  }
`

const Picture = styled.img`
  position: relative;
  left: -8px;
`

interface Props {
  item: TItem
  onClick: (item: TItem) => void
}

const MenuItem = ({ item, onClick }: Props) => {
  const { avatar, title, subtitle } = item
  return (
    <Container onClick={() => onClick(item)}>
      {avatar && (
        <Avatar>
          <AuxiliarAvatar>
            <img className="img" src={auxiliarAvatar} />
          </AuxiliarAvatar>
          <Picture src={avatar} />
        </Avatar>
      )}
      <span className="title">{title}</span>
      {subtitle && <span className="subtitle">Manager</span>}
    </Container>
  )
}

export default MenuItem
