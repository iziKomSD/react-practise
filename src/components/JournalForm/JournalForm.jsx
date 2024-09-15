import css from './JournalForm.module.css'
import Button from '../Button/Button'
import { useEffect, useReducer, useRef } from 'react'
import cn from 'classnames'
import { formReducer, INITIAL_STATE } from './JournalForm.state'
import Input from '../Input/Input'

// const INITIAL_STATE2 = {
//   header: true,
//   post: true,
//   date: true,
//   tag: true,
// }

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
  const { isValid, isFormReadyToSubmit, values } = formState
  const titleRef = useRef()
  const postRef = useRef()
  const dateRef = useRef()
  const tagRef = useRef()

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.header:
        titleRef.current.focus()
        break
      case !isValid.date:
        dateRef.current.focus()
        break
      case !isValid.tag:
        tagRef.current.focus()
        break
      case !isValid.post:
        postRef.current.focus()
        break
    }
  }

  useEffect(() => {
    let timerId
    if (!isValid.date || !isValid.post || !isValid.header || !isValid.tag) {
      focusError(isValid)
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' })
      }, 2000)
    }
    return () => {
      clearTimeout(timerId)
    }
  }, [isValid])

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values)
      dispatchForm({ type: 'CLEAR' })
    }
  }, [isFormReadyToSubmit, values, onSubmit])

  const onChange = (e) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [e.target.name]: e.target.value },
    })
  }

  const addJournalItem = (e) => {
    e.preventDefault()
    dispatchForm({ type: 'SUBMIT' })
  }
  return (
    <form className={css['journal-form']} onSubmit={addJournalItem}>
      <div>
        <Input
          type="text"
          ref={titleRef}
          value={values.header}
          onChange={onChange}
          name="header"
          isValid={isValid.header}
          appearance="title"
        />
      </div>
      <div className={css['form-row']}>
        <label htmlFor="date" className={css['form-labels']}>
          Date
        </label>
        <Input
          type="date"
          ref={dateRef}
          value={values.date}
          onChange={onChange}
          isValid={isValid.date}
          name="date"
          id="date"
        />
      </div>
      <div className={css['form-row']}>
        <label htmlFor="tags" className={css['form-labels']}>
          Tags
        </label>
        <Input
          type="text"
          ref={tagRef}
          value={values.tag}
          onChange={onChange}
          isValid={isValid.tag}
          name="tag"
          id="tag"
        />
      </div>

      <textarea
        name="post"
        ref={postRef}
        value={values.post}
        onChange={onChange}
        cols={30}
        rows={10}
        className={cn(css['input'], {
          [css['invalid']]: !isValid.post,
        })}
      />

      <Button text="Save" />
    </form>
  )
}

export default JournalForm
