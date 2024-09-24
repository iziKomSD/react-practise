function SelectUser({ changedUser }) {
  const changeUser = (e) => {
    changedUser(e.target.value)
  }

  return (
    <>
      <select name="name" id="" onChange={changeUser}>
        <option value="Den">Den</option>
        <option value="Katya">Katya</option>
      </select>
    </>
  )
}

export default SelectUser
