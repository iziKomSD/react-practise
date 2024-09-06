import './JournalForm.css'
import Button from '../Button/Button'
import { useState } from 'react'

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true,
  })

  const addJournalItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    let formIsValid = true
    if (!formProps.title?.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }))
      formIsValid = false
    }
    if (!formProps.text?.trim().length) {
      setFormValidState((state) => ({ ...state, text: false }))
      formIsValid = false
    }
    if (!formProps.date) {
      setFormValidState((state) => ({ ...state, date: false }))
      formIsValid = false
    }
    if (!formIsValid) {
      return
    }
    onSubmit(formProps)
  }
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        type="title"
        name="header"
        style={{ border: formValidState.title ? undefined : ' 1px solid red' }}
      />
      <input type="date" name="date" />
      <input type="text" name="tag" id="" />
      <textarea name="post" cols={30} rows={10} />
      <Button text="Save" />
    </form>
  )
}

export default JournalForm
