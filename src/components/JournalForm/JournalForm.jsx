import css from './JournalForm.module.css'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import cn from 'classnames'

const INITIAL_STATE = {
  header: true,
  post: true,
  date: true,
  tag: true,
}

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState(INITIAL_STATE)

  useEffect(() => {
    let timerId
    if (
      !formValidState.date ||
      !formValidState.post ||
      !formValidState.header ||
      !formValidState.tag
    ) {
      timerId = setTimeout(() => {
        setFormValidState(INITIAL_STATE)
      }, 2000)
    }
    return () => {
      clearTimeout(timerId)
    }
  }, [formValidState])

  const addJournalItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    let formIsValid = true
    if (!formProps.header?.trim().length) {
      setFormValidState((state) => ({ ...state, header: false }))
      formIsValid = false
    } else {
      setFormValidState((state) => ({ ...state, header: true }))
    }
    if (!formProps.post?.trim().length) {
      setFormValidState((state) => ({ ...state, post: false }))
      formIsValid = false
    } else {
      setFormValidState((state) => ({ ...state, post: true }))
    }
    if (!formProps.date) {
      setFormValidState((state) => ({ ...state, date: false }))
      formIsValid = false
    } else {
      setFormValidState((state) => ({ ...state, date: true }))
    }
    if (!formProps.tag) {
      setFormValidState((state) => ({ ...state, tag: false }))
      formIsValid = false
    } else {
      setFormValidState((state) => ({ ...state, tag: true }))
    }
    if (!formIsValid) {
      return
    }
    onSubmit(formProps)
  }
  return (
    <form className={css['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="header"
          className={cn(css['input'], {
            [css['invalid']]: !formValidState.header,
          })}
        />
      </div>
      <div className={css['form-row']}>
        <label htmlFor="date" className={css['form-labels']}>
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={cn(css['input'], {
            [css['invalid']]: !formValidState.date,
          })}
        />
      </div>
      <div className={css['form-row']}>
        <label htmlFor="tags" className={css['form-labels']}>
          Tags
        </label>
        <input
          type="text"
          name="tag"
          id="tag"
          className={cn(css['input'], {
            [css['invalid']]: !formValidState.tag,
          })}
        />
      </div>

      <textarea
        name="post"
        cols={30}
        rows={10}
        className={cn(css['input'], {
          [css['invalid']]: !formValidState.post,
        })}
      />

      <Button text="Save" />
    </form>
  )
}

export default JournalForm
