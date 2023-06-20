'use client'
import React from 'react'

type Props = {
  children?: React.ReactNode | undefined
  variant?: string
  style?: string
  onClick?: () => void | undefined
}

function Button(props: Props) {
  const buttonStyle = () => {
    switch (props.variant) {
      case 'primary':
        return 'btn btn-primary'
      case 'neutral':
        return 'btn btn-neutral'
      case 'ghost':
        return 'btn btn-ghost'
      case 'danger':
        return 'btn btn-error'
      default:
        return 'btn btn-neutral'
    }
  }
  return (
    <button
      className={`${buttonStyle()} ${props.style} btn-sm`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
