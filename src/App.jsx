import React from 'react'
import './App.css'
import JournalItem from './components/JournalItem/JournalItem'
import CardButton from './components/CardButton/CardButton'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'

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
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
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
        </JournalList>
      </LeftPanel>
      <Body>Body will be here</Body>
    </div>
  )
}

export default App
