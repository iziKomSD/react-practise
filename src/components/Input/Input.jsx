import { forwardRef } from 'react'
import css from './Input.module.css'
import cn from 'classnames'

const Input = forwardRef(function Input(
  { className, isValid = true, appearance, ...props },
  ref
) {
  return (
    <>
      <input
        ref={ref}
        className={cn(className, css['input'], {
          [css['invalid']]: !isValid,
          [css['input-title']]: appearance === 'title',
        })}
        {...props}
      />
    </>
  )
})

export default Input
