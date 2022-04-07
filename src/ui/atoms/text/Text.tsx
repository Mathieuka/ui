import classNames from 'classnames'
import React from 'react'
import type { DeepReadonly } from '../../../superTypes'
import './text.scss'
import '../../styles/font.scss'

export type TextProps = DeepReadonly<{
  /**
   * Prop used to switch out what's being ultimately rendered.
   */
  readonly as?: 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre' | 'ul' | 'li'
  /**
   * The size of the rendered text.
   */
  readonly size?: 'x-large' | 'large' | 'medium' | 'small' | 'x-small'
  /**
   * `brand` (Gotham) is the main font for ØKP4 branding,
   * therefore it is mainly used for all UI interfaces.
   * The `secondary` font is Noto Sans Mono.
   */
  readonly fontFamily?: 'brand' | 'secondary'
  /**
   * The different font weights declared for each font-face.
   */
  readonly fontWeight?: 'light' | 'normal' | 'bold' | 'black'
  /**
   * The color applied to the final rendering of the typography,
   * regarding the current theme and following semantic color naming.
   */
  readonly color?: 'text' | 'highlighted-text' | 'success' | 'warning' | 'error' | 'info'
  /**
   * The elements passed as children of the Text component.
   * As an example, directly the text itself.
   */
  readonly children: React.ReactNode
}>

/**
 * Primary UI component for displaying text
 */
export const Text: React.FC<TextProps> = ({
  as = 'span',
  size = 'medium',
  fontWeight = 'normal',
  fontFamily = 'brand',
  color = 'text',
  ...props
}: TextProps): JSX.Element => {
  const textClass = classNames('okp4-text-main okp4-font-size', size, color, {
    [`${fontFamily}-${fontWeight}`]: true
  })
  return React.createElement(as, { ...props, className: textClass }, props.children)
}
