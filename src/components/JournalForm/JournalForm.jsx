import { useState } from 'react'
import './JournalForm.css'
import Button from '../Button/Button'

function JournalForm() {
  const [inputData, setInputData] = useState('')

  const inputChange = (event) => {
    setInputData(event.target.value)
  }

  const addJournalItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    console.log(formProps)
  }
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="title" name="header" />
      <input type="date" name="date" />
      <input
        type="text"
        name="tag"
        id=""
        value={inputData}
        onChange={inputChange}
      />
      <textarea name="post" cols={30} rows={10} />
      <Button text="Save" />
    </form>
  )
}

export default JournalForm
