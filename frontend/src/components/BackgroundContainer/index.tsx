'use client'
import { FC, ReactNode } from 'react'

const BackgroundContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/background.png" alt="background" className="absolute z-[-1]" />
      {children}
    </div>
  )
}

export { BackgroundContainer }
