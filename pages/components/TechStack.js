import React from 'react'
import Image from 'next/image'

const TechStack = ({tech, style}) => {
  return (
      <div
      className={`col-span-6 md:col-span-3 space-x-2 p-4 flex`}
    >
      <div className="text-lg space-y-2 md:flex md:space-y-0 md:items-center md:space-x-2">
        <div className="w-6">
          <Image src={style.src} alt={tech} />
        </div>
        <p className={`font-bold ${style.text}`}>{tech}</p>
      </div>
    </div>
  )
}

export default TechStack