import SelectUser from '../SelectUser/SelectUser'
import styles from './Header.module.css'

function Header({ changedUser }) {
  const changeUser = (e) => {
    changedUser(e.target.value)
  }

  return (
    <>
      Logo
      <SelectUser />
    </>
  )
}

export default Header
