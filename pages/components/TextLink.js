import React from 'react'
import Link from 'next/link'

const TextLink = (props) => {
  return (
    <div>
        <Link href={props.url}>
        <div className="font-light mt-1.5 underline-offset-4 text-white">
            <p>{props.title}<span className="font-bold">{props.span}</span></p>
        </div>
        </Link>
    </div>
  )
}

export default TextLink