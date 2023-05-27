import React from 'react'

const Time = ({condition}) => {
  return (
    <p style={{ padding: "20px" }}>
    {condition >= 10 ? condition : `0${condition}`}
  </p>
  )
}

export default Time