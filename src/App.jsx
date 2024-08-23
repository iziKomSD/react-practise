import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import JournalItem from './components/JournalItem/JournalItem'
import CardButton from './components/CardButton/CardButton'

function App() {
  // return React.createElement('div', {}, 'Project')

  const data = [
    {
      title: 'Preparing updating courses',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mauris suscipit penatibus posuere ligula, facilisi porttitor aptent dui risus urna ultrices fusce maximus at curabitur.',
      date: new Date(),
    },
    {
      title: 'Preparing practical lessons',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mauris suscipit penatibus posuere ligula',
      date: new Date(),
    },
  ]
  return (
    <>
      <h1>Heading</h1>
      <p>Some text after heading</p>
      <Button />
      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
        />
      </CardButton>
    </>
  )
}

export default App
