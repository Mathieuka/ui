import React from 'react'
import type { DeepReadonly } from 'superTypes'
import { useTheme } from 'hook/useTheme'
import type { ThemeContextType } from 'context/themeContext'
import sprite from '../../../assets/icons/sprite.svg'

export type IconName =
  | 'add'
  | 'alert'
  | 'arrow'
  | 'chat'
  | 'meeting'
  | 'next'
  | 'podcast'
  | 'previous'
  | 'profile'
  | 'rs-facebook'
  | 'rs-linkedin'
  | 'rs-twitter'
  | 'search'
  | 'theme-switcher'
  | 'wallet'

export type IconProps = {
  /**
   * Icon name to use.
   */
  readonly name: IconName
  /**
   * Icon size in pixels, squared.
   */
  readonly size?: number
  /**
   * Custom className to add some additional style.
   */
  readonly className?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 30,
  className
}: DeepReadonly<IconProps>): JSX.Element => {
  const { theme }: ThemeContextType = useTheme()

  return (
    <svg {...(className && { className })} height={`${size}px`} width={`${size}px`}>
      <use href={`${sprite}#${name}-${theme}`} />
    </svg>
  )
}
