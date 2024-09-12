import css from './JournalForm.module.css'
import Button from '../Button/Button'
import { useEffect, useReducer } from 'react'
import cn from 'classnames'
import { formReducer, INITIAL_STATE } from './JournalForm.state'

// const INITIAL_STATE2 = {
//   header: true,
//   post: true,
//   date: true,
//   tag: true,
// }

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
  const { isValid, isFormReadyToSubmit, values } = formState

  useEffect(() => {
    let timerId
    if (!isValid.date || !isValid.post || !isValid.header || !isValid.tag) {
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
  }, [isFormReadyToSubmit])

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
        <input
          type="text"
          value={values.header}
          onChange={onChange}
          name="header"
          className={cn(css['input'], {
            [css['invalid']]: !isValid.header,
          })}
        />
      </div>
      <div className={css['form-row']}>
        <label htmlFor="date" className={css['form-labels']}>
          Date
        </label>
        <input
          type="date"
          value={values.date}
          onChange={onChange}
          name="date"
          id="date"
          className={cn(css['input'], {
            [css['invalid']]: !isValid.date,
          })}
        />
      </div>
      <div className={css['form-row']}>
        <label htmlFor="tags" className={css['form-labels']}>
          Tags
        </label>
        <input
          type="text"
          value={values.tag}
          onChange={onChange}
          name="tag"
          id="tag"
          className={cn(css['input'], {
            [css['invalid']]: !isValid.tag,
          })}
        />
      </div>

      <textarea
        name="post"
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
