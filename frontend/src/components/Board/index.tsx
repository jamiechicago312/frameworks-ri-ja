'use client'
import React, { type HTMLAttributes } from 'react'
import { atom, useAtom } from 'jotai'
import cx from 'clsx'
import { CloseIcon } from '../Icons'

interface Props {
  title?: string
  children?: React.ReactNode
}

// const showBoardAtom = atom(false)
const showBoardAtom = atom(false)

export const toggleShowBoardAtom = atom(
  (get) => get(showBoardAtom),
  (get, set) => {
    const update = !get(showBoardAtom)
    set(showBoardAtom, update)
  }
)

const Board: React.FC<HTMLAttributes<HTMLDivElement> & Props> = ({
  className,
  title,
  children,
}) => {
  const [showBoard, setShowBoard] = useAtom(showBoardAtom)

  return (
    <div
      className={cx(
        'p-[24px] text-[16px] leading-[24px] rounded-[12px] border-[1px] border-solid border-[#ffffff] bg-[rgba(255,255,255,0.08)] backdrop-blur-[24px]',
        'pb-20px',
        !showBoard && '!hidden',
        className
      )}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="flex items-center text-[24px] leading-[36px] text-[#ffffff] font-semibold">
          {title}
        </p>
        <div
          className="w-fit h-fit cursor-pointer"
          onClick={() => setShowBoard((pre) => !pre)}
        >
          <CloseIcon />
        </div>
      </div>
      {children}
    </div>
  )
}

export default Board
