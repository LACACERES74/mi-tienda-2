import React from 'react'
import Button from '../ItenListContainer/Button'
import { useState } from 'react'

const Count = () => {

  const [count, setCount] = useState(0)

  const sum = () => {
    setCount(count + 1)
  }
  const res = () => {
    setCount(count - 1)

    console.log("rnderiza app")
  }

  return (
    <>
      <Button fn={sum} text="+" />
      <span>{count}</span>
      <Button fn={res} text="-" />
      <div>count</div>
    </>
  )
}

export default Count
