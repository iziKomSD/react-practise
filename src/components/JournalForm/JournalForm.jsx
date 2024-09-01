import './JournalForm.css'
import Button from '../Button/Button'

function JournalForm({ onSubmit }) {
  const addJournalItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    onSubmit(formProps)
  }
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="title" name="header" />
      <input type="date" name="date" />
      <input type="text" name="tag" id="" />
      <textarea name="post" cols={30} rows={10} />
      <Button
        text="Save"
        onClick={() => {
          console.log('Clicked Btn')
        }}
      />
    </form>
  )
}

export default JournalForm
