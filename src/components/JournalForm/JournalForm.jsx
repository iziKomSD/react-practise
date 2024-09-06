import css from './JournalForm.module.css'
import Button from '../Button/Button'
import { useState } from 'react'

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    header: true,
    post: true,
    date: true,
  })

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
    if (!formIsValid) {
      return
    }
    onSubmit(formProps)
  }
  return (
    <form className={css['journal-form']} onSubmit={addJournalItem}>
      <input
        type="text"
        name="header"
        className={`${css['input']} ${
          formValidState.header ? '' : css['invalid']
        }`}
      />
      <input
        type="date"
        name="date"
        className={`${css['input']} ${
          formValidState.date ? '' : css['invalid']
        }`}
      />
      <input type="text" name="tag" id="" />
      <textarea
        name="post"
        cols={30}
        rows={10}
        className={`${css['input']} ${
          formValidState.post ? '' : css['invalid']
        }`}
      />

      <Button text="Save" />
    </form>
  )
}

export default JournalForm
