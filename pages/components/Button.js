import React from 'react'
import Link from 'next/link'

const Button = (props) => {
  return (
    <div>
        <Link href={props.url} target="_blank">
        <div className="flex items-center text-center hover:text-white/60 trasition-all p-4 bg-black text-white font-light">
            <p>{props.title} <span className="font-bold">{props.span}</span></p>
        </div>
        </Link>
    </div>
  )
}

export default Button