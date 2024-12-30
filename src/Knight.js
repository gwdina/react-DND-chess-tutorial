import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

function Knight() {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <span
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: '50px',
          fontWeight: 'bold',
          cursor: 'move',
          lineHeight: '1',
        }}
      >
        ♘
      </span>
    </div>
  )
}

export default Knight