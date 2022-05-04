/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import classNames from 'classnames'
import type { RefObject } from 'react'
import React from 'react'
import { Typography } from '../typography/Typography'
import './textField.scss'

export type TextFieldProps = Readonly<{
  /**
   * The size of the input field.
   */
  readonly size?: 'x-large' | 'large' | 'medium' | 'small' | 'x-small'
  /**
   * Placeholder text.
   */
  readonly placeholder?: string
  /**
   * Defines the callback called when the input value changes.
   */
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * The value of the `input` element, required for a controlled component.
   */
  readonly value?: string
  /**
   * The default value. Use when the component is not controlled.
   */
  readonly defaultValue?: string
  /**
   * Indicates if the input area is disabled.
   */
  readonly disabled?: boolean
  /**
   * If true, the TextField is displayed in an error state.
   */
  readonly hasError?: boolean
  /**
   * Displays a message to the user below the input area.
   */
  readonly helperText?: string
  /**
   * Pass a ref to the input element.
   */
  readonly inputRef?: RefObject<HTMLInputElement>
}>

export const TextField: React.FC<TextFieldProps> = ({
  size = 'medium',
  disabled = false,
  hasError = false,
  placeholder,
  onChange,
  value,
  defaultValue,
  helperText,
  inputRef
}: TextFieldProps): JSX.Element => {
  const inputClass = classNames(`okp4-text-field-core `, { error: hasError })

  return (
    <div className={`okp4-text-field-main ${size}`}>
      <input
        className={inputClass}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef}
        value={value}
      />
      {helperText && (
        <div>
          <Typography
            as="div"
            color={hasError ? 'error' : 'info'}
            fontSize="x-small"
            fontWeight={'bold'}
            noWrap
          >
            {helperText}
          </Typography>
        </div>
      )}
    </div>
  )
}
