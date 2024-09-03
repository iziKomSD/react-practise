import React, { useState } from 'react'
import './App.css'

import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Preparing updating courses',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mauris suscipit penatibus posuere ligula, facilisi porttitor aptent dui risus urna ultrices fusce maximus at curabitur.',
    date: new Date(),
  },
  {
    id: 2,
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
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ])
    console.log(item)
  }

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  )
}

export default App
