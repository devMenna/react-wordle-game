import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Keypad({usedKeys}) {
    const [letters , setLetters] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/letters')
        .then(res => res.json())
        .then(json => setLetters(json)
        )},[])
  return (
    <div className='keypad'>
        {letters && letters.map((l) => {
            const color = usedKeys[l.key]
            return (
                <div key={l.key} className={color}>{ l.key }</div>
            )
        })}
    </div>
  )
}
