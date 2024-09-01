import React, { useState } from 'react'
import './App.css'
import JournalItem from './components/JournalItem/JournalItem'
import CardButton from './components/CardButton/CardButton'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'

const INITIAL_DATA = [
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

function App() {
  const [items, setItems] = useState(INITIAL_DATA)

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.post,
        title: item.header,
        date: new Date(item.date),
      },
    ])
    console.log(item)
  }

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.map((el) => (
            <CardButton>
              <JournalItem title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  )
}

export default App
